import { IconName } from "../Icon/types";

type FooterLinksProps = {
  title: string;
  links: {
    label: string;
    link: string;
    badge?: string;
  }[];
};

export const footerLinks: FooterLinksProps[] = [
  {
    title: "Products",
    links: [
      { label: "Ably Pub/Sub", link: "/pubsub" },
      { label: "Ably Chat", link: "/chat" },
      { label: "Ably AI Transport", link: "/ai-transport" },
      { label: "Ably LiveObjects", link: "/liveobjects" },
      { label: "Ably Spaces", link: "/spaces" },
      { label: "Ably LiveSync", link: "/livesync" },
      { label: "Compare our tech", link: "/compare" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Infrastructure", link: "/four-pillars-of-dependability" },
      { label: "Integrations", link: "/integrations" },
      { label: "SDKs", link: "/docs/sdks" },
      { label: "Changelog", link: "https://changelog.ably.com/" },
      { label: "Security & Compliance", link: "/security-and-compliance" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Documentation", link: "/docs" },
      { label: "Examples", link: "/examples" },
      { label: "Pricing", link: "/pricing" },
      { label: "Realtime A-Z", link: "/topics" },
      { label: "Support", link: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Ably", link: "/about" },
      { label: "Blog", link: "/blog" },
      { label: "Careers", link: "/careers", badge: "WE’RE HIRING" },
      { label: "Contact us", link: "/contact" },
    ],
  },
];

export const bottomFooterLinks = [
  { label: "Data protection", link: "/data-protection" },
  { label: "Privacy", link: "/privacy" },
  { label: "Legals", link: "/legals" },
  { label: "Cookies", link: "/privacy" },
];

export const socialLinks: {
  key: string;
  colorIcon: IconName;
  monoIcon: IconName;
  link: string;
}[] = [
  {
    key: "x",
    colorIcon: "icon-social-x",
    monoIcon: "icon-social-x-mono",
    link: "https://x.com/ablyrealtime",
  },
  {
    key: "linkedin",
    colorIcon: "icon-social-linkedin",
    monoIcon: "icon-social-linkedin-mono",
    link: "https://www.linkedin.com/company/ably-realtime",
  },
  {
    key: "github",
    colorIcon: "icon-social-github",
    monoIcon: "icon-social-github-mono",
    link: "https://github.com/ably/",
  },
  {
    key: "discord",
    colorIcon: "icon-social-discord",
    monoIcon: "icon-social-discord-mono",
    link: "https://discord.gg/g8yqePUVDn",
  },
  {
    key: "youtube",
    colorIcon: "icon-social-youtube",
    monoIcon: "icon-social-youtube-mono",
    link: "https://www.youtube.com/c/AblyRealtime",
  },
];
