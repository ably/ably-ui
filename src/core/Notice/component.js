import "./component.css";
import Cookie from "js-cookie";
import throttle from "lodash.throttle";

import { queryId } from "../dom-query";
import { FLASH_DATA_ID } from "../Flash/component.tsx";

const COOKIE_EXPIRY = 90;
const COLLAPSE_TRIGGER_DISTANCE = 5;
const SCROLL_LISTENER_THROTTLE = 100;
const RESIZE_LISTENER_THROTTLE = 100;

const isMdViewport = () => !window.matchMedia(`(min-width: 65rem)`).matches;

const adjustFlashMargin = (open) => {
  // HACK ALERT
  // Add margin to flashes when opening the notice.
  // Flashes are react components and this notice needs to work as a view-component and react component.
  // We could do this with redux but then we potentially update state on every scroll event, which
  // even with debounce will deplate our frame budget.

  const flash = queryId(FLASH_DATA_ID);

  if (flash) {
    flash.style.marginTop = open ? `4rem` : null;
  }
};

const hideOnMobile = (bannerContainer) => {
  if (isMdViewport()) {
    bannerContainer.style.display = "none";
  } else {
    bannerContainer.style.display = null;
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

  const listener = throttle(() => {
    const scrollTop = window.scrollY;

    if (scrollTop > COLLAPSE_TRIGGER_DISTANCE) {
      hideNotice(bannerContainer);
    } else if (bannerContainer.style.overflow) {
      showNotice(bannerContainer);
    }
  }, SCROLL_LISTENER_THROTTLE);

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

const resizeHandler = (bannerContainer) => {
  const handler = throttle(() => {
    hideOnMobile(bannerContainer);
  }, RESIZE_LISTENER_THROTTLE);

  window.addEventListener("resize", handler);

  return () => window.removeEventListener("resize", handler);
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

  hideOnMobile(bannerContainer);
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

  const resizeUnmountListener = resizeHandler(bannerContainer);

  return () => {
    [
      closeBtnUnmountListeners,
      collapseUnmountListeners,
      resizeUnmountListener,
    ].forEach((unmount) => unmount());
  };
};

export default Notice;
