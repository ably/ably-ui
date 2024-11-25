import React from "react";
import { delay, http, HttpResponse } from "msw";
import { SWRConfig } from "swr";
import Status from "../Status";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "Components/Status",
  component: Status,
  args: {
    statusUrl,
  },
  tags: ["!autodocs"],
};

const withEmptySWRCache = (component: JSX.Element) => (
  <SWRConfig value={{ provider: () => new Map() }}>{component}</SWRConfig>
);

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
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Error = {
  parameters: {
    msw: {
      handlers: {
        statusError: http.get(statusUrl, () => {
          return HttpResponse.error();
        }),
      },
    },
  },
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

const mockParametersWithStatus = (indicator: string) => {
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
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Operational = {
  parameters: mockParametersWithStatus("operational"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Minor = {
  parameters: mockParametersWithStatus("minor"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Major = {
  parameters: mockParametersWithStatus("major"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Critical = {
  parameters: mockParametersWithStatus("critical"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};

export const Unknown = {
  parameters: mockParametersWithStatus("unknown"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={statusUrl} refreshInterval={0} />),
};
