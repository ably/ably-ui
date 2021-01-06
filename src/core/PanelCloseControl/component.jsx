import React from "react";
import T from "prop-types";

const PanelCloseControl = ({ iconSpritesPath, ariaControls }) => (
  <div className="mt-16 mx-24 md:mx-32">
    <button type="button" className="ui-meganav-mobile-link mb-16" data-id="meganav-mobile-panel-close" aria-expanded="false" aria-controls={ariaControls}>
      <svg className="transform rotate-90 w-12 h-12 mr-8 icon-dark-grey">
        <use href={`${iconSpritesPath}#sprite-disclosure-arrow`}></use>
      </svg>
      Menu
    </button>
    <hr className="ui-meganav-hr" />
  </div>
);

PanelCloseControl.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
};

export default PanelCloseControl;
