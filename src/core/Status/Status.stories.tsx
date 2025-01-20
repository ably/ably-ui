import React from "react";
import { delay, http, HttpResponse } from "msw";
import { SWRConfig } from "swr";
import Status, { StatusUrl, StatusTypes } from "../Status";

export default {
  title: "Components/Status",
  component: Status,
  args: {
    statusUrl: StatusUrl,
  },
  tags: ["!autodocs"],
};

const withEmptySWRCache = (component: JSX.Element, key?: string) => (
  <SWRConfig key={key} value={{ provider: () => new Map() }}>
    {component}
  </SWRConfig>
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

const mockAllStatuses = () => {
  const indicators = [
    "none",
    "operational",
    "minor",
    "major",
    "critical",
    "unknown",
  ];
  return {
    msw: {
      handlers: indicators.map((indicator) =>
        http.get(
          StatusUrl,
          async () => {
            await delay();
            return HttpResponse.json({
              status: {
                indicator,
                description: getStatusDescription(indicator),
              },
            });
          },
          { once: true },
        ),
      ),
    },
  };
};

export const Default = {
  parameters: mockAllStatuses(),
  render: () => (
    <div className="flex flex-col gap-8">
      {StatusTypes.map((indicator) =>
        withEmptySWRCache(
          <Status statusUrl={StatusUrl} refreshInterval={0} />,
          indicator,
        ),
      )}
    </div>
  ),
};

export const WithDescription = {
  parameters: mockAllStatuses(),
  render: () => (
    <div className="flex flex-col gap-8">
      {StatusTypes.map((indicator) =>
        withEmptySWRCache(
          <Status statusUrl={StatusUrl} refreshInterval={0} showDescription />,
          indicator,
        ),
      )}
    </div>
  ),
};
