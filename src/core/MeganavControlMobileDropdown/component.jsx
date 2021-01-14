import React from "react";
import T from "prop-types";

const MeganavControlMobileDropdown = ({ iconSpritesPath, theme }) => (
  <button
    type="button"
    className="block ml-8 mr-0 px-0 py-16 hover:text-gui-hover focus:text-gui-focus focus:outline-none transition-colors"
    data-id="meganav-control-mobile-dropdown"
    aria-expanded="false"
    aria-controls="meganav-mobile-dropdown"
  >
    <svg className={`h-24 w-24 ${theme.mobileMenuColor}`}>
      <use href={`${iconSpritesPath}#sprite-menu`}></use>
    </svg>
    <svg className={`h-24 w-24 hidden ${theme.mobileMenuColor}`}>
      <use href={`${iconSpritesPath}#sprite-close`}></use>
    </svg>
  </button>
);

MeganavControlMobileDropdown.propTypes = {
  iconSpritesPath: T.string,
  theme: T.object,
};

export default MeganavControlMobileDropdown;
