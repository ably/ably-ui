import "./component.css";
import Cookie from "js-cookie";
import debounce from "lodash.debounce";

import { queryId } from "../dom-query";

const COOKIE_EXPIRY = 90;
const COLLAPSE_TRIGGER_DISTANCE = 10;
const SCROLL_LISTENER_DEBOUNCE = 100;

const adjustFlashMargin = (open) => {
  // HACK ALERT
  // Add margin to flashes when opening the notice.
  // Flashes are react components and this notice needs to work as a view-component and react component.
  // We could do this with redux but then we potentially update state on every scroll event, which
  // even with debounce will deplate our frame budget.

  const flash = queryId("ui-flashes");

  if (flash) {
    flash.style.marginTop = open ? `4rem` : null;
  }
};

const hideNotice = (bannerContainer) => {
  bannerContainer.style.maxHeight = 0;
  bannerContainer.style.overflow = "hidden";

  adjustFlashMargin(false);
};

const showNotice = (bannerContainer) => {
  bannerContainer.style.maxHeight = null;
  bannerContainer.style.overflow = null;

  adjustFlashMargin(true);
};

const setupRememberClosed = (cookieId, noticeId) => {
  const cookie = Cookie.get(cookieId) || "";

  Cookie.set(cookieId, `${cookie.replace(`${noticeId},`, "") + noticeId},`, {
    expires: COOKIE_EXPIRY,
  });
};

const hasBeenClosedBefore = (cookieId, noticeId) =>
  (Cookie.get(cookieId) || "").includes(noticeId);

const setupNoticeCollapse = (bannerContainer) => {
  const scrollTop = window.scrollY;

  if (scrollTop > COLLAPSE_TRIGGER_DISTANCE) {
    hideNotice(bannerContainer);
  }

  const listener = debounce(() => {
    const scrollTop = window.scrollY;

    if (scrollTop > COLLAPSE_TRIGGER_DISTANCE) {
      hideNotice(bannerContainer);
    } else if (bannerContainer.style.overflow) {
      showNotice(bannerContainer);
    }
  }, SCROLL_LISTENER_DEBOUNCE);

  document.addEventListener("scroll", listener);

  return () => document.removeEventListener("scroll", listener);
};

const setupCloseBtn = (
  bannerContainer,
  cookieId,
  noticeId,
  collapseUnmountListeners
) => {
  const closeBtn = bannerContainer.querySelector("button");

  if (!closeBtn) return () => {};

  const listener = () => {
    if (cookieId && noticeId) setupRememberClosed(cookieId, noticeId);

    hideNotice(bannerContainer);
    collapseUnmountListeners();
  };

  closeBtn.addEventListener("click", listener);

  return () => document.removeEventListener("click", listener);
};

const Notice = ({ bannerContainer, cookieId, noticeId, options }) => {
  if (typeof window === "undefined") return () => {};

  if (!bannerContainer) {
    console.warn(
      "A Notice component was initited but no notice container was found."
    );
    return () => {};
  }

  if (hasBeenClosedBefore(cookieId, noticeId)) return () => {};

  showNotice(bannerContainer);

  const opts = { collapse: true, ...options };

  const collapseUnmountListeners = opts.collapse
    ? setupNoticeCollapse(bannerContainer)
    : () => {};

  const closeBtnUnmountListeners = setupCloseBtn(
    bannerContainer,
    cookieId,
    noticeId,
    collapseUnmountListeners
  );

  return () => {
    [closeBtnUnmountListeners, collapseUnmountListeners].forEach((unmount) =>
      unmount()
    );
  };
};

export default Notice;
