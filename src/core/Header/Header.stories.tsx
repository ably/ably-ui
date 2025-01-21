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
  tags: ["!autodocs"],
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

const baseArgs: HeaderProps = {
  logoHref: "https://www.ably.com/",
  headerLinks: [
    { href: "/docs", label: "Docs" },
    { href: "/tutorials", label: "Tutorials" },
  ],
  searchButton: <Icon name="icon-gui-magnifying-glass-outline" size="1.5rem" />,
  sessionState: {
    signedIn: false,
    account: {
      links: {
        dashboard: {
          href: "/dashboard",
        },
      },
    },
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
