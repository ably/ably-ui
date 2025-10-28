import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import ContentTile from "../ContentTile";

const meta: Meta<typeof ContentTile> = {
  title: "Components/Content Tile",
  component: ContentTile,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContentTile>;

const gridStyle = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8";

const fullImage = (
  <img src="https://placecats.com/300/200" alt="Kitten" className="rounded-t" />
);

const centeredImage = (
  <img src="https://placecats.com/300/100" alt="Kitten" className="rounded" />
);

export const WithImageFeature: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a ContentTile with an image feature that extends to fill the container. Props: `featureType="image"`, `featurePadding={false}` to allow the image to reach the edges.',
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Image ${i}`}
          description="This ContentTile displays an image above the content."
          feature={fullImage}
          featureType="image"
          featurePadding={false}
        />
      ))}
    </div>
  ),
};

export const WithCenteredImageFeature: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a ContentTile with a vertically centered image feature. Props: `featureType="image"`, `centerFeature={true}` to vertically center the image within the feature container.',
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Centered Image ${i}`}
          description="This ContentTile displays an image above the content."
          feature={centeredImage}
          featureType="image"
          centerFeature
        />
      ))}
    </div>
  ),
};

export const WithFeatureIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a ContentTile with technology icons overlaid in the bottom-right corner of the image feature. Props: `featureIcons` array contains icon names that are displayed as badges on the image.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Image Icons ${i}`}
          description="This ContentTile displays a row of icons as featureIcons."
          feature={fullImage}
          featureType="image"
          featureIcons={[
            "icon-tech-javascript",
            "icon-tech-typescript",
            "icon-tech-python",
          ]}
        />
      ))}
    </div>
  ),
};

export const WithImageFeatureAndExplicitCTA: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a ContentTile with an image feature and a visible call-to-action link. Props: `cta` object with `text` and `url`, making the entire tile clickable with hover effects and displaying the CTA link text at the bottom.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with explicit CTA ${i}`}
          description="This ContentTile displays a call-to-action button."
          feature={fullImage}
          featureType="image"
          cta={{
            text: "Learn More",
            url: `https://ably.com/${i}`,
          }}
          onClick={(url) => alert(`Clicked ${url}`)}
        />
      ))}
    </div>
  ),
};

export const WithImageFeatureAndImplicitCTA: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a ContentTile that is clickable but doesn't show an explicit CTA link. Props: `cta.implicit={true}` makes the entire tile clickable with hover effects, but hides the CTA link text.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with implicit CTA ${i}`}
          description="This ContentTile is linked but has no call-to-action button."
          feature={fullImage}
          featureType="image"
          cta={{
            text: "Learn More",
            url: `https://ably.com/${i}`,
            implicit: true,
          }}
          onClick={(url) => alert(`Clicked ${url}`)}
        />
      ))}
    </div>
  ),
};

export const WithIconFeature: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a ContentTile with a single icon as the feature element. Props: `featureType="icon"` with `feature` set to an icon name string, rendering a smaller, icon-based header instead of a full image.',
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Icon ${i}`}
          description="This ContentTile displays an icon above the content."
          feature="icon-display-ui"
          featureType="icon"
        />
      ))}
    </div>
  ),
};

export const WithIconFeatureAndCTA: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a ContentTile combining an icon feature with a call-to-action link. Props: `featureType="icon"` with `cta` object, creating a compact tile suitable for navigation cards or action items.',
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Icon ${i}`}
          description="This ContentTile displays an icon above the content."
          feature="icon-display-ui"
          featureType="icon"
          cta={{
            text: "Learn More",
            url: `https://ably.com/${i}`,
          }}
          onClick={(url) => alert(`Clicked ${url}`)}
        />
      ))}
    </div>
  ),
};

export const WithCTAOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a minimal ContentTile with only text content and a CTA link, no feature element. Props: `cta` object without `feature` prop, creating a simple text-based card ideal for link lists or navigation menus.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Icon ${i}`}
          description="This ContentTile displays a cta, but no feature."
          cta={{
            text: "Learn More",
            url: `https://ably.com/${i}`,
          }}
          onClick={(url) => alert(`Clicked ${url}`)}
        />
      ))}
    </div>
  ),
};

export const WithBadges: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a ContentTile with status or category badges below the description. Props: `badges` array of objects with `label` and optional `color`, useful for highlighting features, statuses, or categories (e.g., 'New', 'Beta', 'Featured').",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Badges ${i}`}
          description="This ContentTile displays several badges."
          featureType="image"
          badges={[
            { label: "New" },
            { label: "Featured", color: "blue" },
            { label: "Beta", color: "yellow" },
          ]}
        />
      ))}
    </div>
  ),
};

export const WithImageFeatureAndEverything: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a fully-featured ContentTile with all available options combined. Props: `feature` (image), `featureIcons` (tech badges), `cta` (clickable link), and `badges` (status labels), showcasing the component's maximum capabilities.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with All Features ${i}`}
          description="This ContentTile displays image, icons, CTA, and badges."
          feature={fullImage}
          featureType="image"
          featureIcons={["icon-tech-javascript", "icon-tech-typescript"]}
          cta={{
            text: "Get Started",
            url: `https://ably.com/${i}`,
          }}
          onClick={(url) => alert(`Clicked ${url}`)}
          badges={[{ label: "Popular" }, { label: "Pro", color: "green" }]}
        />
      ))}
    </div>
  ),
};

export const WithNonEncapsulatedContentTile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Displays a ContentTile with non-encapsulated styling and no feature padding. Props: `encapsulated={false}` with `featurePadding={false}`, creating a more compact layout where the image extends to the container edges.",
      },
    },
  },
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Non-Encapsulated Content ${i}`}
          description="This ContentTile displays a content tile with non-encapsulated content."
          encapsulated={false}
          feature={fullImage}
          featureType="image"
          featurePadding={false}
          cta={{
            text: "Get Started",
            url: `https://ably.com/${i}`,
          }}
        />
      ))}
    </div>
  ),
};
