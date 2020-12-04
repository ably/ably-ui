import React from "react";
import T from "prop-types";

const MeganavItemControl = ({ iconSpritesPath, ariaControls, children }) => (
  <button type="button" className="c-meganav-nav-item flex items-center group" aria-expanded="false" aria-controls={ariaControls}>
    {children}
    <svg className="w-12 h-12 ml-8 icon-dark-grey group-hover:icon-gui-hover">
      <use href={`${iconSpritesPath}/#sprite-disclosure-arrow`}></use>
    </svg>
  </button>
);

MeganavItemControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
  children: T.node,
};

export default MeganavItemControl;
