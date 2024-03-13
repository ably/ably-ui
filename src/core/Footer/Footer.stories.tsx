import Footer from "./component.jsx";

import ablyStack from "../../core/images/ably-stack.svg";
import highestPerformer from "../../core/images/high-performer-2023.svg";
import bestSupport from "../../core/images/best-support-2023.svg";
import fastestImplementation from "../../core/images/fastest-implementation-2023.svg";
import highestUserAdoption from "../../core/images/highest-user-adoption-2023.svg";

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
