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
    label: "Pub/Sub",
    description: "Low-level APIs to build any realtime experience",
    icon: "icon-product-pubsub-mono",
    link: "/docs/products/channels",
  },
  chat: {
    label: "Chat",
    description: "Rapidly build chat features and roll-out at scale",
    icon: "icon-product-chat-mono",
    link: "/docs/products/chat",
  },
  spaces: {
    label: "Spaces",
    description: "Create collaborative environments in a few lines of code",
    icon: "icon-product-spaces-mono",
    link: "/docs/products/spaces",
  },
  liveSync: {
    label: "LiveSync",
    description: "Sync database changes with frontend clients",
    icon: "icon-product-livesync-mono",
    link: "/docs/products/livesync",
  },
  assetTracking: {
    label: "Asset Tracking",
    description: "Simple APIs to build realtime tracking applications",
    icon: "icon-product-asset-tracking-mono",
    link: "/docs/products/asset-tracking",
  },
  liveObjects: {
    label: "LiveObjects",
    description: "Sync application state across multiple devices",
    icon: "icon-product-liveobjects-mono",
    link: "/docs/products/asset-tracking",
    unavailable: true,
  },
};
