import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import Badge from "./Badge";
import cn from "./utils/cn";
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
  additionalImgAttrs?: ImgHTMLAttributes<HTMLImageElement>;
  additionalLinkAttrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
  theme?: "light" | "dark";
  variant?: "default" | "mono";
  orientation?: "default" | "stacked";
  badge?: string;
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
  badge,
}: LogoProps) => {
  const getLogoSrc = React.useCallback(() => {
    if (logoUrl) return logoUrl;

    if (theme === "dark") {
      if (variant === "mono") {
        return orientation === "stacked"
          ? LogoAssetMonoWhiteStacked
          : LogoAssetMonoWhite;
      } else {
        return orientation === "stacked"
          ? LogoAssetWhiteStacked
          : LogoAssetWhite;
      }
    } else {
      if (variant === "mono") {
        return orientation === "stacked" ? LogoAssetMonoStacked : LogoAssetMono;
      } else {
        return orientation === "stacked" ? LogoAssetStacked : LogoAsset;
      }
    }
  }, [logoUrl, theme, variant, orientation]);

  const logoSrc = getLogoSrc();

  return (
    <a
      href={href}
      data-id={dataId}
      {...additionalLinkAttrs}
      className={cn(
        "flex items-center gap-2 justify-center",
        additionalLinkAttrs?.className,
      )}
    >
      <img src={logoSrc} width="96px" alt={logoAlt} {...additionalImgAttrs} />
      {badge && (
        <Badge className="uppercase h-8 bg-transparent dark:bg-transparent rounded border border-neutral-400 dark:border-neutral-900 text-lg p-2 font-semibold text-neutral-800 dark:text-neutral-500">
          {badge}
        </Badge>
      )}
    </a>
  );
};

export default React.memo(Logo);
