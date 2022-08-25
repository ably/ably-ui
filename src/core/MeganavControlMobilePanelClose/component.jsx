import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControlMobilePanelClose = ({ ariaControls, displayHr = true }) => (
  <div className="mx-24 md:mx-32">
    <button
      type="button"
      className="ui-meganav-mobile-link text-gui-default mb-16"
      data-id="meganav-control-mobile-panel-close"
      aria-expanded="false"
      aria-controls={ariaControls}
      aria-label="Hide panel"
    >
      <Icon name="icon-gui-disclosure-arrow" color="text-cool-black" size="1.5rem" additionalCSS="relative -top-1 transform rotate-180" />
      Back
    </button>
    {displayHr ? <hr className="ui-meganav-hr" /> : null}
  </div>
);

MeganavControlMobilePanelClose.propTypes = {
  ariaControls: T.string,
  displayHr: T.bool,
};

export default MeganavControlMobilePanelClose;
