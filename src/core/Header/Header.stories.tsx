import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import Header, { HeaderProps } from "../Header";
import TabMenu from "../TabMenu";
import Button from "../Button";
import Accordion from "../Accordion";
import Icon from "../Icon";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

const baseArgs: HeaderProps = {
  logoHref: "https://www.ably.com/",
  headerLinks: [
    { href: "/docs", label: "Docs" },
    { href: "/tutorials", label: "Tutorials", external: true },
  ],
  searchButton: <Icon name="icon-gui-magnifying-glass-outline" size="1.5rem" />,
  sessionState: {
    signedIn: false,
    logOut: {
      token: "0000",
      href: "accounts/sign_out",
    },
    accountName: "Discovery Education Corporation",
  },
};

export const WithTabMenuNav = Template.bind({});
WithTabMenuNav.args = {
  ...baseArgs,
  nav: (
    <TabMenu
      tabs={["Tab 1", "Tab 2"]}
      tabClassName="ui-text-label3 !px-4"
      options={{ underline: false, flexibleTabHeight: true }}
    />
  ),
  mobileNav: (
    <TabMenu
      tabs={["Tab 1", "Tab 2"]}
      contents={["Content 1", "Content 2"]}
      rootClassName="h-full overflow-y-hidden min-h-[3.1875rem] flex flex-col"
      contentClassName="h-full py-4 overflow-y-scroll p-8"
      tabClassName="ui-text-label2 !px-4"
      options={{ flexibleTabWidth: true }}
    />
  ),
};

export const WithButtonNav = Template.bind({});
WithButtonNav.args = {
  ...baseArgs,
  nav: (
    <div className="flex gap-2">
      {["Products", "Solutions", "Company", "Pricing", "Docs"].map((link) => (
        <Button variant="secondary" size="xs" key={link}>
          {link}
        </Button>
      ))}
    </div>
  ),
  mobileNav: (
    <Accordion
      className="p-4"
      data={[
        { name: "Products", content: "Products content" },
        { name: "Solutions", content: "Solutions content" },
        { name: "Company", content: "Company content" },
        { name: "Pricing", content: "Pricing content" },
        { name: "Docs", content: "Docs content" },
      ]}
    />
  ),
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...WithButtonNav.args,
  sessionState: {
    ...baseArgs.sessionState,
    signedIn: true,
  },
};

export const WithThemedScrollpoints = {
  render: () => (
    <div className="h-[187.5rem] -m-4">
      <Header
        {...WithButtonNav.args}
        themedScrollpoints={[
          {
            id: "hero-transparent",
            className: "ui-theme-light !bg-transparent !border-none",
          },
          {
            id: "hero-dark",
            className: "ui-theme-dark !bg-transparent !border-none",
          },
          {
            id: "main-light",
            className:
              "ui-theme-light bg-neutral-000 dark:bg-neutral-1300 border-b",
          },
          {
            id: "main-dark",
            className:
              "ui-theme-dark bg-neutral-000 dark:bg-neutral-1300 border-b",
          },
        ]}
      />
      {/* Wrapper with both hero and main sections starting at same position (like Voltaire) */}
      <div className="relative">
        {/* Hero section - transparent header, positioned absolutely to overlay */}
        <div
          id="hero-transparent"
          className="w-full bg-gradient-to-r from-neutral-000 to-orange-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10"
        >
          <p className="ui-text-p2 text-neutral-1300 flex gap-1 items-center p-16">
            Hero: Transparent header (scroll down{" "}
            <Icon name="icon-gui-arrow-down-outline" />)
          </p>
        </div>
        {/* Main content area starts at same position - header gets border */}
        <div
          id="main-light"
          className="w-full h-[50rem] bg-neutral-000 flex justify-center pt-32"
        >
          <p className="ui-text-p2 text-neutral-1300 p-16">
            Main: Light theme with border
          </p>
        </div>
      </div>
      {/* Dark section wrapper */}
      <div className="relative">
        {/* Dark hero section - transparent header */}
        <div
          id="hero-dark"
          className="w-full bg-gradient-to-r from-neutral-1300 to-violet-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10"
        >
          <p className="ui-text-p2 text-neutral-000 flex gap-1 items-center p-16">
            Hero: Dark transparent header
          </p>
        </div>
        {/* Dark content area - header gets border */}
        <div
          id="main-dark"
          className="w-full h-full bg-neutral-1300 flex justify-center pt-32"
        >
          <p className="ui-text-p2 text-neutral-000 p-16">
            Main: Dark theme with border
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithSearchBar = Template.bind({});
WithSearchBar.args = {
  ...baseArgs,
  searchBar: (
    <input type="text" placeholder="Search" className="ui-input w-64" />
  ),
};

export const WithLogoBadge = Template.bind({});
WithLogoBadge.args = {
  ...baseArgs,
  logoBadge: "docs",
};
