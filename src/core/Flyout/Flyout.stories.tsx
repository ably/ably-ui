import React from "react";
import Flyout from "../Flyout";
import ProductTile from "../ProductTile";
import FeaturedLink from "../FeaturedLink";
import { ProductName, products } from "../ProductTile/data";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Flyout",
  component: Flyout,
  tags: ["autodocs"],
};
const Template: StoryFn = (args) => (
  <div className="h-[450px]">
    <Flyout {...args} />
  </div>
);

const platforms = [
  "Infrastructure",
  "Integrations",
  "SDKs",
  "Security & Compliance",
];

// Note: All the components and data used in this story are just temporary placeholders and will be added as separate component for the Meganav component that can be used here.
const ProductsGrid = () => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<ProductName | null>(null);
  return (
    <div className="grid grid-cols-2">
      {Object.keys(products).map((product) => (
        <ProductTile
          name={product as ProductName}
          key={product}
          selected={selectedProduct === product}
          onClick={() => setSelectedProduct(product as ProductName)}
        />
      ))}
    </div>
  );
};

const Panels = ({
  panelLeft,
  platforms,
}: {
  panelLeft: React.ReactNode;
  platforms: string[];
}) => (
  <div className="flex flex-row gap-x-24">
    <div className="flex-6">{panelLeft}</div>
    <div className="flex-4 pt-12">
      <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 pb-6">platform</p>
      {platforms.map((item) => (
        <li className="list-none py-6" key={item}>
          <a
            className="ui-text-menu3 text-neutral-1000 dark:text-neutral-300"
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
  <div className="bg-neutral-100 dark:bg-neutral-1200 w-full p-24">
    <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">{title}</h4>
    <p className="ui-text-p3 text-neutral-800 dark:text-neutral-500 mt-8">{desc}</p>
    <FeaturedLink
      url=""
      additionalCSS="text-neutral-1300 dark:text-neutral-000"
      iconColor="text-orange-600"
    >
      Learn more
    </FeaturedLink>
  </div>
);

const panelStyling = "w-full sm:w-[816px] bg-neutral-000 dark:bg-neutral-1300";

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: "Home", content: null, link: "" },
    {
      label: "Products",
      content: <Panels panelLeft={<ProductsGrid />} platforms={platforms} />,
      panelStyling: panelStyling,
    },
    {
      label: "Solutions",
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
      panelStyling: panelStyling,
    },
    {
      label: "Company",
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
      panelStyling: panelStyling,
    },
    { label: "Pricing", content: null, link: "/pricing" },
    { label: "Docs", content: null, link: "/docs" },
  ],
  className: "justify-center",
  flyOutClassName: "justify-center",
  viewPortClassName:"ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl mt-8",
};
