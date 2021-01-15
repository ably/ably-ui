import React from "react";
import T from "prop-types";

const MeganavControlMobilePanelClose = ({ iconSpritesPath, ariaControls }) => (
  <div className="mx-24 md:mx-32">
    <button
      type="button"
      className="ui-meganav-mobile-link mb-16"
      data-id="meganav-control-mobile-panel-close"
      aria-expanded="false"
      aria-controls={ariaControls}
      aria-label="Hide panel"
    >
      <svg className="transform rotate-90 w-12 h-12 mr-8 ui-icon-dark-grey">
        <use href={`${iconSpritesPath}#sprite-disclosure-arrow`}></use>
      </svg>
      Menu
    </button>
    <hr className="ui-meganav-hr" />
  </div>
);

MeganavControlMobilePanelClose.propTypes = {
  iconSpritesPath: T.string,
  ariaControls: T.string,
};

export default MeganavControlMobilePanelClose;
