import React from "react";
import Flyout from "../Flyout";

import FeaturedLink from "../FeaturedLink";
import { ProductName, products } from "../ProductTile/data";
import ProductTile from "../ProductTile";

export default {
  title: "Components/Flyout",
  component: Flyout,
  tags: ["autodocs"],
};

const platforms = [
  "Infrastructure",
  "Integrations",
  "SDKs",
  "Security & Compliance",
];

const panelClassName = "w-full sm:w-[51rem] bg-ably-primary-inverse";

const Panels = ({
  panelLeft,
  platforms,
}: {
  panelLeft: React.ReactNode;
  platforms: string[];
}) => (
  <div className="flex flex-row gap-x-6">
    <div className="flex-6">{panelLeft}</div>
    <div className="flex-4 pt-3">
      <p className="ui-text-overline2 text-ably-label pb-1.5">platform</p>
      {platforms.map((item) => (
        <li className="list-none py-1.5" key={item}>
          <a
            className="ui-text-label3 text-ably-secondary"
            href={`/platform/${item.toLowerCase()}`}
          >
            {item}
          </a>
        </li>
      ))}
    </div>
  </div>
);

const DefaultPanelLeft = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-neutral-100 dark:bg-neutral-1200 w-full p-6">
    <h4 className="ui-text-h4 text-ably-primary">{title}</h4>
    <p className="ui-text-p3 text-ably-tertiary mt-2">{desc}</p>
    <FeaturedLink
      url=""
      additionalCSS="text-ably-primary"
      iconColor="text-orange-600"
    >
      Learn more
    </FeaturedLink>
  </div>
);

const menuItems = [
  { name: "Home", link: "" },
  {
    name: "Products",
    content: (
      <Panels
        panelLeft={
          <div className="grid grid-cols-2">
            {Object.keys(products).map((product) => (
              <ProductTile
                name={product as ProductName}
                key={product}
                animateIcons={true}
              />
            ))}
          </div>
        }
        platforms={platforms}
      />
    ),
    panelClassName: panelClassName,
  },
  {
    name: "Solutions",
    content: (
      <Panels
        panelLeft={
          <DefaultPanelLeft
            title="Fan engagement"
            desc=" Capture the attention of millions of fans during live events."
          />
        }
        platforms={platforms}
      />
    ),
    panelClassName: panelClassName,
  },
  {
    name: "Company",
    content: (
      <Panels
        panelLeft={
          <DefaultPanelLeft
            title="Leading the realtime revolution"
            desc="Hear from our founders about Ably’s ambitious plans to become the world’s definitive realtime platform."
          />
        }
        platforms={platforms}
      />
    ),
    panelClassName: panelClassName,
  },
  { name: "Pricing", link: "/pricing" },
  { name: "Docs", link: "/docs" },
];

const FlyoutStory = () => {
  return (
    <Flyout
      menuItems={menuItems}
      className="justify-center relative z-40"
      flyOutClassName="flex w-full justify-center"
      viewPortClassName="ui-shadow-lg-medium border border-ably-primary-inverse rounded-2xl mt-2"
    />
  );
};

export const Default = {
  render: () => <FlyoutStory />,
};
