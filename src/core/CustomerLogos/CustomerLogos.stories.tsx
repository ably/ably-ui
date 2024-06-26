import CustomerLogos from "../CustomerLogos";

import hubspot from "../images/cust-logo-hubspot-mono-pos.svg";
import webflow from "../images/cust-logo-webflow-col-pos.svg";
import mentimeter from "../images/cust-logo-mentimeter-mono-pos.svg";
import toyota from "../images/cust-logo-toyota-mono-pos.svg";
import split from "../images/cust-logo-split-mono-pos.svg";
import australian from "../images/cust-logo-ausopen-mono-pos.svg";

export default {
  title: "JS Components/Customer Logos",
  component: CustomerLogos,
  args: {
    companies: [
      {
        label: "Hubspot",
        logo: hubspot,
      },
      {
        label: "Webflow",
        logo: webflow,
      },
      {
        label: "Mentimeter",
        logo: mentimeter,
      },
      {
        label: "Toyota",
        logo: toyota,
      },
      {
        label: "Split",
        logo: split,
      },
      {
        label: "Australian Open",
        logo: australian,
      },
    ],
  },
};

export const Default = {};
