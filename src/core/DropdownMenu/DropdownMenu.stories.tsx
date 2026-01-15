import React from "react";
import Icon from "../Icon";
import DropdownMenu from "../DropdownMenu";

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: `
A Radix-powered accessible dropdown menu component.

## Accessibility Features (Radix)
- **Keyboard Navigation**: Tab to focus trigger, Enter/Space to open, Arrow keys to navigate, Escape to close
- **Screen Reader Support**: Proper ARIA roles and labels
- **Focus Management**: Focus is trapped within menu when open
- **Click Outside**: Closes menu when clicking outside
        `,
      },
    },
  },
};

export const Default = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger triggerClassNames="ui-text-h3">
        Dropdown Menu Trigger
      </DropdownMenu.Trigger>
      <DropdownMenu.Content anchorPosition="left">
        <DropdownMenu.Link
          url="https://ably.com/"
          title="Using DropdownMenuLink Component"
          subtitle="This is using the inbuilt component which takes props for title, subtitle, icon name & children."
          iconName="icon-gui-arrow-long-right-outline"
        >
          <p className="ui-text-p3 text-neutral-1000 dark:text-neutral-300">
            I am a child!
          </p>
        </DropdownMenu.Link>
        <DropdownMenu.Link
          url="https://ably.com/"
          title="Using DropdownMenuLink Component - no icon, subtitle or children"
        />
        <a
          href="https://ably.com/docs"
          target="_blank"
          rel="noreferrer"
          className="group block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-1200 hover:text-neutral-1300 dark:hover:text-neutral-000 rounded-lg"
        >
          <p className="ui-featured-link group-hover:text-gui-hover font-light text-neutral-1300 dark:text-neutral-000">
            Using plain HTML
            <Icon
              name="icon-gui-arrow-long-right-micro"
              size="1rem"
              color="text-neutral-1300 dark:text-neutral-000"
              additionalCSS="ui-featured-link-icon group-hover:text-gui-hover group-active:text-gui-active group-focus:text-gui-focus"
            />
          </p>
        </a>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const RightAligned = {
  render: () => (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenu.Trigger description="Account menu for Test Account">
          Test Account
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          anchorPosition="right"
          contentClassNames="w-60 mt-3"
        >
          <div className="p-2">
            <DropdownMenu.Link url="/dashboard" title="Dashboard" />
            <DropdownMenu.Link url="/settings" title="Settings" />
            <DropdownMenu.Link url="/logout" title="Logout" />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A right-aligned dropdown menu, commonly used for account menus in headers.",
      },
    },
  },
};

export const AccessibilityTest = {
  render: () => (
    <div className="space-y-4">
      <p className="ui-text-p2 text-neutral-700 dark:text-neutral-600">
        Test the following keyboard interactions:
      </p>
      <ul className="list-disc list-inside ui-text-p3 text-neutral-700 dark:text-neutral-600 space-y-1">
        <li>
          <strong>Tab</strong> to focus the trigger button
        </li>
        <li>
          <strong>Enter</strong> or <strong>Space</strong> to open the menu
        </li>
        <li>
          <strong>Arrow Down/Up</strong> to navigate between items
        </li>
        <li>
          <strong>Escape</strong> to close the menu
        </li>
        <li>
          <strong>Click outside</strong> to close the menu
        </li>
      </ul>
      <div className="mt-8">
        <DropdownMenu>
          <DropdownMenu.Trigger description="Navigation menu">
            Open Menu
          </DropdownMenu.Trigger>
          <DropdownMenu.Content anchorPosition="left" contentClassNames="p-2">
            <DropdownMenu.Link url="#item1" title="First Item" />
            <DropdownMenu.Link url="#item2" title="Second Item" />
            <DropdownMenu.Link url="#item3" title="Third Item" />
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive test for keyboard navigation and accessibility features.",
      },
    },
  },
};
