import React from "react";
import T from "prop-types";

const PanelOpenControl = ({ iconSpritesPath, ariaControls, children }) => (
  <button type="button" className="c-meganav-mobile-link" data-id="meganav-mobile-panel-open" aria-expanded="false" aria-controls={ariaControls}>
    {children}
    <svg className="transform -rotate-90 ml-auto float-right w-12 h-12 icon-dark-grey">
      <use href={`${iconSpritesPath}#sprite-disclosure-arrow`}></use>
    </svg>
  </button>
);

PanelOpenControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
  children: T.node,
};

export default PanelOpenControl;
