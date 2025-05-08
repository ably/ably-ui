import { IconName } from "../Icon/types";

export const productNames = [
  "pubsub",
  "chat",
  "spaces",
  "liveSync",
  "assetTracking",
  "liveObjects",
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
  assetTracking: {
    label: "Asset Tracking",
    description: "Track the geographic location of assets and fleets.",
    icon: "icon-product-asset-tracking-mono",
    hoverIcon: "icon-product-asset-tracking",
    link: "/docs/asset-tracking",
  },
  liveObjects: {
    label: "LiveObjects",
    description: "Sync application state across client devices.",
    icon: "icon-product-liveobjects-mono",
    hoverIcon: "icon-product-liveobjects",
    link: "/docs/liveobjects",
  },
};
