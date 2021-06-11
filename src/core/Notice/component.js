import "./component.css";
import Cookie from "js-cookie";
import debounce from "lodash.debounce";

const COOKIE_EXPIRY = 90;
const COLLAPSE_TRIGGER_DISTANCE = 10;
const SCROLL_LISTENER_DEBOUNCE = 100;

const hideNotice = (bannerContainer) => {
  bannerContainer.style.maxHeight = 0;
  bannerContainer.style.overflow = "hidden";
};

const showNotice = (bannerContainer) => {
  bannerContainer.style.maxHeight = null;
  bannerContainer.style.overflow = null;
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
