import { delay, http, HttpResponse } from "msw";

import LegacyFooter from "./LegacyFooter";

import ablyStack from "../images/ably-stack.svg";
import bestSupport from "../images/g2-best-support-2025.svg";
import highPerformer from "../images/g2-high-performer-2025.svg";
import usersMostLikely from "../images/g2-users-most-likely-to-recommend-2025.svg";
import bestMeetsRequirements from "../images/g2-best-meets-requirements-2025.svg";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "Components/LegacyFooter",
  component: LegacyFooter,
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
      bestSupport,
      highPerformer,
      usersMostLikely,
      bestMeetsRequirements,
    },
    statusUrl: statusUrl,
  },
};

export const Default = {};
