import React from "react";
import Logo from "../Logo";

export default {
  title: "Components/Logo",
  component: Logo,
};

const LogoSet = (variant, orientation, badge?: string) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="text-center ui-text-code2 order-1">light</div>
    <div className="text-center ui-text-code2 order-3 sm:order-2">dark</div>
    <Logo
      variant={variant}
      orientation={orientation}
      theme="light"
      badge={badge}
      additionalLinkAttrs={{
        className: "text-center p-2 bg-neutral-000 rounded order-2 sm:order-3",
      }}
    />
    <Logo
      variant={variant}
      orientation={orientation}
      theme="dark"
      badge={badge}
      additionalLinkAttrs={{
        className:
          "ui-theme-dark text-center p-2 bg-neutral-1300 rounded order-4",
      }}
    />
  </div>
);

export const Default = {
  render: () => LogoSet("default", "default"),
};

export const Mono = {
  render: () => LogoSet("mono", "default"),
};

export const Stacked = {
  render: () => LogoSet("default", "stacked"),
};

export const WithBadge = {
  render: () => LogoSet("default", "default", "docs"),
};
