import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TabMenu, { TabMenuProps } from "../TabMenu";
import cn from "../utils/cn";

export default {
  title: "Components/Tab Menu",
  component: TabMenu,
} as Meta;

const Template: StoryFn<TabMenuProps> = (args) => (
  <div className={cn({ "h-160": args.options?.flexibleTabHeight })}>
    <TabMenu {...args} />
  </div>
);

const ExampleContent = ({ children }) => (
  <div className="p-8 border border-neutral-200 mt-16 rounded-lg">
    {children}
  </div>
);

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

export const Default = Template.bind({});
Default.args = {
  tabs: ["Long Tab 1", "Long Long Tab 2", "Tab 3"],
  contents: [
    <ExampleContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ExampleContent>,
    <ExampleContent>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae;
    </ExampleContent>,
    <ExampleContent>
      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
    </ExampleContent>,
  ],
};

export const WithDefaultActiveTab = Template.bind({});
WithDefaultActiveTab.args = {
  tabs,
  options: {
    defaultTabIndex: 1,
  },
};
WithDefaultActiveTab.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates tabs with a default active tab. The second tab is active by default. Set the default active tab index with `defaultTabIndex` on `options`.",
    },
  },
};

export const WithNoContentAndClickEvents = Template.bind({});
WithNoContentAndClickEvents.args = {
  tabs,
  tabOnClick: (index) => {
    alert(`Tab ${index + 1} clicked`);
  },
};
WithNoContentAndClickEvents.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates tabs with no content and click events. Clicking on a tab will call a callback with the tab index as the argument.",
    },
  },
};

export const WithDisabledTabs = Template.bind({});
WithDisabledTabs.args = {
  tabs: [
    { label: "Tab 1", disabled: false },
    { label: "Tab 2", disabled: true },
    { label: "Tab 3" },
  ],
};
WithDisabledTabs.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates tabs with some of them disabled. The second tab is disabled and cannot be clicked. Disable a tab by including an object with a `label` and `disabled` property to the `tabs` array instead of a string.",
    },
  },
};

export const WithFlexibleTabDimensions = Template.bind({});
WithFlexibleTabDimensions.args = {
  tabs,
  options: {
    flexibleTabWidth: true,
    flexibleTabHeight: true,
  },
};
WithFlexibleTabDimensions.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates tabs with flexible dimensions. The tabs will adjust their width and height based on the content. Activate with `flexibleTabWidth` and `flexibleTabHeight` on `options`.",
    },
  },
};

export const WithNoAnimatedHighlight = Template.bind({});
WithNoAnimatedHighlight.args = {
  tabs,
  options: {
    animated: false,
  },
};
WithNoAnimatedHighlight.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates tabs without animated highlights. The tab highlight will not animate when switching tabs. On by default, disable with `animated` on `options`.",
    },
  },
};
