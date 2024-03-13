import React from "react";
import Icon from "../Icon/component.jsx";
import DropdownMenu from "./component.jsx";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
};

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger additionalTriggerCSS="ui-text-h3">
        Dropdown Menu Trigger
      </DropdownMenu.Trigger>
      <DropdownMenu.Content anchorPosition="left">
        <DropdownMenu.Link
          url="https://ably.com/"
          title="Using DropdownMenuLink Component"
          subtitle="This is using the inbuilt component which takes props for title, subtitle, icon name & children."
          iconName="icon-gui-link-arrow"
        >
          <p className="ui-text-p3">I am a child! 🐣</p>
        </DropdownMenu.Link>
        <DropdownMenu.Link
          url="https://ably.com/"
          title="Using DropdownMenuLink Component - no icon, subtitle or children"
        />
        <a
          href="https://ably.com/docs"
          target="_blank"
          className="group block p-8 hover:bg-light-grey hover:text-cool-black rounded"
        >
          <p className="ui-featured-link group-hover:text-gui-hover font-light text-cool-black">
            Using plain HTML
            <Icon
              name="icon-gui-link-arrow"
              size="1rem"
              color="text-cool-black"
              additionalCSS="ui-featured-link-icon group-hover:text-gui-hover group-active:text-gui-active group-focus:text-gui-focus"
            />
          </p>
        </a>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
