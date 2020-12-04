import React from "react";
import T from "prop-types";

const Logo = ({ logoPath }) => (
  <a href="/" className="h-32">
    <img src={logoPath} alt="Ably homepage" />
  </a>
);

Logo.propTypes = {
  logoPath: T.string,
};

export default Logo;
