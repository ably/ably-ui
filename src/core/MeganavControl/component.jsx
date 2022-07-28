import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControl = ({ ariaControls, children, theme, additionalCSS }) => (
  <button
    type="button"
    data-id="meganav-control"
    className={`ui-meganav-link h-64 flex items-center group ${additionalCSS} ${theme.textColor}`}
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <Icon
      name="icon-gui-disclosure-arrow"
      color="text-cool-black"
      size="1.5rem"
      additionalCSS="transform rotate-90 group-hover:text-gui-hover group-focus:text-gui-focus"
    />
  </button>
);

MeganavControl.propTypes = {
  ariaControls: T.string,
  children: T.node,
  theme: T.object,
  additionalCSS: T.string,
};

export default MeganavControl;
