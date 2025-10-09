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
  render: () => (
    <div className={gridStyle}>
      {[1, 2, 3, 4].map((i) => (
        <ContentTile
          key={i}
          title={`Content Tile with Image ${i}`}
          description="This ContentTile displays an image above the content."
          feature={fullImage}
          featureType="image"
        />
      ))}
    </div>
  ),
};

export const WithCenteredImageFeature: Story = {
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
