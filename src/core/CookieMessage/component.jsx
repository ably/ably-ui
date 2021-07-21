import React from "react";
import Cookie from "js-cookie";

const COOKIE_EXPIRY = 365;

const cookieId = "footer-cookie-message";
const hasBeenClosedBefore = Cookie.get(cookieId);

function handleClose() {
  const { current } = this;
  const deleteSelf = () => current.parentNode.remove(current);

  current.classList.add("ui-cookie-message-vanish");
  Cookie.set(cookieId, cookieId, { expires: COOKIE_EXPIRY });
  setTimeout(deleteSelf, 450);
}

export default function CookieMessage() {
  if (hasBeenClosedBefore) return null;

  const ref = React.createRef();

  return (
    <div className="ui-cookie-message-cyan" ref={ref}>
      <span className="text-p2 text-cool-black pr-32">
        We use cookies to improve your experience and for marketing, laid out in our{" "}
        <a href="/privacy" className="underline">
          cookie policy
        </a>
        .
      </span>
      <button className="ui-btn-secondary mt-12 sm:mt-0 whitespace-nowrap" onClick={handleClose.bind(ref)}>
        Accept and close
      </button>
    </div>
  );
}
