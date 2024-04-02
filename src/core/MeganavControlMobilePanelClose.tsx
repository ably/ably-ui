import React from "react";

import Icon from "./Icon";
type MeganavControlMobilePanelCloseProps = {
  ariaControls: string;
  displayHr?: boolean;
};

const MeganavControlMobilePanelClose = ({
  ariaControls,
  displayHr = true,
}: MeganavControlMobilePanelCloseProps) => (
  <div className="mx-24 md:mx-32">
    <button
      type="button"
      className="ui-meganav-mobile-link text-gui-default mb-16"
      data-id="meganav-control-mobile-panel-close"
      aria-expanded="false"
      aria-controls={ariaControls}
      aria-label="Hide panel"
    >
      <Icon
        name="icon-gui-disclosure-arrow"
        color="text-cool-black"
        size="1.5rem"
        additionalCSS="relative -top-1 transform rotate-180"
      />
      Back
    </button>
    {displayHr ? <hr className="ui-meganav-hr" /> : null}
  </div>
);

export default MeganavControlMobilePanelClose;
