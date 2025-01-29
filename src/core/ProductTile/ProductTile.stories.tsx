import React from "react";
import ProductTile from "../ProductTile";
import { ProductName, products } from "../ProductTile/data";

export default {
  title: "Components/Product Tile",
  component: ProductTile,
  tags: ["autodocs"],
};

export const ProductTiles = {
  render: () => {
    const [selectedProduct, setSelectedProduct] =
      React.useState<ProductName | null>(null);

    return (
      <div className="grid sm:grid-cols-3 gap-32">
        {Object.keys(products).map((product) => (
          <ProductTile
            key={product}
            name={product as ProductName}
            selected={selectedProduct === product}
            onClick={() => setSelectedProduct(product as ProductName)}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example usage: `<ProductTile name='pubsub' />`. Click on a tile to select it.",
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

export const ProductTilesWithoutDescriptionsOrLabels = {
  render: () => (
    <div className="grid sm:grid-cols-3 gap-32 justify-center">
      {Object.keys(products).map((product) => (
        <ProductTile
          key={product}
          name={product as ProductName}
          showDescription={false}
          showLabel={false}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example usage: `<ProductTile name='pubsub' showDescription={false} showLabel={false} />`",
      },
    },
  },
};

export const LargerProductTile = {
  render: () => (
    <ProductTile
      key="pubsub"
      name="pubsub"
      size="144px"
      showDescription={false}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The proportions of the label, description, and inter-component padding are dependent on the ident's set size. Here is an example of a larger product tile set to 144px.",
      },
    },
  },
};
