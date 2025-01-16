import React from "react";
import LogoAsset from "./images/ably-logo.svg";

type LogoProps = {
  dataId?: string;
  logoUrl?: string;
  logoAlt?: string;
  href?: string;
  additionalImgAttrs?: object;
  additionalLinkAttrs?: object;
};

const Logo = ({
  dataId,
  logoUrl,
  logoAlt,
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
    <img
      src={logoUrl ?? LogoAsset}
      width="108px"
      alt={logoAlt ?? "Ably logo"}
      {...additionalImgAttrs}
    />
  </a>
);

export default React.memo(Logo);
