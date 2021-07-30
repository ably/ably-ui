import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControlMobilePanelOpen = ({ ariaControls, children }) => (
  <button
    type="button"
    className="ui-meganav-mobile-link"
    data-id="meganav-control-mobile-panel-open"
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <Icon name="icon-gui-disclosure-arrow" color="text-cool-black" size="1.5rem" additionalCSS="relative -top-1 ml-auto float-right" />
  </button>
);

MeganavControlMobilePanelOpen.propTypes = {
  ariaControls: T.string,
  children: T.node,
};

export default MeganavControlMobilePanelOpen;
