import ProductTile from "../ProductTile";
import { ProductName, products } from "../ProductTile/data";
import React from "react";
import { IconName } from "../Icon/types";

export type FlyoutPanelList = {
  label: string;
  icon: IconName;
  link: string;
};

export type FlyoutPanelHighlight = {
  heading: string;
  content: string;
  labelLink: string;
  url: string;
  image: string;
};

export const headerNav = [
  {
    name: "Products",
    content: (
      <div className="grid grid-cols-2 w-full">
        {Object.keys(products).map((product) => (
          <ProductTile key={product} name={product as ProductName} />
        ))}
      </div>
    ),
    link: "",
  },
  { name: "Solutions", content: "Solutions content", link: "" },
  { name: "Company", content: "Company content", link: "" },
  { name: "Pricing", content: "Pricing content", link: "" },
  { name: "Docs", content: "", link: "/docs" },
];

export const productsMenu: FlyoutPanelList[] = [
  {
    label: "Infrastructure",
    icon: "icon-gui-globe-alt-outline",
    link: "/infrastructure",
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

export const solutionsHighlight: FlyoutPanelHighlight = {
  heading: "Fan Engagement",
  content: "Capture the attention of millions of fans during live events.",
  labelLink: "Learn more",
  url: "/fan-engagement",
  image: "",
};

export const solutionsMenu: FlyoutPanelList[] = [
  {
    label: "Biztech",
    icon: "icon-gui-building-office-outline",
    link: "/solutions/ecommerce-and-retail",
  },
  {
    label: "Fintech",
    icon: "icon-gui-currency-dollar-outline",
    link: "/solutions/fintech",
  },
  {
    label: "Healthcare",
    icon: "icon-gui-heart-outline",
    link: "/solutions/healthcare",
  },
  {
    label: "EdTech",
    icon: "icon-gui-academic-cap-outline",
    link: "/solutions/edtech",
  },
];

export const companyHighlight: FlyoutPanelHighlight = {
  heading: "Leading the realtime revolution",
  content:
    "Hear from our founders about Ably’s ambitious plans to become the world’s definitive realtime platform.",
  labelLink: "About Ably",
  url: "/about",
  image: "",
};

export const companyMenu: FlyoutPanelList[] = [
  {
    label: "Customer stories",
    icon: "icon-gui-star-outline",
    link: "/",
  },
  {
    label: "Careers",
    icon: "icon-gui-briefcase-outline",
    link: "/case-studies",
  },
  {
    label: "Blog",
    icon: "icon-gui-light-bulb-outline",
    link: "/blog",
  },
  {
    label: "Contact us",
    icon: "icon-gui-chat-bubble-bottom-center-text-outline",
    link: "/contact",
  },
];
