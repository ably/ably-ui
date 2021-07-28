import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControl = ({ ariaControls, children, theme }) => (
  <button
    type="button"
    data-id="meganav-control"
    className={`ui-meganav-link h-64 flex items-center group ${theme.textColor}`}
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <Icon name="disclosure-arrow" color="text-cool-black" size="0.75rem" additionalCSS="ml-8 group-hover:text-gui-hover group-focus:text-gui-focus" />
  </button>
);

MeganavControl.propTypes = {
  ariaControls: T.string,
  children: T.node,
  theme: T.object,
};

export default MeganavControl;
