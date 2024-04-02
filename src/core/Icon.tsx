import React from "react";

type IconProps = {
  name: string;
  size?: string;
  color?: string;
  additionalCSS?: string;
};

const Icon = ({
  name,
  size = "0.75rem",
  color = "",
  additionalCSS = "",
  ...additionalAttributes
}: IconProps) => (
  <svg
    className={`${color} ${additionalCSS}`}
    style={{ width: size, height: size }}
    {...additionalAttributes}
  >
    <use xlinkHref={`#sprite-${name}`} />
  </svg>
);

export default Icon;
