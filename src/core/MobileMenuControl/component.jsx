import React from "react";
import T from "prop-types";

const MobileMenuControl = ({ iconSpritesPath, ariaControls }) => (
  <button
    type="button"
    className="c-meganav-nav-item mr-0 py-16 focus:outline-none"
    data-id="meganav-mobile-menu"
    aria-expanded="false"
    aria-controls={ariaControls}
  >
    <svg className="h-24 w-24 icon-cool-black">
      <use href={`${iconSpritesPath}#sprite-menu`}></use>
    </svg>
    <svg className="h-24 w-24 icon-cool-black hidden">
      <use href={`${iconSpritesPath}#sprite-close`}></use>
    </svg>
  </button>
);

MobileMenuControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
};

export default MobileMenuControl;
