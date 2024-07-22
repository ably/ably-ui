import React, { useEffect, useState } from "react";

const indicatorClass = (indicator: string) => {
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

const Status = ({
  statusUrl,
  additionalCSS,
}: {
  statusUrl: string;
  additionalCSS?: string;
}) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    let interval;

    if (statusUrl !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(statusUrl);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching status data:", error);
        }
      };

      fetchData();

      interval = setInterval(fetchData, 60000); // Fetch data every minute
    }

    return () => {
      clearInterval(interval);
    };
  }, [statusUrl]);

  return (
    <a
      href="https://status.ably.com"
      className={`inline-block ${additionalCSS}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className="flex items-center h-[1.5rem] p-[0.25rem]">
        <span
          className={`w-[1rem] h-[1rem] leading-[1rem] rounded-full ${!data ? "animate-pulse" : ""} ${indicatorClass(data?.status?.indicator)}`}
        ></span>
      </span>
    </a>
  );
};

export default Status;
