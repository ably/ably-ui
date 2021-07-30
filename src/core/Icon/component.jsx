import React from "react";
import T from "prop-types";

const Icon = ({ name, size = "0.75rem", color = "", additionalCSS = "", ...additionalAttributes }) => {
  return (
    <svg className={`${color} ${additionalCSS}`} style={{ width: size, height: size }} {...additionalAttributes}>
      <use xlinkHref={`#sprite-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  color: T.string,
  additionalCSS: T.string,
};

export default Icon;
