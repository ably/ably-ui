import ProductTile from "../ProductTile";
import { ProductName, products } from "../ProductTile/data";
import React from "react";

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
