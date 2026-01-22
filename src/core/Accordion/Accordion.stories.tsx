import React from "react";
import Accordion, { AccordionProps } from "../Accordion";
import Badge from "../Badge";
import { IconName } from "../Icon/types";
import { accordionThemes } from "./types";

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque congue risus id lobortis. Vivamus blandit dolor at ultricies cursus. Phasellus pharetra nunc erat, quis porttitor mauris faucibus in. Donec feugiat dapibus orci et blandit. Duis eleifend accumsan est nec euismod. Proin imperdiet malesuada lacus, a aliquam eros aliquet nec. Sed eu dolor finibus, sodales nisl a, egestas mi. In semper interdum lacinia. Duis malesuada diam quis purus blandit, sit amet imperdiet neque accumsan. Morbi viverra vitae risus ut pellentesque. Praesent ac blandit augue. Aliquam purus lectus, lacinia in semper vitae, dictum eu felis. Donec vel pulvinar eros, id facilisis neque. Aenean odio arcu, accumsan vel est in, lobortis rhoncus ligula. Pellentesque sit amet odio velit.";

const lorem = (
  <p className="mb-4 text-neutral-1300 dark:text-neutral-000">{loremText}</p>
);

const textarea = (
  <textarea
    className="w-full h-64 bg-neutral-700 p-4 rounded-xl leading-relaxed"
    defaultValue={loremText}
  />
);

const data = [...Array(5)].map((_, i) => ({
  name: `Item ${i + 1}`,
  content: lorem,
}));

const dataWithIcons = data.map((datum) => ({
  ...datum,
  icon: "icon-gui-document-outline" as IconName,
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

const dataWithCustomClickable = data.map((datum) => ({
  ...datum,
  onClick: () => alert(`Custom onClick for ${datum.name} section`),
}));

const AccordionPresentation = ({ data, options }: AccordionProps) => (
  <div className="grid sm:grid-cols-2 gap-4 w-full">
    {accordionThemes
      .filter((theme) => !theme.toLowerCase().includes("static"))
      .map((theme) => (
        <div key={theme} className={"p-4 rounded-lg"}>
          <p
            className={
              "ui-text-p3 mb-4 text-center text-neutral-1300 dark:text-neutral-000 font-mono"
            }
          >
            {theme}
          </p>
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
  title: "Components/Accordion",
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
      options: { selectable: true, defaultOpenIndexes: [0] },
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
    <div className="h-[25rem]">
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

export const StaticAndFullyOpen = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4 w-full">
      {accordionThemes
        .filter((theme) => theme.toLowerCase().includes("static"))
        .map((theme) => (
          <div
            key={theme}
            className={`p-4 rounded-lg ${theme.includes("dark") ? "bg-neutral-1300" : ""}`}
          >
            <p className="ui-text-p3 mb-4 text-center font-mono">{theme}</p>
            <Accordion
              data={data}
              options={{ fullyOpen: true }}
              theme={theme}
              className="flex-1"
            />
          </div>
        ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Setting `fullyOpen` on options will set all sections to be open by default. This is useful for static themes (usable with the `static` theme).",
      },
    },
  },
};

export const WithCustomOnClick = {
  render: () =>
    AccordionPresentation({
      data: dataWithCustomClickable,
    }),
  parameters: {
    docs: {
      description: {
        story:
          "When you set an onClick entry, it will be called when the section is clicked. It will add an additional action to be performed apart from the open/close behavior.",
      },
    },
  },
};

export const WithCustomElementCSS = {
  render: () =>
    AccordionPresentation({
      data: dataWithIcons,
      options: {
        selectedHeaderCSS: "bg-green-400 hover:bg-blue-600",
        contentCSS: "bg-yellow-200",
        headerCSS: "bg-pink-400 hover:bg-pink-600 h-10",
        iconSize: "40px",
        rowIconSize: "12px",
      },
    }),
  parameters: {
    docs: {
      description: {
        story:
          "By modifying `headerCSS`, `selectedHeaderCSS`, `contentCSS`, `iconSize`, and `rowIconSize` in `options`, you can customize the styling of the header, row expansion icons (i.e. the plus and minus), and the icons on the left of the row. What's below is hideous, but you get the gist.",
      },
    },
  },
};

export const WithSelectedItemCSS = {
  render: () =>
    AccordionPresentation({
      data: dataWithIcons,
      options: {
        defaultOpenIndexes: [0, 2],
        selectedItemCSS:
          "bg-blue-100 dark:bg-blue-900 rounded-lg p-2 border-2 border-blue-500 dark:border-blue-400",
      },
    }),
  parameters: {
    docs: {
      description: {
        story:
          "By setting `selectedItemCSS` in `options`, you can apply custom CSS classes to the AccordionItem wrapper element when it is open/active. This example shows items 1 and 3 open with a blue background and border. The content remains visible and functional.",
      },
    },
  },
};

const dataWithBadgeInHeading = [
  {
    name: "Basic Plan",
    heading: (
      <div className="flex items-center gap-2">
        <span>Basic Plan</span>
        <Badge size="sm" color="neutral">
          Popular
        </Badge>
      </div>
    ),
    content: lorem,
  },
  {
    name: "Pro Plan",
    heading: (
      <div className="flex items-center gap-2">
        <span>Pro Plan</span>
        <Badge size="sm" color="orange">
          Best Value
        </Badge>
      </div>
    ),
    content: lorem,
  },
  {
    name: "Enterprise Plan",
    heading: (
      <div className="flex items-center gap-2">
        <span>Enterprise Plan</span>
        <Badge size="sm" color="blue">
          Recommended
        </Badge>
      </div>
    ),
    content: lorem,
  },
];

export const WithBadgeOnHeading = {
  render: () =>
    AccordionPresentation({
      data: dataWithBadgeInHeading,
    }),
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the accordion heading by providing a `heading` prop with custom ReactNode content. This example shows headings with Badge components. The `heading` prop can be a ReactNode or a function that receives the index and isOpen state.",
      },
    },
  },
};
