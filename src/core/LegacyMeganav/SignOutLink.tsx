import React, { MouseEvent, MouseEventHandler, ReactNode, useRef } from "react";
import { AbsUrl } from "./LegacyMeganav";

type SignOutLinkProps = {
  token: string;
  href: string;
  text: string;
  children: ({
    href,
    text,
    onClick,
  }: {
    href: string;
    text: string;
    onClick: MouseEventHandler<HTMLAnchorElement>;
  }) => ReactNode;
  absUrl: AbsUrl;
};

const SignOutLink = ({
  token,
  href,
  text,
  children,
  absUrl,
}: SignOutLinkProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const onClick = (e: MouseEvent) => {
    formRef.current?.submit();
    e.preventDefault();
  };

  return (
    <>
      <form
        ref={formRef}
        method="post"
        action={absUrl(href)}
        className="hidden"
      >
        <input name="_method" value="delete" type="hidden" />
        <input name="authenticity_token" value={token} type="hidden" />
      </form>

      {children({ href, text, onClick })}
    </>
  );
};

export default SignOutLink;
