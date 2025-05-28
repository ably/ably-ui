import React from "react";
import { IconName } from "../Icon/types";
import { MeganavPanel } from "./MeganavPanel";
import Status, { StatusUrl } from "../Status";
import FanEngagementNavImage from "./images/fan-engagement-nav-image.png";
import CompanyNavImage from "./images/founders-nav-image.png";
import BestRequirementsWinter2025 from "../images/g2-best-meets-requirements-2025.svg";
import BestSupportWinter2025 from "../images/g2-best-support-2025.svg";
import HighPerformerWinter2025 from "../images/g2-high-performer-2025.svg";
import UsersMostLikelyToRecommend from "../images/g2-users-most-likely-to-recommend-2025.svg";
import { products } from "../ProductTile/data";

export type FlyoutPanelList = {
  label: string;
  icon: IconName;
  link: string;
  isMobile?: boolean;
};

export type FlyoutPanelHighlight = {
  heading: string;
  content: string;
  labelLink: string;
  url: string;
  image: string;
};

export type MenuItem = {
  name: string;
  link?: string;
  isHiddenMobile?: boolean;
  content?: React.ReactNode;
  panelClassName?: string;
};

const panelClassName = "w-full sm:w-[50.9375rem]";

const panelLeftFeatureClassName =
  "bg-neutral-100 dark:bg-neutral-1200 hidden md:grid border border-neutral-300 dark:border-neutral-1000 hover:border-neutral-400 dark:hover:border-neutral-800 rounded-lg cursor-pointer group/meganav-panel";

const productsMenu: FlyoutPanelList[] = [
  {
    label: "Infrastructure",
    icon: "icon-gui-globe-alt-outline",
    link: "/four-pillars-of-dependability",
  },
  {
    label: "Integrations",
    icon: "icon-gui-puzzle-piece-outline",
    link: "/integrations",
  },
  {
    label: "SDKs",
    icon: "icon-gui-cube-transparent-outline",
    link: "/docs/sdks",
  },
  {
    label: "Security & Compliance",
    icon: "icon-gui-shield-check-outline",
    link: "/security-and-compliance",
  },
];

const solutionsHighlight: FlyoutPanelHighlight = {
  heading: "Fan Engagement",
  content: "Capture the attention of millions of fans during live events.",
  labelLink: "Learn more",
  url: "/fan-engagement",
  image: FanEngagementNavImage,
};

const solutionsMenu: FlyoutPanelList[] = [
  {
    label: "Fan Engagement",
    icon: "icon-gui-hand-thumb-up-outline",
    link: "/fan-engagement",
    isMobile: true,
  },
  {
    label: "BizTech",
    icon: "icon-gui-building-office-outline",
    link: "/solutions/ecommerce-and-retail",
  },
  {
    label: "FinTech",
    icon: "icon-gui-currency-dollar-outline",
    link: "/solutions/fintech",
  },
  {
    label: "HealthTech",
    icon: "icon-gui-heart-outline",
    link: "/solutions/healthcare",
  },
  {
    label: "EdTech",
    icon: "icon-gui-academic-cap-outline",
    link: "/solutions/edtech",
  },
];

const companyHighlight: FlyoutPanelHighlight = {
  heading: "Leading the realtime revolution",
  content:
    "Hear from our founders about Ably’s ambitious plans to become the world’s definitive realtime platform.",
  labelLink: "About Ably",
  url: "/about",
  image: CompanyNavImage,
};

const companyMenu: FlyoutPanelList[] = [
  {
    label: "About Ably",
    icon: "icon-gui-ably-badge",
    link: "/about",
    isMobile: true,
  },
  {
    label: "Customer stories",
    icon: "icon-gui-star-outline",
    link: "/case-studies",
  },
  {
    label: "Careers",
    icon: "icon-gui-briefcase-outline",
    link: "/careers",
  },
  {
    label: "Blog",
    icon: "icon-gui-light-bulb-outline",
    link: "/blog",
  },
];

export const ablyAwards = [
  {
    image: BestRequirementsWinter2025,
    desc: "G2 Best Requirements Winter 2025",
  },
  {
    image: BestSupportWinter2025,
    desc: "G2 Best Support Winter 2025",
  },
  {
    image: HighPerformerWinter2025,
    desc: "G2 High Performer Winter 2025",
  },
  {
    image: UsersMostLikelyToRecommend,
    desc: "G2 Users Most Likely to Recommend Winter 2025",
  },
];

export const menuItemLinks = [
  { name: "Pricing", link: "/pricing", isHiddenMobile: true },
  { name: "Docs", link: "/docs", isHiddenMobile: true },
];

export const menuItemsForHeader: MenuItem[] = [
  {
    name: "Products",
    content: (
      <MeganavPanel
        displayProductTile={true}
        panelLeftClassName="grid"
        panelRightItems={productsMenu}
        panelRightHeading="platform"
        panelRightBottom={<Status statusUrl={StatusUrl} showDescription />}
      />
    ),
    panelClassName,
  },
  {
    name: "Solutions",
    content: (
      <MeganavPanel
        panelLeft={solutionsHighlight}
        panelLeftClassName={panelLeftFeatureClassName}
        panelRightItems={solutionsMenu}
      />
    ),
    panelClassName,
  },
  {
    name: "Company",
    content: (
      <MeganavPanel
        panelLeft={companyHighlight}
        panelLeftClassName={panelLeftFeatureClassName}
        panelRightItems={companyMenu}
        panelRightBottom={
          <div className="flex-1 gap-x-2 hidden md:flex">
            {ablyAwards.slice(0, 3).map((award) => (
              <img
                key={award.desc}
                src={award.image}
                alt={award.desc}
                width="57"
                height="64"
              />
            ))}
          </div>
        }
      />
    ),
    panelClassName,
  },
  ...menuItemLinks,
];

// Since the product-tile data is used in other projects, we update it here
// for the meganav.
export const productsForNav = {
  ...products,
  pubsub: { ...products.pubsub, link: "/pubsub" },
  liveSync: { ...products.liveSync, link: "/livesync" },
  chat: { ...products.chat, link: "/chat" },
  spaces: { ...products.spaces, link: "/spaces" },
  assetTracking: {
    ...products.assetTracking,
    link: "/solutions/asset-tracking",
  },
  liveObjects: { ...products.liveObjects, link: "/liveobjects" },
};
