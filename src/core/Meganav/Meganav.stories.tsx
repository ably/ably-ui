import React from "react";
import { Meta } from "@storybook/react";
import Meganav, { ProductsGrid } from "./Meganav";
import { MeganavPanel, MeganavPanelHighlight } from "./MeganavPanel";
import { productsMenu, solutionsHighlight, solutionsMenu } from "./data";

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

export const MeganavPanels = {
  render: () => {
    return (
      <div className="flex flex-row flex-wrap gap-y-64 justify-start ui-standard-container">
        <div className="w-[65%] ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl p-24 bg-neutral-000">
          <MeganavPanel
            panelLeft={<ProductsGrid />}
            panelRightItems={productsMenu}
            panelRightHeading="platform"
          />
        </div>

        <div className="w-[65%] ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl p-24 bg-neutral-000">
          <MeganavPanel
            panelLeft={<MeganavPanelHighlight content={solutionsHighlight} />}
            panelLeftClassName="bg-neutral-100 dark:bg-neutral-1200 py-24 pl-24"
            panelRightItems={solutionsMenu}
          />
        </div>
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
