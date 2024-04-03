import Footer from "../Footer";

import ablyStack from "../images/ably-stack.svg";
import highestPerformer from "../images/high-performer-2023.svg";
import bestSupport from "../images/best-support-2023.svg";
import fastestImplementation from "../images/fastest-implementation-2023.svg";
import highestUserAdoption from "../images/highest-user-adoption-2023.svg";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    paths: {
      ablyStack,
      highestPerformer,
      bestSupport,
      fastestImplementation,
      highestUserAdoption,
    },
  },
};

export const Default = {};
