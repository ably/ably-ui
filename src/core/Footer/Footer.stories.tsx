import { delay, http, HttpResponse } from "msw";

import Footer from "../Footer";

import ablyStack from "../images/ably-stack.svg";
import highestPerformer from "../images/high-performer-2023.svg";
import bestSupport from "../images/best-support-2023.svg";
import fastestImplementation from "../images/fastest-implementation-2023.svg";
import highestUserAdoption from "../images/highest-user-adoption-2023.svg";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "JS Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: {
        status: http.get(statusUrl, async () => {
          await delay();

          return HttpResponse.json({
            status: {
              indicator: "none",
            },
          });
        }),
      },
    },
  },
  args: {
    paths: {
      ablyStack,
      highestPerformer,
      bestSupport,
      fastestImplementation,
      highestUserAdoption,
    },
    statusUrl: statusUrl,
  },
};

export const Default = {};
