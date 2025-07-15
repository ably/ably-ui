import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import Badge from "../Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "BADGE",
};
Default.parameters = {
  docs: {
    description: {
      story:
        "The default badge component. Can be customized with various props. Use the `children` prop to set the text.",
    },
  },
};

export const WithBeforeIcon = Template.bind({});
WithBeforeIcon.args = {
  children: "BADGE",
  iconBefore: "icon-gui-check-lotus-circled",
};
WithBeforeIcon.parameters = {
  docs: {
    description: {
      story:
        "Badge component with an icon displayed before the text. Use the `iconBefore` prop to set the icon.",
    },
  },
};

export const WithAfterIcon = Template.bind({});
WithAfterIcon.args = {
  children: "BADGE",
  iconAfter: "icon-gui-chevron-down-outline",
};
WithAfterIcon.parameters = {
  docs: {
    description: {
      story:
        "Badge component with an icon displayed after the text. Use the `iconAfter` prop to set the icon.",
    },
  },
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  children: "BADGE",
  hoverable: true,
};
Hoverable.parameters = {
  docs: {
    description: {
      story:
        "Badge component that changes appearance when hovered over. Use the `hoverable` prop to enable this feature.",
    },
  },
};

export const Focusable = Template.bind({});
Focusable.args = {
  children: "BADGE",
  focusable: true,
};
Focusable.parameters = {
  docs: {
    description: {
      story:
        "Badge component that can be focused using keyboard navigation. Use the `focusable` prop to enable this feature.",
    },
  },
};

export const WithLargeIconSize = Template.bind({});
WithLargeIconSize.args = {
  children: "BADGE",
  iconBefore: "icon-gui-check-circled",
  iconSize: "16px",
};
WithLargeIconSize.parameters = {
  docs: {
    description: {
      story:
        "Badge component with a larger icon size. Use the `iconSize` prop to set the size of the icon.",
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "BADGE",
  iconBefore: "icon-gui-check-circled",
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story:
        "Badge component that is disabled and not interactive. Use the `disabled` prop to disable the badge.",
    },
  },
};
