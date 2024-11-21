import React from "react";
import ProductTile from "../ProductTile";
import { ProductName, products } from "../ProductTile/data";

export default {
  title: "Components/Product Tile",
  component: ProductTile,
  tags: ["autodocs"],
};

export const ProductTiles = {
  render: () => (
    <div className="grid sm:grid-cols-3 gap-32">
      {Object.keys(products).map((product) => (
        <ProductTile key={product} name={product as ProductName} />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `<ProductTile name='pubsub' />`",
      },
    },
  },
};

export const SelectedProductTiles = {
  render: () => (
    <div className="grid grid-cols-3 gap-32">
      {Object.keys(products).map((product, index) => (
        <ProductTile
          key={product}
          name={product as ProductName}
          selected={index % 2 === 0}
          currentPage={index === 0}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of the odd tiles being 'selected'. The first tile is also marked as the `currentPage` (to simulate being on the Pubsub page), which alters the language of the CTA.",
      },
    },
  },
};

export const ProductTileWithOverriddenStylesAndClick = {
  render: () => (
    <ProductTile
      key="pubsub"
      name="pubsub"
      className="bg-pink-200 dark:bg-pink-800 hover:bg-pink-600 dark:hover:bg-pink-400 cursor-pointer"
      onClick={() => alert("yo congrats on the click")}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "`className` is overridden to change the background color and cursor. `onClick` is also overridden to show an alert on click.",
      },
    },
  },
};
