import React from "react";
import { PricingDataFeature } from "./types";
import Tooltip from "../Tooltip";

export const planData: PricingDataFeature[] = [
  {
    title: {
      content: "Free",
      className: "ui-text-h4 tracking-[-0.002rem]",
      color: "text-ably-primary",
    },
    description: {
      content: "Build a proof of concept.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: { amount: "$0" },
    cta: {
      text: "Start for free",
      url: "/sign-up",
      iconColor: "text-ably-label-inverse",
    },
    sections: [
      {
        title: "Capacity",
        items: [
          "200 concurrent connections",
          "500 messages / second",
          "6M messages / month",
        ],
      },
      {
        title: "Includes",
        items: [
          "Build with any Ably product",
          "Community & email support (best effort)",
          "No commitment",
        ],
        listItemColors: {
          foreground: "text-ably-label",
          background: "text-neutral-100 dark:text-neutral-1200",
        },
      },
    ],
    bottomCta: {
      text: "See all features",
      url: "#pricing-table",
    },
  },
  {
    title: {
      content: "Standard",
      className: "ui-text-h4 tracking-[-0.002rem]",
      color: "text-ably-primary",
    },
    description: {
      content: "Roll-out into production.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: {
      amount: "$29",
      content: (
        <>
          <p
            className="ui-text-p3 font-medium"
            style={{ color: "currentColor" }}
          >
            / month
          </p>
          <div className="flex -mt-1">
            <p className="ui-text-p3 font-bold text-gui-blue-default-dark leading-[1.4rem]">
              + usage
            </p>
            <Tooltip interactive={true} iconSize="1.25rem">
              Usage is billed on top of your plan. You&apos;ll be charged
              monthly based on how many messages, channel minutes, and
              connection minutes you use. See rates above.
            </Tooltip>
          </div>
        </>
      ),
    },
    cta: {
      text: "Get started",
      url: "/users/paid_sign_up?package=standard",
      iconColor: "text-ably-label-inverse",
    },
    sections: [
      {
        title: "Capacity",
        items: [
          "10k concurrent channels",
          "10k concurrent connections",
          "2.5k messages / second",
        ],
      },
      {
        title: "Includes",
        items: [
          "Build with any Ably product",
          "1 day email support SLA",
          "Uptime SLO",
        ],
        listItemColors: {
          foreground: "text-ably-label",
          background: "text-neutral-100 dark:text-neutral-1200",
        },
      },
    ],
    bottomCta: {
      text: "See all features",
      url: "#pricing-table",
    },
  },
  {
    title: {
      content: "Pro",
      className: "ui-text-h4 tracking-[-0.002rem]",
      color: "text-ably-primary",
    },
    description: {
      content: "Scale business critical workloads.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: {
      amount: "$399",
      content: (
        <>
          <p
            className="ui-text-p3 font-medium"
            style={{ color: "currentColor" }}
          >
            / month
          </p>
          <div className="flex -mt-1">
            <p className="ui-text-p3 font-bold text-gui-blue-default-dark leading-[1.4rem]">
              + usage
            </p>
            <Tooltip interactive={true} iconSize="1.25rem">
              Usage is billed on top of your plan. You&apos;ll be charged
              monthly based on how many messages, channel minutes, and
              connection minutes you use. See rates above.
            </Tooltip>
          </div>
        </>
      ),
    },
    cta: {
      text: "Get started",
      url: "/users/paid_sign_up?package=pro",
      iconColor: "text-ably-label-inverse",
    },
    sections: [
      {
        title: "Capacity",
        items: [
          "50k concurrent channels",
          "50k concurrent connections",
          "10k messages / second",
        ],
      },
      {
        title: "Includes",
        items: [
          "Build with any Ably product",
          "4 hour email support SLA",
          "Datadog (lite)",
          "Uptime SLO",
        ],
        listItemColors: {
          foreground: "text-ably-label",
          background: "text-neutral-100 dark:text-neutral-1200",
        },
      },
    ],
    bottomCta: {
      text: "See all features",
      url: "#pricing-table",
    },
  },

  {
    title: {
      content: "Enterprise",
      className: "ui-text-h4 tracking-[-0.002rem]",
      color: "text-orange-600",
    },
    description: {
      content: "Serious workloads without limits.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: { amount: "Custom" },
    cta: {
      text: "Contact us",
      url: "/contact",
      isPriority: true,
    },
    sections: [
      {
        title: "Capacity",
        items: [
          "Unlimited concurrent channels",
          "Unlimited connections",
          "Unlimited messages / second",
        ],
      },
      {
        title: "Includes",
        items: [
          "Build with any Ably product",
          "24/7 mission critical support",
          "99.999% uptime SLAs",
          "Committed use discounts",
          "Datadog",
          "CNAME, SSO, & more",
        ],
        listItemColors: {
          foreground: "text-ably-label",
          background: "text-neutral-100 dark:text-neutral-1200",
        },
      },
    ],
    bottomCta: {
      text: "See all features",
      url: "#pricing-table",
    },
  },
];

export const consumptionData: PricingDataFeature[] = [
  {
    title: {
      content: "Messages",
      className: "ui-text-h3",
      color: "text-ably-primary",
    },
    description: {
      content:
        "Messages contain the data that a client is communicating, such as the contents of a chat message.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: { amount: "$2.50", content: "/ million" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$ / million msgs"],
          ["First 50 million msgs", "$2.50"],
          ["Next 450 million msgs", "$2.25"],
          ["Next 4.5 billion msgs", "$1.95"],
          ["Next 15 billion msgs", "$1.65"],
          ["Next 30 billion msgs", "$1.40"],
          ["Over 50 billion msgs", "$1.25"],
        ],
      },
    ],
    subtext: "As low as $0.50/M with volume discount",
  },
  {
    title: {
      content: "Channels",
      className: "ui-text-h3",
      color: "text-ably-primary",
      tooltip: (
        <p>
          We charge you for the amount of time a channel is active in our
          network by the minute. For example, if ten channels are in use for 45
          minutes, you will be charged a total of 450 channel minutes.
        </p>
      ),
    },
    description: {
      content:
        "Channels are used to route messages from publishers to subscribers. Channels are billed by the minute when actively being used by a connected client.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: { amount: "$1.00", content: "/ million mins" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$ / million mins"],
          ["First 10 million mins", "$1.00"],
          ["Next 90 million mins", "$0.95"],
          ["Next 900 million mins", "$0.85"],
          ["Next 4 billion mins", "$0.75"],
          ["Next 10 billion mins", "$0.65"],
          ["Over 15 billion mins", "$0.60"],
        ],
      },
    ],
    subtext: "As low as $0.20/M with volume discount",
  },
  {
    title: {
      content: "Connections",
      className: "ui-text-h3",
      color: "text-ably-primary",
      tooltip: (
        <p>
          We charge you for the amount of time devices are connected to our
          network by the minute. For example, if ten devices are each connected
          for 45 minutes, you will be charged a total of 450 connection minutes.
        </p>
      ),
    },
    description: {
      content:
        "Clients establish and maintain a connection to the Ably service, typically over WebSockets.",
      className: "ui-text-p3",
      color: "text-ably-label",
    },
    price: { amount: "$1.00", content: "/ million mins" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$ / million mins"],
          ["First 10 million mins", "$1.00"],
          ["Next 90 million mins", "$0.95"],
          ["Next 900 million mins", "$0.85"],
          ["Next 4 billion mins", "$0.75"],
          ["Next 10 billion mins", "$0.65"],
          ["Over 15 billion mins", "$0.60"],
        ],
      },
    ],
    subtext: "As low as $0.20/M with volume discount",
  },
];
