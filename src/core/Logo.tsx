import React from "react";

type LogoProps = {
  dataId: string;
  logoUrl: string;
  href?: string;
  additionalImgAttrs?: object;
  additionalLinkAttrs?: object;
};

const Logo = ({
  dataId,
  logoUrl,
  href = "/",
  additionalImgAttrs,
  additionalLinkAttrs,
}: LogoProps) => (
  <a
    href={href}
    data-id={dataId}
    className="block"
    style={{ height: "2.125rem" }}
    {...additionalLinkAttrs}
  >
    <img src={logoUrl} width="108px" alt="Ably logo" {...additionalImgAttrs} />
  </a>
);

export default React.memo(Logo);
