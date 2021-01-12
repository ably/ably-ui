import React from "react";
import T from "prop-types";

const MobileMenuControl = ({ iconSpritesPath, ariaControls, theme }) => (
  <button
    type="button"
    className="ui-meganav-nav-item mr-0 py-16 focus:outline-none"
    data-id="meganav-mobile-menu"
    aria-expanded="false"
    aria-controls={ariaControls}
  >
    <svg className={`h-24 w-24 ${theme.mobileMenuColor}`}>
      <use href={`${iconSpritesPath}#sprite-menu`}></use>
    </svg>
    <svg className={`h-24 w-24 hidden ${theme.mobileMenuColor}`}>
      <use href={`${iconSpritesPath}#sprite-close`}></use>
    </svg>
  </button>
);

MobileMenuControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
  theme: T.object,
};

export default MobileMenuControl;
