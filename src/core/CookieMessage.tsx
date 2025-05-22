import React, { useRef, useEffect, useState } from "react";
import Cookie from "js-cookie";

import _absUrl from "./url-base";

const COOKIE_EXPIRY = 365;

type CookieMessageProps = {
  cookieId: string;
  urlBase: string;
};

const CookieMessage = ({ cookieId, urlBase }: CookieMessageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hideCookieMessage, setHideCookieMessage] = useState(true);

  useEffect(() => {
    const isCookieSet = Cookie.get(cookieId) ? true : false;
    setHideCookieMessage(isCookieSet);
  }, []);

  const handleClose = () => {
    Cookie.set(cookieId, "1", { expires: COOKIE_EXPIRY });

    ref.current?.classList.add("bottom-px", "opacity-0");
    setTimeout(() => setHideCookieMessage(true), 500);
  };

  const absUrl = (path: string) => _absUrl(path, urlBase);

  // Presume the message is hidden by default
  if (hideCookieMessage) return null;

  return (
    <div className="ui-cookie-message" ref={ref}>
      <p className="ui-text-p2 pr-8">
        <a href={absUrl("/privacy")} className="underline">
          How we use cookies
        </a>{" "}
        to improve your experience.
      </p>
      <button
        className="ui-btn-secondary mt-3 sm:mt-0 whitespace-nowrap"
        onClick={handleClose}
      >
        Accept and close
      </button>
    </div>
  );
};

export default CookieMessage;
