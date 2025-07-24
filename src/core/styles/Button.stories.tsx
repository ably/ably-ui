import React from "react";
import Button, { ButtonType, iconModifierClasses } from "../Button";
import Tooltip from "../Tooltip";
import cn from "../utils/cn";
import Icon from "../Icon";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

const sizes = [
  {
    label: "Large",
    key: "lg",
    className: {
      priority: "ui-button-priority-lg",
      primary: "ui-button-primary-lg",
      secondary: "ui-button-secondary-lg",
    },
  },
  {
    label: "Regular",
    className: {
      priority: "ui-button-priority",
      primary: "ui-button-primary",
      secondary: "ui-button-secondary",
    },
  },
  {
    label: "Small",
    key: "sm",
    className: {
      priority: "ui-button-priority-sm",
      primary: "ui-button-primary-sm",
      secondary: "ui-button-secondary-sm",
    },
  },
  {
    label: "Extra small",
    key: "xs",
    className: {
      priority: "ui-button-priority-xs",
      primary: "ui-button-primary-xs",
      secondary: "ui-button-secondary-xs",
    },
  },
];

const buttonSet = (type: ButtonType) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={`button-variant-${index}`} className="flex flex-col gap-4">
          {sizes.map((size, sizeIndex) => (
            <Tooltip
              key={`button-size-${sizeIndex}`}
              triggerProps={{ className: "h-[3.75rem]" }}
              triggerElement={
                <button
                  type="button"
                  className={cn(
                    size.className[type],
                    {
                      [iconModifierClasses[size.key ?? "md"].left]: index === 1,
                    },
                    {
                      [iconModifierClasses[size.key ?? "md"].right]:
                        index === 2,
                    },
                  )}
                  disabled={index === 3}
                >
                  {index === 1 ? (
                    <Icon
                      name="icon-gui-magnifying-glass-outline"
                      size="1.5rem"
                    />
                  ) : null}
                  {size.label}
                  {index === 2 ? (
                    <Icon
                      name="icon-gui-arrow-long-right-outline"
                      size="1.5rem"
                    />
                  ) : null}
                </button>
              }
            >
              {cn(
                size.className[type],
                {
                  [iconModifierClasses[size.key ?? "md"].left]: index === 1,
                },
                {
                  [iconModifierClasses[size.key ?? "md"].right]: index === 2,
                },
              )}
            </Tooltip>
          ))}
        </div>
      ))}
  </div>
);

export const ReactComponent = {
  render: () => (
    <div className="grid sm:grid-cols-3 gap-4">
      <div>
        <Button variant="priority" size="lg">
          Hello React!
        </Button>
      </div>
      <div>
        <Button variant="primary" leftIcon="icon-gui-magnifying-glass-outline">
          Hello React!
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          size="xs"
          rightIcon="icon-gui-arrow-long-right-outline"
        >
          Hello React!
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons are available as a React component. The `variant` prop can be set to `priority`, `primary`, or `secondary`. The `size` prop can be set to `lg`, `sm`, or `xs`, or left undefined.\n\nIcons can be added to the left or right of the button text by setting the `leftIcon` or `rightIcon` prop to a valid icon name.",
      },
    },
  },
};

export const Priority = {
  render: () => buttonSet("priority"),
  parameters: {
    docs: {
      description: {
        story:
          "Priority buttons are available as separate CSS classes for use cases outside of React. Classes: `ui-button-priority`, `ui-button-priority-lg`, `ui-button-priority-sm`, `ui-button-priority-xs`. Hover over the icons to see the active classes.\n\nIcons can be set by placing an SVG element inside the button (view the HTML tab in the individual story view for more comprehensive code examples). Adding either `ui-button-{SIZE}-left-icon` or `ui-button-{SIZE}-right-icon` to the button element will adjust the padding to accommodate the icon.",
      },
    },
  },
};

export const Primary = {
  render: () => buttonSet("primary"),
  parameters: {
    docs: {
      description: {
        story:
          "Primary buttons are available as separate CSS classes for use cases outside of React. Classes: `ui-button-primary`, `ui-button-primary-lg`, `ui-button-primary-sm`, `ui-button-primary-xs`. Hover over the icons to see the active classes.\n\nIcons can be set by placing an SVG element inside the button (view the HTML tab in the individual story view for more comprehensive code examples). Adding either `ui-button-{SIZE}-left-icon` or `ui-button-{SIZE}-right-icon` to the button element will adjust the padding to accommodate the icon.",
      },
    },
  },
};

export const Secondary = {
  render: () => buttonSet("secondary"),
  parameters: {
    docs: {
      description: {
        story:
          "Secondary buttons are available as separate CSS classes for use cases outside of React. Classes: `ui-button-secondary`, `ui-button-secondary-lg`, `ui-button-secondary-sm`, `ui-button-secondary-xs`. Hover over the icons to see the active classes.\n\nIcons can be set by placing an SVG element inside the button (view the HTML tab in the individual story view for more comprehensive code examples). Adding either `ui-button-{SIZE}-left-icon` or `ui-button-{SIZE}-right-icon` to the button element will adjust the padding to accommodate the icon.",
      },
    },
  },
};
