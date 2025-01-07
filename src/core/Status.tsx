import React from "react";
import useSWR from "swr";
import cn from "./utils/cn";
import Icon from "./Icon";

type StatusProps = {
  statusUrl: string;
  additionalCSS?: string;
  refreshInterval?: number;
  showDescription?: boolean;
};

export const StatusUrl =
  "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

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
}: StatusProps) => {
  const { data, error, isLoading } = useSWR(statusUrl, fetcher, {
    refreshInterval,
  });

  return (
    <span
      className={cn(
        "inline-flex h-[1rem] aspect-square m-[0.25rem] rounded-full",
        indicatorClass(data?.status?.indicator),
        { "animate-pulse": isLoading || error },
      )}
    ></span>
  );
};

const Status = ({
  statusUrl = StatusUrl,
  additionalCSS,
  refreshInterval = 1000 * 60,
  showDescription = false,
}: StatusProps) => {
  const { data } = useSWR(statusUrl, fetcher, {
    refreshInterval,
  });

  return (
    <a
      href="https://status.ably.com"
      className={cn(
        "inline-flex group/status items-center gap-8",
        additionalCSS,
      )}
      target="_blank"
      rel="noreferrer"
    >
      <StatusIcon
        statusUrl={statusUrl}
        refreshInterval={refreshInterval ?? 1000 * 60}
      />
      {showDescription && data?.status?.description && (
        <div className="flex gap-8 ui-text-menu4 font-medium text-neutral-900 group-hover/status:text-neutral-1300 dark:text-neutral-400 dark:group-hover/status:text-neutral-000 transition-colors">
          <span>{data.status.description}</span>
          <Icon name="icon-gui-external-link" size="16px" />
        </div>
      )}
    </a>
  );
};

export default Status;
