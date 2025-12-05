import React from "react";
import { IconName } from "../Icon/types";
import { MeganavPanel } from "./MeganavPanel";
import Status, { StatusUrl } from "../Status";
import MeganavCustomerStories, {
  CustomerStoryHighlight,
} from "./MeganavCustomerStories";
import MeganavBlog from "./MeganavBlog";
import G2BestMeetsRequirementsSpring2025 from "../images/badges/g2-best-meets-requirements-spring-2025.svg";
import G2BestResultsSpring2025 from "../images/badges/g2-best-results-spring-2025.svg";
import G2BestSupportSpring2025 from "../images/badges/g2-best-support-spring-2025.svg";
import { products } from "../ProductTile/data";
import DoxyMeLogo from "../Meganav/images/cust-logo-doxy-me.png";

export type FlyoutPanelList = {
  label: string;
  icon?: IconName;
  link: string;
  isMobile?: boolean;
  description?: string;
  badge?: string;
};

export type MenuItem = {
  name: string;
  link?: string;
  isHiddenMobile?: boolean;
  content?: React.ReactNode;
  panelClassName?: string;
};

const panelClassName = "w-full sm:w-[50.9375rem]";

const productsMenu: FlyoutPanelList[] = [
  {
    label: "Architecture",
    icon: "icon-gui-squares-2-x-2-outline",
    link: "/platform",
  },
  {
    label: "Integrations",
    icon: "icon-gui-puzzle-piece-outline",
    link: "/docs/platform/integrations",
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

const compareMenu: FlyoutPanelList[] = [
  {
    label: "Ably vs Pusher",
    link: "/ably-vs-pusher",
  },
  {
    label: "Ably vs PubNub",
    link: "/ably-vs-pubnub",
  },
  {
    label: "Ably vs Socket.io",
    link: "/ably-vs-socket.io",
  },
];

const solutionsMenu: FlyoutPanelList[] = [
  {
    label: "Fan Engagement",
    icon: "icon-gui-hand-thumb-up-outline",
    link: "/fan-engagement",
    description:
      "Capture the attention of millions of fans during live events.",
  },
  {
    label: "CXTech",
    icon: "icon-gui-face-smile-outline",
    link: "/cx-tech",
    description:
      "Deliver fast support, strong relationships, and high retention.",
  },
  {
    label: "FinTech",
    icon: "icon-gui-currency-dollar-outline",
    link: "/fin-tech",
    description:
      "Speed, reliability, and confidence in every user interaction.",
  },
  {
    label: "HealthTech",
    icon: "icon-gui-heart-outline",
    link: "/health-tech",
    description: "Reliable tools with full data privacy and compliance.",
  },
  {
    label: "EdTech",
    icon: "icon-gui-academic-cap-outline",
    link: "/ed-tech",
    description: "Power collaborative, interactive learning environments.",
  },
];

const customerStoriesHighlight: CustomerStoryHighlight = {
  companyLogo: DoxyMeLogo,
  companyLink: "case-studies/doxyme",
  companyName: "Doxy.me",
  companyDesc:
    "built their realtime stack in under six months, cutting costs by 65%, eliminating errors, and transforming a once-feared system into a core strength.",
};

const companyMenu: FlyoutPanelList[] = [
  {
    label: "Our Story",
    icon: "icon-gui-ably-badge",
    link: "/case-studies",
  },
  {
    label: "Careers",
    icon: "icon-gui-briefcase-outline",
    link: "/careers",
    badge: "WE'RE HIRING",
  },
  {
    label: "About Ably",
    icon: "icon-gui-ably-badge",
    link: "/about",
    isMobile: true,
  },
];

export const ablyAwards = [
  {
    image: G2BestSupportSpring2025,
    desc: "G2 Best Support Spring 2025",
  },
  {
    image: G2BestMeetsRequirementsSpring2025,
    desc: "G2 Best Meets Requirements Spring 2025",
  },
  {
    image: G2BestResultsSpring2025,
    desc: "G2 Best Results Spring 2025",
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
        panelRightItems={[
          { label: "Platform", listItems: productsMenu },
          {
            link: { label: "Compare our tech", link: "/compare" },
            listItems: compareMenu,
          },
        ]}
        panelRightBottom={
          <Status
            statusUrl={StatusUrl}
            additionalCSS="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100 rounded-lg"
            showDescription
          />
        }
      />
    ),
    panelClassName,
  },
  {
    name: "Solutions",
    content: <MeganavPanel panelFullWidthNavTiles={solutionsMenu} />,
    panelClassName,
  },
  {
    name: "Company",
    content: (
      <MeganavPanel
        panelLeft={
          <MeganavCustomerStories
            title="Customer stories"
            link="/case-studies"
            customerStoriesHighlight={customerStoriesHighlight}
          />
        }
        panelMiddleItems={<MeganavBlog title="Blog" link="/blog" />}
        panelRightItems={[{ label: "Company", listItems: companyMenu }]}
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

export const productsForNav = {
  ...products,
  pubsub: { ...products.pubsub, link: "/pubsub" },
  liveSync: { ...products.liveSync, link: "/livesync" },
  chat: { ...products.chat, link: "/chat" },
  spaces: { ...products.spaces, link: "/spaces" },
  aiTransport: {
    ...products.aiTransport,
    link: "/ai-transport",
  },
  liveObjects: { ...products.liveObjects, link: "/liveobjects" },
};
