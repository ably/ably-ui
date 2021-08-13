import React, { useRef, useEffect, useState } from "react";
import T from "prop-types";
import Cookie from "js-cookie";

import _absUrl from "../url-base";

const COOKIE_EXPIRY = 365;

export default function CookieMessage({ cookieId, urlBase }) {
  const ref = useRef(null);
  const [hideCookieMessage, setHideCookieMessage] = useState(true);

  useEffect(() => {
    const isCookieSet = Cookie.get(cookieId) ? true : false;
    setHideCookieMessage(isCookieSet);
  }, []);

  const handleClose = () => {
    Cookie.set(cookieId, "1", { expires: COOKIE_EXPIRY });

    ref.current.classList.add("bottom-1", "opacity-0");
    setTimeout(() => setHideCookieMessage(true), 500);
  };

  const absUrl = (path) => _absUrl(path, urlBase);

  // Presume the message is hidden by default
  if (hideCookieMessage) return null;

  return (
    <div className="ui-cookie-message" ref={ref}>
      <p className="ui-text-p2 pr-32">
        <a href={absUrl("/privacy")} className="underline">
          How we use cookies
        </a>{" "}
        to improve your experience.
      </p>
      <button className="ui-btn-secondary mt-12 sm:mt-0 whitespace-nowrap" onClick={handleClose}>
        Accept and close
      </button>
    </div>
  );
}

CookieMessage.propTypes = {
  cookieId: T.string,
  urlBase: T.string,
};
