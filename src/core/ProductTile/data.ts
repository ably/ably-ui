import { IconName } from "../Icon/types";

export const productNames = [
  "pubsub",
  "chat",
  "aiTransport",
  "liveObjects",
  "spaces",
  "liveSync",
] as const;

export type ProductName = (typeof productNames)[number];

type Products = Record<
  ProductName,
  {
    label: string;
    description: string;
    link?: string;
    icon?: IconName;
    hoverIcon?: IconName;
    unavailable?: boolean;
  }
>;

export const products: Products = {
  pubsub: {
    label: "Pub/Sub",
    description: "Low-level APIs for building realtime applications.",
    icon: "icon-product-pubsub-mono",
    hoverIcon: "icon-product-pubsub",
    link: "/docs/channels",
  },
  chat: {
    label: "Chat",
    description: "Build feature-rich live chat experiences.",
    icon: "icon-product-chat-mono",
    hoverIcon: "icon-product-chat",
    link: "/docs/chat",
  },
  aiTransport: {
    label: "AI Transport",
    description: "Drop-in realtime continuity for Gen-2 AI experiences.",
    icon: "icon-product-ai-transport-mono",
    hoverIcon: "icon-product-ai-transport",
  },
  liveObjects: {
    label: "LiveObjects",
    description: "Sync application state across client devices.",
    icon: "icon-product-liveobjects-mono",
    hoverIcon: "icon-product-liveobjects",
    link: "/docs/liveobjects",
  },
  spaces: {
    label: "Spaces",
    description: "Enhance your application with collaborative features.",
    icon: "icon-product-spaces-mono",
    hoverIcon: "icon-product-spaces",
    link: "/docs/spaces",
  },
  liveSync: {
    label: "LiveSync",
    description: "Fan-out database changes to client applications.",
    icon: "icon-product-livesync-mono",
    hoverIcon: "icon-product-livesync",
    link: "/docs/livesync",
  },
};
