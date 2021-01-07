import React from "react";
import T from "prop-types";

const MeganavItemControl = ({ iconSpritesPath, ariaControls, children }) => (
  <button
    data-id="meganav-item-control"
    type="button"
    className="ui-meganav-nav-item h-64 flex items-center group"
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <svg className="w-12 h-12 ml-8 icon-dark-grey group-hover:icon-gui-hover group-focus:icon-gui-focus">
      <use href={`${iconSpritesPath}#sprite-disclosure-arrow`}></use>
    </svg>
  </button>
);

MeganavItemControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
  children: T.node,
};

export default MeganavItemControl;
