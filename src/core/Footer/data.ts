import { IconName } from "../Icon/types";
import BestRequirementsWinter2025 from "../images/g2-best-meets-requirements-2025.svg";
import BestSupportWinter2025 from "../images/g2-best-support-2025.svg";
import HighPerformerWinter2025 from "../images/g2-high-performer-2025.svg";
import UsersMostLikelyToRecommend from "../images/g2-users-most-likely-to-recommend-2025.svg";

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
      { label: "Ably LiveSync", link: "/livesync" },
      { label: "Ably Chat", link: "/chat" },
      { label: "Ably Spaces", link: "/spaces" },
      { label: "Ably Asset Tracking", link: "/docs/asset-tracking" },
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

export const ablyAwards = [
  {
    image: BestRequirementsWinter2025,
    desc: "G2 Best Requirements Winter 2025",
  },
  {
    image: BestSupportWinter2025,
    desc: "G2 Best Support Winter 2025",
  },
  {
    image: HighPerformerWinter2025,
    desc: "G2 High Performer Winter 2025",
  },
  {
    image: UsersMostLikelyToRecommend,
    desc: "G2 Users Most Likely to Recommend Winter 2025",
  },
];
