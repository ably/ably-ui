import React from "react";
import Icon from "../Icon";
import DropdownMenu from "../DropdownMenu";

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
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
            I am a child! 🐣
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
