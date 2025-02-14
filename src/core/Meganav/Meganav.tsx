import Header from "../Header";
import React, { useState } from "react";
import Icon from "../Icon";
import Accordion from "../Accordion";
import {
  companyHighlight,
  companyMenu,
  headerNav,
  productsMenu,
  solutionsHighlight,
  solutionsMenu,
} from "./data";
import Flyout from "../Flyout";
import { ProductName, products } from "../ProductTile/data";
import ProductTile from "../ProductTile";
import { MeganavPanel, MeganavPanelHighlight } from "./MeganavPanel";

export const ProductsGrid = () => {
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

const Meganav = () => {
  const panelClassName =
    "w-full sm:w-[816px] bg-neutral-000 dark:bg-neutral-1300";
  const menuItems = [
    { label: "Home", content: null, link: "" },
    {
      label: "Products",
      content: (
        <MeganavPanel
          panelLeft={<ProductsGrid />}
          panelRightItems={productsMenu}
          panelRightHeading="platform"
        />
      ),
      panelClassName: panelClassName,
    },
    {
      label: "Solutions",
      content: (
        <MeganavPanel
          panelLeft={<MeganavPanelHighlight content={solutionsHighlight} />}
          panelLeftClassName="bg-neutral-100 dark:bg-neutral-1200"
          panelRightItems={solutionsMenu}
        />
      ),
      panelClassName: panelClassName,
    },
    {
      label: "Company",
      content: (
        <MeganavPanel
          panelLeft={<MeganavPanelHighlight content={companyHighlight} />}
          panelLeftClassName="bg-neutral-100 dark:bg-neutral-1200"
          panelRightItems={companyMenu}
        />
      ),
      panelClassName: panelClassName,
    },
    { label: "Pricing", content: null, link: "/pricing" },
    { label: "Docs", content: null, link: "/docs" },
  ];

  return (
    <div className="h-[3000px] -m-16">
      <Header
        themedScrollpoints={[
          {
            id: "header-zone",
            className: "ui-theme-light !bg-transparent !border-none",
          },
          {
            id: "light-zone",
            className: "ui-theme-light",
          },
          {
            id: "dark-zone",
            className: "ui-theme-dark",
          },
        ]}
        nav={
          <Flyout
            menuItems={menuItems}
            className="justify-center relative z-40 ui-standard-container"
            flyOutClassName="flex justify-center"
            viewPortClassName="ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl mt-8"
            hasAnimation={true}
          />
        }
        mobileNav={<Accordion className="p-16" data={headerNav} />}
        searchButton={
          <button
            type="button"
            data-id="dataID"
            data-control="search"
            className="h-24 w-24 group focus:outline-none"
            aria-expanded="false"
            aria-controls="panel-search"
            aria-label={`Show Search Panel`}
          >
            <Icon
              name="icon-gui-magnifying-glass-outline"
              color="text-neutral-1300"
              size="24px"
            />
          </button>
        }
        headerLinks={[{ href: "/contact", label: "Help" }]}
      />
    </div>
  );
};

export default Meganav;
