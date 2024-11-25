import React from "react";
import useSWR from "swr";
import clsx from "clsx";

// Our SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const indicatorClass = (indicator?: string) => {
  switch (indicator) {
    case "none":
      return "bg-green-500";
    case "operational":
      return "bg-green-500";
    case "minor":
      return "bg-yellow-500";
    case "major":
      return "bg-orange-500";
    case "critical":
      return "bg-orange-800";
    default:
      return "bg-neutral-500";
  }
};

export const StatusIcon = ({
  statusUrl,
  refreshInterval = 1000 * 60,
}: {
  statusUrl: string;
  refreshInterval?: number;
}) => {
  const { data, error, isLoading } = useSWR(statusUrl, fetcher, {
    refreshInterval,
  });

  return (
    <span
      className={clsx(
        "inline-flex h-[1rem] aspect-square m-[0.25rem] rounded-full",
        indicatorClass(data?.status?.indicator),
        { "animate-pulse": isLoading || error },
      )}
    ></span>
  );
};

const Status = ({
  statusUrl,
  additionalCSS,
  refreshInterval = 1000 * 60,
}: {
  statusUrl: string;
  additionalCSS?: string;
  refreshInterval?: number;
}) => {
  return (
    <a
      href="https://status.ably.com"
      className={`inline-block ${additionalCSS}`}
      target="_blank"
      rel="noreferrer"
    >
      <StatusIcon
        statusUrl={statusUrl}
        refreshInterval={refreshInterval ?? 1000 * 60}
      />
    </a>
  );
};

export default Status;
