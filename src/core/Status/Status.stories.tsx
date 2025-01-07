import React from "react";
import { delay, http, HttpResponse } from "msw";
import { SWRConfig } from "swr";
import Status, { StatusUrl } from "../Status";

export default {
  title: "Components/Status",
  component: Status,
  args: {
    statusUrl: StatusUrl,
  },
  tags: ["!autodocs"],
};

const withEmptySWRCache = (component: JSX.Element) => (
  <SWRConfig value={{ provider: () => new Map() }}>{component}</SWRConfig>
);

const getStatusDescription = (indicator: string): string => {
  switch (indicator) {
    case "none":
    case "operational":
      return "All Systems Operational";
    case "major":
      return "Partial System Outage";
    case "minor":
      return "Minor Service Outage";
    case "critical":
      return "Major System Outage";
    case "unknown":
    default:
      return "Unknown Status";
  }
};

export const Loading = {
  parameters: {
    msw: {
      handlers: {
        statusNone: http.get(StatusUrl, async () => {
          await delay("infinite");

          return HttpResponse.json({
            status: {
              indicator: "will never arrive",
              description: "Loading...",
            },
          });
        }),
      },
    },
  },
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Error = {
  parameters: {
    msw: {
      handlers: {
        statusError: http.get(StatusUrl, () => {
          return HttpResponse.error();
        }),
      },
    },
  },
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

const mockParametersWithStatus = (indicator: string) => {
  return {
    msw: {
      handlers: {
        status: http.get(StatusUrl, async () => {
          await delay();

          return HttpResponse.json({
            status: {
              indicator,
              description: getStatusDescription(indicator),
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
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Operational = {
  parameters: mockParametersWithStatus("operational"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Minor = {
  parameters: mockParametersWithStatus("minor"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Major = {
  parameters: mockParametersWithStatus("major"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Critical = {
  parameters: mockParametersWithStatus("critical"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const Unknown = {
  parameters: mockParametersWithStatus("unknown"),
  render: () =>
    withEmptySWRCache(<Status statusUrl={StatusUrl} refreshInterval={0} />),
};

export const WithDescription = {
  parameters: mockParametersWithStatus("operational"),
  render: () =>
    withEmptySWRCache(
      <Status statusUrl={StatusUrl} refreshInterval={0} showDescription />,
    ),
};
