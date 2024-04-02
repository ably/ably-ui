import React, { ReactNode } from "react";

import Icon from "./Icon";
import { MeganavTheme } from "./Meganav";

type MeganavControlProps = {
  ariaControls: string;
  ariaLabel: string;
  children: ReactNode;
  theme: MeganavTheme;
  additionalCSS?: string;
};

const MeganavControl = ({
  ariaControls,
  ariaLabel,
  children,
  theme,
  additionalCSS,
}: MeganavControlProps) => (
  <button
    type="button"
    data-id="meganav-control"
    className={`ui-meganav-link h-64 flex items-center group ${additionalCSS} ${theme.textColor}`}
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${ariaLabel} panel`}
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

export default MeganavControl;
