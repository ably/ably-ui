import React from "react";
import T from "prop-types";

const MeganavControlMobileDropdown = ({ iconSpritesPath, theme }) => (
  <button
    type="button"
    className="block ml-24 mr-0 px-0 py-16 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
    data-id="meganav-control-mobile-dropdown"
    aria-expanded="false"
    aria-controls="meganav-mobile-dropdown"
  >
    <svg className={`h-24 w-24 transition-colors ${theme.mobileMenuColor}`} data-id="meganav-control-mobile-dropdown-menu">
      <use xlinkHref={`${iconSpritesPath}#sprite-menu`}></use>
    </svg>
    <svg className={`h-24 w-24 transition-colors hidden ${theme.mobileMenuColor}`} data-id="meganav-control-mobile-dropdown-close">
      <use xlinkHref={`${iconSpritesPath}#sprite-close`}></use>
    </svg>
  </button>
);

MeganavControlMobileDropdown.propTypes = {
  iconSpritesPath: T.string,
  theme: T.object,
};

export default MeganavControlMobileDropdown;
