import React from "react";
import Icon from "../Icon";
import loadIcons from "../icons";

export default {
  title: "JS Components/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

const coreIcons = [
  "icon-gui-ably-badge",
  "icon-gui-arrow-bidirectional-horizontal",
  "icon-gui-arrow-bidirectional-vertical",
  "icon-gui-arrow-down",
  "icon-gui-arrow-left",
  "icon-gui-arrow-right",
  "icon-gui-arrow-up",
  "icon-gui-burger-menu",
  "icon-gui-check-circled-fill",
  "icon-gui-check-circled-fill-black",
  "icon-gui-check-circled",
  "icon-gui-checklist-checked",
  "icon-gui-clock",
  "icon-gui-close",
  "icon-gui-cross-circled-fill",
  "icon-gui-cross-circled",
  "icon-gui-copy",
  "icon-gui-dash-circled",
  "icon-gui-disclosure-arrow",
  "icon-gui-document-generic",
  "icon-gui-enlarge",
  "icon-gui-external-link",
  "icon-gui-history",
  "icon-gui-info",
  "icon-gui-link-arrow",
  "icon-gui-live-chat",
  "icon-gui-minus",
  "icon-gui-partial",
  "icon-gui-plus",
  "icon-gui-quote-marks-solid",
  "icon-gui-refresh",
  "icon-gui-search",
  "icon-gui-tick",
  "icon-gui-warning",
  "icon-gui-link",
  "icon-gui-filter-flow-step-1",
  "icon-gui-filter-flow-step-2",
  "icon-gui-filter-flow-step-3",
  "icon-gui-resources",
];

const displayIcons = [
  "icon-display-48hrs",
  "icon-display-ably-channels",
  "icon-display-about-ably-col",
  "icon-display-api-keys",
  "icon-display-api",
  "icon-display-asset-tracking-col",
  "icon-display-avatar-stack",
  "icon-display-browser",
  "icon-display-calendar",
  "icon-display-call-mobile",
  "icon-display-careers-col",
  "icon-display-case-studies-col",
  "icon-display-chat-col",
  "icon-display-chat-stack-col",
  "icon-display-cloud-servers",
  "icon-display-compare-tech-col",
  "icon-display-connection-state-&-recovery",
  "icon-display-consumer-groups",
  "icon-display-customers-col",
  "icon-display-deltas",
  "icon-display-docs-col",
  "icon-display-documentation",
  "icon-display-dynamic-channel-groups",
  "icon-display-exactly-once-delivery",
  "icon-display-examples-col",
  "icon-display-fan-out",
  "icon-display-gdpr",
  "icon-display-general-comms",
  "icon-display-granular-permissions",
  "icon-display-hipaa",
  "icon-display-history",
  "icon-display-integrations-col",
  "icon-display-it-support-access",
  "icon-display-it-support-helpdesk",
  "icon-display-laptop",
  "icon-display-lightbulb-col",
  "icon-display-live-chat",
  "icon-display-map-pin",
  "icon-display-message-batching",
  "icon-display-message-persistence",
  "icon-display-message-queues",
  "icon-display-message",
  "icon-display-padlock-closed",
  "icon-display-platform",
  "icon-display-play",
  "icon-display-privacy-shield-framework",
  "icon-display-push-notifications",
  "icon-display-quickstart-guides-col",
  "icon-display-resources-col",
  "icon-display-rewind",
  "icon-display-sdks-col",
  "icon-display-send-received-messages",
  "icon-display-servers",
  "icon-display-shopping-cart",
  "icon-display-sla",
  "icon-display-soc2-type2",
  "icon-display-subscription-filters",
  "icon-display-system-metadata",
  "icon-display-tech-account-comms",
  "icon-display-tutorials-demos-col",
  "icon-display-virtual-events-col",
  "icon-live-updates-results-metrics-col",
  "icon-multi-user-spaces-col",
];

const socialIcons = [
  "discord",
  "facebook",
  "github",
  "glassdoor",
  "linkedin",
  "twitter",
  "google",
  "stackoverflow",
  "youtube",
];

const otherIcons = ["quote"];

const techIcons = [
  "icon-tech-amqp10",
  "icon-tech-apache-kafka",
  "icon-tech-apachepulsar",
  "icon-tech-awskinesis",
  "icon-tech-awslambda",
  "icon-tech-awssqs",
  "icon-tech-azureservicebus",
  "icon-tech-cloudflareworkers",
  "icon-tech-csharp",
  "icon-tech-flutter",
  "icon-tech-gcloudfunctions",
  "icon-tech-go",
  "icon-tech-ifttt",
  "icon-tech-java",
  "icon-tech-javascript",
  "icon-tech-net",
  "icon-tech-objectivec",
  "icon-tech-php",
  "icon-tech-python",
  "icon-tech-react",
  "icon-tech-ruby",
  "icon-tech-swift",
  "icon-tech-terraform",
  "icon-tech-zapier",
];

const renderIcons = (iconSet: string[]) => {
  loadIcons();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 ui-grid-gap max-w-screen-lg mb-64">
      {iconSet.map((icon: string) => (
        <div
          className="border p-16 flex flex-col sm:flex-row items-center justify-between gap-12"
          key={icon}
        >
          <code className="ui-text-code mb-8 block">{icon}</code>
          <div className="border inline-flex flex-0">
            <div className="flex pi-checkered-bg">
              <Icon
                name={icon}
                additionalCSS="hover:text-active-orange"
                color="text-cool-black"
                size="1.5rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const GUIIcons = {
  render: () => renderIcons(coreIcons),
};

export const DisplayIcons = {
  render: () => renderIcons(displayIcons),
};

export const SocialIcons = {
  render: () => renderIcons(socialIcons),
};

export const TechIcons = {
  render: () => renderIcons(techIcons),
};

export const Other = {
  render: () => renderIcons(otherIcons),
};
