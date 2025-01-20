import React from "react";
import { delay, http, HttpResponse } from "msw";
import { SWRConfig } from "swr";
import Status, { StatusUrl, StatusType, statusTypes } from "../Status";

export default {
  title: "Components/Status",
  component: Status,
  args: {
    statusUrl: StatusUrl,
  },
  tags: ["!autodocs"],
};

const withEmptySWRCache = (component: JSX.Element, key?: StatusType) => (
  <SWRConfig key={key} value={{ provider: () => new Map() }}>
    {component}
  </SWRConfig>
);

const getStatusDescription = (indicator: StatusType): string => {
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

const mockAllStatuses = () => ({
  msw: {
    handlers: [
      http.get(StatusUrl, async ({ request }) => {
        const url = new URL(request.url);
        const indicator = url.searchParams.get("indicator");

        await delay();
        return HttpResponse.json({
          status: {
            indicator,
            description: getStatusDescription(
              indicator ? (indicator as StatusType) : "unknown",
            ),
          },
        });
      }),
    ],
  },
});

const StatusStory = ({
  showDescription = false,
}: {
  showDescription?: boolean;
}) => (
  <div className="flex flex-col gap-8">
    {statusTypes.map((indicator) =>
      withEmptySWRCache(
        <Status
          statusUrl={`${StatusUrl}?indicator=${indicator}`}
          refreshInterval={0}
          showDescription={showDescription}
        />,
        indicator,
      ),
    )}
  </div>
);

export const Default = {
  parameters: mockAllStatuses(),
  render: () => <StatusStory />,
};

export const WithDescription = {
  parameters: mockAllStatuses(),
  render: () => <StatusStory showDescription />,
};
