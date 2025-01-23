import React from "react";

import Icon from "./Icon";
import { MeganavTheme } from "./Meganav";

const MeganavControlMobileDropdown = ({ theme }: { theme: MeganavTheme }) => (
  <button
    type="button"
    className="block ml-24 mr-0 px-0 py-16 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
    data-id="meganav-control-mobile-dropdown"
    aria-expanded="false"
    aria-controls="meganav-mobile-dropdown"
  >
    <Icon
      name="icon-gui-bars-3-outline"
      size="1.5rem"
      color={theme.mobileMenuColor}
      additionalCSS="transition-colors"
      data-id="meganav-control-mobile-dropdown-menu"
    />
    <Icon
      name="icon-gui-x-mark-outline"
      size="1.5rem"
      color={theme.mobileMenuColor}
      additionalCSS="transition-colors hidden"
      data-id="meganav-control-mobile-dropdown-close"
    />
  </button>
);

export default MeganavControlMobileDropdown;
