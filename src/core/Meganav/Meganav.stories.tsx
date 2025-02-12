import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Meganav from "./Meganav";
import { MeganavPanelHighlight, MeganavPanel } from "./MeganavPanel";
import ProductTile from "../ProductTile";
import { ProductName, products } from "../ProductTile/data";
import { productsMenu, solutionsHighlight, solutionsMenu } from "./data";

const ProductsGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductName | null>(
    null,
  );
  return (
    <>
      {Object.keys(products).map((product) => (
        <ProductTile
          name={product as ProductName}
          key={product}
          selected={selectedProduct === product}
          onClick={() => setSelectedProduct(product as ProductName)}
        />
      ))}
    </>
  );
};

export default {
  title: "Components/Meganav",
  component: Meganav,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  render: () => {
    return <Meganav />;
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const ProductsPanel = {
  render: () => {
    return (
      <div className="w-[816px]">
        <MeganavPanel
          panelLeft={<ProductsGrid />}
          panelRightItems={productsMenu}
          panelRightHeading="platform"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const SolutionsPanel = {
  render: () => {
    return (
      <div className="w-[816px] bg-neutral-100 dark:bg-neutral-1200 relative z-10">
        <MeganavPanel
          panelLeft={<MeganavPanelHighlight content={solutionsHighlight} />}
          panelLeftClassName="bg-neutral-100 dark:bg-neutral-1200 p-24"
          panelRightItems={solutionsMenu}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
