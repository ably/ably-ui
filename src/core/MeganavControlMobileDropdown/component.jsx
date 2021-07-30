import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavControlMobileDropdown = ({ theme }) => (
  <button
    type="button"
    className="block ml-24 mr-0 px-0 py-16 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
    data-id="meganav-control-mobile-dropdown"
    aria-expanded="false"
    aria-controls="meganav-mobile-dropdown"
  >
    <Icon
      name="icon-gui-burger-menu"
      size="1.5rem"
      color={theme.mobileMenuColor}
      additionalCSS="transition-colors"
      data-id="meganav-control-mobile-dropdown-menu"
    />
    <Icon
      name="icon-gui-close"
      size="1.5rem"
      color={theme.mobileMenuColor}
      additionalCSS="transition-colors hidden"
      data-id="meganav-control-mobile-dropdown-close"
    />
  </button>
);

MeganavControlMobileDropdown.propTypes = {
  theme: T.object,
};

export default MeganavControlMobileDropdown;
