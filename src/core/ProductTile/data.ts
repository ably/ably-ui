import { IconName } from "../Icon/types";

export type ProductName =
  | "pubsub"
  | "chat"
  | "spaces"
  | "liveSync"
  | "assetTracking"
  | "liveObjects";

type Products = Record<
  ProductName,
  {
    label: string;
    description: string;
    link?: string;
    icon?: IconName;
    unavailable?: boolean;
  }
>;

export const products: Products = {
  pubsub: {
    label: "PubSub",
    description: "Low-level APIs to build any realtime experience",
    icon: "icon-product-pubsub",
    link: "/docs/products/channels",
  },
  chat: {
    label: "Chat",
    description: "Rapidly build chat features and roll-out at scale",
    icon: "icon-product-chat",
    link: "/docs/products/chat",
  },
  spaces: {
    label: "Spaces",
    description: "Create collaborative environments in a few lines of code",
    icon: "icon-product-spaces",
    link: "/docs/products/spaces",
  },
  liveSync: {
    label: "LiveSync",
    description: "Sync database changes with frontend clients",
    icon: "icon-product-livesync",
    link: "/docs/products/livesync",
  },
  assetTracking: {
    label: "Asset Tracking",
    description: "Simple APIs to build realtime tracking applications",
    icon: "icon-product-asset-tracking",
    link: "/docs/products/asset-tracking",
  },
  liveObjects: {
    label: "LiveObjects",
    description: "Sync application state across multiple devices",
    link: "/docs/products/asset-tracking",
    unavailable: true,
  },
};
