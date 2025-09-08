import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import SegmentedControl, {
  SegmentedControlProps,
  SegmentedControlSize,
} from "../SegmentedControl";
import Badge from "../Badge";
/**
 * The SegmentedControl component provides a container for content with optional
 * rounded corners and icons on either side. It's useful for creating toggle-like
 * controls, tabs, or any segmented interface element that needs visual distinction.
 * The component supports customization through props for rounded corners and
 * icons on the left and/or right sides.
 */
const meta: Meta<SegmentedControlProps> = {
  title: "Components/Segmented Control",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<SegmentedControlProps>;

const SegmentedControlGrid = (props: SegmentedControlProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {["md", "sm", "xs"].map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <div className="flex flex-col items-center">
            <Badge className="mb-2">{size}</Badge>
          </div>
          <div
            key={size}
            className="flex gap-2 justify-center items-center p-2 border rounded-lg"
          >
            {[0, 1].map((index) => (
              <SegmentedControl
                key={index}
                size={size as SegmentedControlSize}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                {...props}
              >
                Option {index + 1}
              </SegmentedControl>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * The default variant of the SegmentedControl component displays a grid of controls
 * in three different sizes (md, sm, xs) with the default styling.
 */
export const DefaultVariant: Story = {
  render: () => <SegmentedControlGrid />,
};

/**
 * The subtle variant of the SegmentedControl component provides a more appropriate styling
 * for n100/n1200 backgrounds.
 */
export const SubtleVariant: Story = {
  render: () => (
    <div className="bg-ably-primary-inverse-accent rounded-lg p-4">
      <SegmentedControlGrid variant="subtle" />
    </div>
  ),
};

/**
 * The strong variant of the SegmentedControl component provides more visual contrast
 * and is displayed against a neutral background to highlight the difference in styling.
 */
export const StrongVariant: Story = {
  render: () => (
    <div className="bg-ably-primary-inverse-accent rounded-lg p-4">
      <SegmentedControlGrid variant="strong" />
    </div>
  ),
};

/**
 * This example shows the SegmentedControl with an icon positioned on the left side
 * of the text content, demonstrating how icons can enhance visual communication.
 */
export const WithLeftIcon: Story = {
  render: () => <SegmentedControlGrid leftIcon="icon-tech-javascript" />,
};

/**
 * This example shows the SegmentedControl with an icon positioned on the right side
 * of the text content, useful for indicating actions or additional information.
 */
export const WithRightIcon: Story = {
  render: () => <SegmentedControlGrid rightIcon="icon-tech-javascript" />,
};

/**
 * The disabled state of the SegmentedControl shows how the component appears when
 * it's not interactive, with muted colors and a not-allowed cursor.
 */
export const Disabled: Story = {
  render: () => <SegmentedControlGrid disabled />,
};

/**
 * This variant shows the SegmentedControl with fully rounded corners (pill shape),
 * which can be useful for certain design aesthetics or to visually distinguish
 * different types of controls.
 */
export const Rounded: Story = {
  render: () => <SegmentedControlGrid rounded />,
};
