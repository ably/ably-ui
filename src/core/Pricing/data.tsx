import React from "react";
import { PricingDataFeature } from "./types";

export const planData: PricingDataFeature[] = [
  {
    title: {
      content: "Free",
      className: "font-mono text-p3 uppercase font-extrabold tracking-[0.16em]",
      color: "text-neutral-700",
    },
    description: {
      content: "Build a proof of concept.",
      className: "ui-text-p1",
      color: "text-neutral-500",
    },
    price: { amount: "$0" },
    cta: { text: "Start for free", url: "/sign-up" },
    sections: [
      {
        title: "Capacity",
        items: ["200 concurrent channels", "200 concurrent connections"],
      },
      {
        title: "Includes",
        items: ["Community & email support (best effort)", "No commitment"],
        listItemColors: {
          foreground: "text-neutral-600",
          background: "text-neutral-1000",
        },
        cta: {
          text: "See all features",
          url: "#pricing-table",
        },
      },
    ],
  },
  {
    title: {
      content: "Standard",
      className: "font-mono text-p3 uppercase font-extrabold tracking-[0.16em]",
      color: "text-neutral-000",
    },
    description: {
      content: "Roll-out into production.",
      className: "ui-text-p1",
      color: "text-neutral-500",
    },
    price: {
      amount: "$29",
      content: (
        <>
          <p
            className="ui-text-p3 font-medium"
            style={{ color: "currentColor" }}
          >
            /month
          </p>
          <p className="ui-text-p2 font-bold text-gui-blue-default-dark -mt-6">
            + consumption
          </p>
        </>
      ),
    },
    cta: { text: "Get started", url: "/users/paid_sign_up" },
    sections: [
      {
        title: "Capacity",
        items: [
          "10k concurrent channels",
          "10k concurrent connections",
          "2.5k messages/second",
        ],
      },
      {
        title: "Includes",
        items: ["1 day email support SLA", "Uptime SLO"],
        listItemColors: {
          foreground: "text-blue-400",
          background: "text-blue-800",
        },
        cta: {
          text: "See all features",
          url: "#pricing-table",
        },
      },
    ],
  },
  {
    title: {
      content: "Pro",
      className: "font-mono text-p3 uppercase font-extrabold tracking-[0.16em]",
      color: "text-neutral-000",
    },
    description: {
      content: "Scale business critical workloads.",
      className: "ui-text-p1",
      color: "text-neutral-500",
    },
    price: {
      amount: "$399",
      content: (
        <>
          <p
            className="ui-text-p3 font-medium"
            style={{ color: "currentColor" }}
          >
            /month
          </p>
          <p className="ui-text-p2 font-bold text-gui-blue-default-dark -mt-6">
            + consumption
          </p>
        </>
      ),
    },
    cta: { text: "Get started", url: "/users/paid_sign_up" },
    sections: [
      {
        title: "Capacity",
        items: [
          "50k concurrent channels",
          "50k concurrent connections",
          "10k messages/second",
        ],
      },
      {
        title: "Includes",
        items: ["4 hour email support SLA", "Datadog (lite)", "Uptime SLO"],
        listItemColors: {
          foreground: "text-blue-400",
          background: "text-blue-800",
        },
        cta: {
          text: "See all features",
          url: "#pricing-table",
        },
      },
    ],
  },

  {
    title: {
      content: "Enterprise",
      className: "font-mono text-p3 uppercase font-extrabold tracking-[0.16em]",
      color: "text-orange-600",
    },
    description: {
      content: "Serious workloads without limits.",
      className: "ui-text-p1",
      color: "text-neutral-500",
    },
    price: { amount: "Custom" },
    cta: {
      text: "Contact us",
      url: "#pricing-enterprise",
      className: "ui-btn-alt text-white",
    },
    sections: [
      {
        title: "Capacity",
        items: [
          "Unlimited concurrent channels",
          "Unlimited concurrent connections",
          "Unlimited messages/second",
        ],
      },
      {
        title: "Includes",
        items: [
          "24/7 mission critical support",
          "99.999% uptime SLAs",
          "Committed use discounts",
          "Datadog",
          "CNAME, SSO, & more",
        ],
        listItemColors: {
          foreground: "text-orange-600",
          background: "text-orange-1000",
        },
        cta: {
          text: "See all features",
          url: "#pricing-table",
        },
      },
    ],
  },
];

export const consumptionData: PricingDataFeature[] = [
  {
    title: {
      content: "Messages",
      className: "ui-text-h3",
      color: "text-neutral-000",
    },
    description: {
      content:
        "Messages contain the data that a client is communicating, such as the contents of a chat message.",
      className: "ui-text-p3",
      color: "text-neutral-700",
    },
    price: { amount: "$2.50", content: "per million" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$/million msgs"],
          ["First 50 million msgs", "$2.50"],
          ["Next 450 million msgs", "$2.25"],
          ["Next 4.5 billion msgs", "$1.95"],
          ["Next 15 billion msgs", "$1.65"],
          ["Next 30 billion msgs", "$1.40"],
          ["Over 50 billion msgs", "$1.25"],
        ],
      },
    ],
  },
  {
    title: {
      content: "Channels",
      className: "ui-text-h3",
      color: "text-neutral-000",
    },
    description: {
      content:
        "Clients publish and receive messages on channels (also know as topics). We only charge for active channels.",
      className: "ui-text-p3",
      color: "text-neutral-700",
    },
    price: { amount: "$1.00", content: "per million mins" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$/million msgs"],
          ["First 10 million msgs", "$1.00"],
          ["Next 90 million msgs", "$0.95"],
          ["Next 900 million msgs", "$0.85"],
          ["Next 4 billion msgs", "$0.75"],
          ["Next 10 billion msgs", "$0.65"],
          ["Over 15 billion msgs", "$0.60"],
        ],
      },
    ],
  },
  {
    title: {
      content: "Connections",
      className: "ui-text-h3",
      color: "text-neutral-000",
    },
    description: {
      content:
        "Clients establish and maintain a connection to the Ably service, typically over WebSockets.  We only charge for active connections.",
      className: "ui-text-p3",
      color: "text-neutral-700",
    },
    price: { amount: "$1.00", content: "per million mins" },
    sections: [
      {
        title: "Volume discounts",
        items: [
          ["Consumption", "$/million msgs"],
          ["First 10 million msgs", "$1.00"],
          ["Next 90 million msgs", "$0.95"],
          ["Next 900 million msgs", "$0.85"],
          ["Next 4 billion msgs", "$0.75"],
          ["Next 10 billion msgs", "$0.65"],
          ["Over 15 billion msgs", "$0.60"],
        ],
      },
    ],
  },
];
