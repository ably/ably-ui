import React, { ReactNode } from "react";

import Icon from "../Icon";
type MeganavControlMobilePanelOpenProps = {
  ariaControls: string;
  children: ReactNode;
};

const MeganavControlMobilePanelOpen = ({
  ariaControls,
  children,
}: MeganavControlMobilePanelOpenProps) => (
  <button
    type="button"
    className="ui-meganav-mobile-link"
    data-id="meganav-control-mobile-panel-open"
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <Icon
      name="icon-gui-chevron-right-micro"
      color="text-cool-black"
      size="1.5rem"
      additionalCSS="relative -top-1 ml-auto float-right"
    />
  </button>
);

export default MeganavControlMobilePanelOpen;
