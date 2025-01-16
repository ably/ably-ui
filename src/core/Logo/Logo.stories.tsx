import Logo from "../Logo";
import HubspotLogo from "../images/cust-logo-hubspot-mono-pos.svg";

export default {
  title: "Components/Logo",
  component: Logo,
};

export const Default = {};

export const CustomLogo = {
  args: {
    logoUrl: HubspotLogo,
    logoAlt: "Hubspot logo",
  },
};
