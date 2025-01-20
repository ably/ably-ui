import React from "react";
import LogoAssetMonoStacked from "./images/logo/ably-logo-mono-stacked.svg";
import LogoAssetMonoWhiteStacked from "./images/logo/ably-logo-mono-white-stacked.svg";
import LogoAssetMonoWhite from "./images/logo/ably-logo-mono-white.svg";
import LogoAssetMono from "./images/logo/ably-logo-mono.svg";
import LogoAssetStacked from "./images/logo/ably-logo-stacked.svg";
import LogoAssetWhiteStacked from "./images/logo/ably-logo-white-stacked.svg";
import LogoAssetWhite from "./images/logo/ably-logo-white.svg";
import LogoAsset from "./images/logo/ably-logo.svg";

type LogoProps = {
  dataId?: string;
  logoUrl?: string;
  logoAlt?: string;
  href?: string;
  additionalImgAttrs?: object;
  additionalLinkAttrs?: object;
  theme?: "light" | "dark";
  variant?: "default" | "mono";
  orientation?: "default" | "stacked";
};

const Logo = ({
  dataId,
  href = "/",
  additionalImgAttrs,
  additionalLinkAttrs,
  theme = "light",
  variant = "default",
  orientation = "default",
  logoUrl,
  logoAlt = "Ably logo",
}: LogoProps) => {
  let logoSrc = logoUrl;

  if (!logoSrc) {
    if (theme === "dark") {
      if (variant === "mono") {
        logoSrc =
          orientation === "stacked"
            ? LogoAssetMonoWhiteStacked
            : LogoAssetMonoWhite;
      } else {
        logoSrc =
          orientation === "stacked" ? LogoAssetWhiteStacked : LogoAssetWhite;
      }
    } else {
      if (variant === "mono") {
        logoSrc =
          orientation === "stacked" ? LogoAssetMonoStacked : LogoAssetMono;
      } else {
        logoSrc = orientation === "stacked" ? LogoAssetStacked : LogoAsset;
      }
    }
  }

  return (
    <a href={href} data-id={dataId} className="block" {...additionalLinkAttrs}>
      <img src={logoSrc} width="108px" alt={logoAlt} {...additionalImgAttrs} />
    </a>
  );
};

export default React.memo(Logo);
