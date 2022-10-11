// We disable this rule here because we are linking to the same domain
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Icon from "@ably/ui/core/Icon";

import DropdownMenu from "@ably/ui/core/DropdownMenu";

import { renderComponent } from "@ably/ui/core/scripts";

document.addEventListener("DOMContentLoaded", () => {
  const DropdownMenuPreview = () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger additionalTriggerCSS="text-h3">
          Dropdown Menu Trigger
        </DropdownMenu.Trigger>
        <DropdownMenu.Content anchorPosition="left">
          <DropdownMenu.Link
            url="https://ably.com/"
            title="Using DropdownMenuLink Component"
            subtitle="This is using the inbuilt component which takes props for title, subtitle, icon name & children."
            iconName="icon-gui-link-arrow"
          >
            <p className="text-p3">I am a child! 🐣</p>
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
    );
  };

  const node = document.querySelector("#dropdown-menu-container");
  renderComponent(DropdownMenuPreview, {}, node);
});
