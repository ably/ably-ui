import React, { Fragment } from "react";
import Accordion, { AccordionProps } from "../Accordion";
import { IconName } from "../Icon/types";
import { accordionThemes } from "./types";

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque congue risus id lobortis. Vivamus blandit dolor at ultricies cursus. Phasellus pharetra nunc erat, quis porttitor mauris faucibus in. Donec feugiat dapibus orci et blandit. Duis eleifend accumsan est nec euismod. Proin imperdiet malesuada lacus, a aliquam eros aliquet nec. Sed eu dolor finibus, sodales nisl a, egestas mi. In semper interdum lacinia. Duis malesuada diam quis purus blandit, sit amet imperdiet neque accumsan. Morbi viverra vitae risus ut pellentesque. Praesent ac blandit augue. Aliquam purus lectus, lacinia in semper vitae, dictum eu felis. Donec vel pulvinar eros, id facilisis neque. Aenean odio arcu, accumsan vel est in, lobortis rhoncus ligula. Pellentesque sit amet odio velit.";

const lorem = <p className="mb-16">{loremText}</p>;

const textarea = (
  <textarea
    className="w-full h-256 bg-neutral-700 p-16 rounded-xl leading-relaxed"
    defaultValue={loremText}
  />
);

const data = [...Array(5)].map((_, i) => ({
  name: `Item ${i + 1}`,
  content: lorem,
}));

const dataWithIcons = data.map((datum) => ({
  ...datum,
  icon: "icon-gui-document-generic" as IconName,
}));

const dataWithTextarea = data.map((datum) => ({
  ...datum,
  content: textarea,
}));

const longData = data.map((datum) => ({
  ...datum,
  content: (
    <>
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
    </>
  ),
}));

const AccordionPresentation = ({ data, options }: AccordionProps) => (
  <div className="grid sm:grid-cols-2 gap-16 w-full">
    {accordionThemes.map((theme) => (
      <div
        key={theme}
        className={`p-16 rounded-lg ${theme.includes("dark") ? "bg-neutral-1300" : ""}`}
      >
        <p className="ui-text-p3 mb-16 text-center font-mono">{theme}</p>
        <Accordion
          data={data}
          options={options}
          theme={theme}
          className="flex-1"
        />
      </div>
    ))}
  </div>
);

export default {
  title: "JS Components/Accordion",
  component: Accordion,
};

export const Default = { render: () => AccordionPresentation({ data }) };

export const AutoClose = {
  render: () =>
    AccordionPresentation({
      data,
      options: { autoClose: true },
    }),
  parameters: {
    docs: {
      description: {
        story:
          "Opening a section will close any other open sections. Set with `autoClose` on `options`.",
      },
    },
  },
};

export const SelectableHeaders = {
  render: () =>
    AccordionPresentation({
      data: dataWithIcons,
      options: { selectable: true },
    }),
  parameters: {
    docs: {
      description: {
        story:
          "Opening a section will apply styling to the opened section header. Row icons are disabled. Set with `selectable` on `options`.",
      },
    },
  },
};

export const StickyHeaders = {
  render: () => (
    <div className="h-[400px]">
      {AccordionPresentation({
        data: data,
        options: { sticky: true, defaultOpenIndexes: [0, 1, 2, 3] },
      })}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Section headers will fix to the top of the container when scrolled. Set with `sticky` on `options`.",
      },
    },
  },
};

export const WithDefaultOpenSections = {
  render: () =>
    AccordionPresentation({
      data: data,
      options: { defaultOpenIndexes: [1] },
    }),
  parameters: {
    docs: {
      description: {
        story:
          "The sections that correspond to the supplied indexes will be open by default. (e.g. `[1]` will open the second section). Set with `defaultOpenIndexes` on `options`.",
      },
    },
  },
};

export const WithRowIcons = {
  render: () =>
    AccordionPresentation({
      data: dataWithIcons,
    }),
  parameters: {
    docs: {
      description: {
        story:
          "When an icon name is supplied, it will be displayed to the left of the section name. Set with `icon` on `data` entries.",
      },
    },
  },
};

export const LongContent = {
  args: {
    data: longData,
  },
};

export const WithResizableInnerContent = {
  render: () =>
    AccordionPresentation({
      data: dataWithTextarea,
    }),
  parameters: {
    docs: {
      description: {
        story:
          "Try resizing content within the Accordion entries - the container should respond to the new height accordingly",
      },
    },
  },
};
