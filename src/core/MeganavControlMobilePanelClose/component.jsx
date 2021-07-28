import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControlMobilePanelClose = ({ ariaControls }) => (
  <div className="mx-24 md:mx-32">
    <button
      type="button"
      className="ui-meganav-mobile-link mb-16"
      data-id="meganav-control-mobile-panel-close"
      aria-expanded="false"
      aria-controls={ariaControls}
      aria-label="Hide panel"
    >
      <Icon name="disclosure-arrow" color="text-cool-black" size="0.6rem" additionalCSS="transform rotate-90 mr-8" />
      Back
    </button>
    <hr className="ui-meganav-hr" />
  </div>
);

MeganavControlMobilePanelClose.propTypes = {
  ariaControls: T.string,
};

export default MeganavControlMobilePanelClose;
