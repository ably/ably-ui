import React, { useRef } from "react";
import T from "prop-types";

const SignOutLink = ({ token, href, text, children }) => {
  const formRef = useRef(null);

  const onClick = (e) => {
    formRef.current.submit();
    e.preventDefault();
  };

  return (
    <>
      <form ref={formRef} method="post" action={href} className="hidden">
        <input name="_method" value="delete" type="hidden" />
        <input name="authenticity_token" value={token} type="hidden" />
      </form>

      {children({ href, text, onClick })}
    </>
  );
};

SignOutLink.propTypes = {
  token: T.string,
  href: T.string,
  text: T.string,
  children: T.func,
};

export default SignOutLink;
