import React from "react";
import Expander from "../Expander";

export default {
  title: "JS Components/Expander",
  component: Expander,
  tags: ["autodocs"],
  args: {
    height: 200,
  },
  argTypes: {
    height: {
      control: {
        type: "number",
      },
    },
  },
};

const longContentInner = (
  <div>
    <p>Ipsum</p>
    <ul className="mb-16 list-inside list-disc">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed convallis ex pharetra, tristique tellus vel, rhoncus velit.</li>
      <li>Mauris molestie felis et scelerisque ullamcorper.</li>
      <li>Maecenas congue ligula ut commodo tristique.</li>
      <li>
        Pellentesque venenatis elit vitae urna condimentum, in mollis arcu
        venenatis.
      </li>
      <li>Donec nec turpis vel urna egestas fringilla.</li>
    </ul>
    <p>Ipsum</p>
    <ul className="mb-16 list-inside list-disc">
      <li>Mauris ut nibh vel metus cursus semper.</li>
      <li>Ut mattis tortor eu urna accumsan gravida.</li>
      <li>Nunc pellentesque neque at elit pretium tempor.</li>
      <li>Curabitur finibus magna vitae nunc varius fermentum.</li>
    </ul>
    <ul className="mb-16 list-inside list-disc">
      <li>Curabitur vehicula mi iaculis, luctus augue eu, venenatis quam.</li>
      <li>Praesent in eros efficitur, consequat ante eu, faucibus arcu.</li>
      <li>Nulla laoreet nibh a odio interdum, non molestie diam auctor.</li>
    </ul>
    <p>Ipsum</p>
    <ul className="mb-16 list-inside list-disc">
      <li>
        Praesent aliquam diam tincidunt, sollicitudin tortor eget, vulputate
        lacus.
      </li>
      <li>Quisque in mi sed ex vulputate varius in a leo.</li>
      <li>Etiam posuere dolor at tortor aliquam imperdiet.</li>
      <li>
        Maecenas quis neque consequat, ultricies est sit amet, congue est.
      </li>
      <li>Aenean a elit sed nibh pretium lacinia sed convallis sapien.</li>
    </ul>
    <p>Ipsum</p>
    <ul className="mb-16 list-inside list-disc">
      <li>
        Nulla malesuada libero id dolor aliquam, non sagittis mi scelerisque.
      </li>
      <li>
        Etiam tincidunt lacus eu diam laoreet consectetur sit amet non est.
      </li>
      <li>In porta arcu nec purus tincidunt vulputate.</li>
    </ul>
  </div>
);

export const LongContent = {
  render: () => <Expander>{longContentInner}</Expander>,
  parameters: {
    docs: {
      description: {
        story:
          "A larger amount of content that exceeds the height cut-off, controls shown.",
      },
    },
  },
};

export const ShortContent = {
  render: () => (
    <Expander>
      <div>
        <p>Ipsum</p>
        <ul className="mb-16 list-inside list-disc">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Sed convallis ex pharetra, tristique tellus vel, rhoncus velit.
          </li>
          <li>Mauris molestie felis et scelerisque ullamcorper.</li>
          <li>Maecenas congue ligula ut commodo tristique.</li>
          <li>
            Pellentesque venenatis elit vitae urna condimentum, in mollis arcu
            venenatis.
          </li>
          <li>Donec nec turpis vel urna egestas fringilla.</li>
        </ul>
      </div>
    </Expander>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A smaller amount of content that doesn't exceed the height cut-off, therefore no controls shown.",
      },
    },
  },
};

export const OverriddenStyles = {
  render: () => (
    <Expander
      className="bg-neutral-400 p-16 rounded-lg"
      fadeClassName="from-neutral-800"
    >
      {longContentInner}
    </Expander>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A larger amount of content, with overridden styles for the content wrapper and fader.",
      },
    },
  },
};
