import React from "react";
import { delay, http, HttpResponse } from "msw";
import Status from "../Status";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "JS Components/Status",
  component: Status,
  args: {
    statusUrl,
  },
  tags: ["!autodocs"],
};

export const Loading = {
  parameters: {
    msw: {
      handlers: {
        statusNone: http.get(statusUrl, async () => {
          await delay("infinite");

          return HttpResponse.json({
            status: {
              indicator: "will never arrive",
            },
          });
        }),
      },
    },
  },
  render: () => <Status statusUrl={statusUrl} />,
};

const mockParametersWithStatus = (indicator) => {
  return {
    msw: {
      handlers: {
        status: http.get(statusUrl, async () => {
          await delay();

          return HttpResponse.json({
            status: {
              indicator: indicator,
            },
          });
        }),
      },
    },
  };
};

export const None = {
  parameters: mockParametersWithStatus("none"),
  render: () => <Status statusUrl={statusUrl} />,
};

export const Operational = {
  parameters: mockParametersWithStatus("operational"),
  render: () => <Status statusUrl={statusUrl} />,
};

export const Minor = {
  parameters: mockParametersWithStatus("minor"),
  render: () => <Status statusUrl={statusUrl} />,
};

export const Major = {
  parameters: mockParametersWithStatus("major"),
  render: () => <Status statusUrl={statusUrl} />,
};

export const Critical = {
  parameters: mockParametersWithStatus("critical"),
  render: () => <Status statusUrl={statusUrl} />,
};

export const Unknown = {
  parameters: mockParametersWithStatus("unknown"),
  render: () => <Status statusUrl={statusUrl} />,
};
