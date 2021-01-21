import React from "react";
import T from "prop-types";

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
    <svg className="w-12 h-12 ml-8 ui-icon-dark-grey group-hover:icon-gui-hover group-focus:icon-gui-focus">
      <use xlinkHref="#sprite-disclosure-arrow"></use>
    </svg>
  </button>
);

MeganavControl.propTypes = {
  ariaControls: T.string,
  children: T.node,
  theme: T.object,
};

export default MeganavControl;
