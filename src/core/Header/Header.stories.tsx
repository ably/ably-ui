import React from "react";
import { Meta, StoryFn } from "@storybook/react";
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
      tabClassName="ui-text-menu3 !px-16"
      options={{ underline: false, flexibleTabHeight: true }}
    />
  ),
  mobileNav: (
    <TabMenu
      tabs={["Tab 1", "Tab 2"]}
      contents={["Content 1", "Content 2"]}
      rootClassName="h-full overflow-y-hidden min-h-[51px] flex flex-col"
      contentClassName="h-full py-16 overflow-y-scroll p-32"
      tabClassName="ui-text-menu2 !px-16"
      options={{ flexibleTabWidth: true }}
    />
  ),
};

export const WithButtonNav = Template.bind({});
WithButtonNav.args = {
  ...baseArgs,
  nav: (
    <div className="flex gap-8">
      {["Products", "Solutions", "Company", "Pricing", "Docs"].map((link) => (
        <Button variant="secondary" size="xs" key={link}>
          {link}
        </Button>
      ))}
    </div>
  ),
  mobileNav: (
    <Accordion
      className="p-16"
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
    <div className="h-[3000px] -m-16">
      <Header
        {...WithButtonNav.args}
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
      />
      <div
        id="header-zone"
        className="w-full bg-gradient-to-r from-neutral-000 to-orange-600 h-128 flex justify-center"
      >
        <p className="ui-text-p2 text-neutral-1300 flex gap-4 items-center p-64">
          I&apos;m transparent! (scroll down{" "}
          <Icon name="icon-gui-arrow-down-outline" />)
        </p>
      </div>
      <div
        id="light-zone"
        className="w-full h-[800px] bg-neutral-000 flex justify-center"
      >
        <p className="ui-text-p2 text-neutral-1300 p-64">
          I&apos;m light themed!
        </p>
      </div>
      <div
        id="dark-zone"
        className="w-full h-full bg-neutral-1300 flex justify-center"
      >
        <p className="ui-text-p2 text-neutral-000 p-64">
          I&apos;m dark themed!
        </p>
      </div>
    </div>
  ),
};

export const WithSearchBar = Template.bind({});
WithSearchBar.args = {
  ...baseArgs,
  searchBar: (
    <input type="text" placeholder="Search" className="ui-input w-256" />
  ),
};
