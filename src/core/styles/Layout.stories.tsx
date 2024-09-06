import React from "react";

export default {
  title: "CSS/Layout",
};

export const StandardContainer = {
  render: () => (
    <div className="ui-standard-container mb-32">
      <div className="bg-mid-grey align-center p-32">
        <p className="ui-text-h3 text-center">ui-standard-container</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Container that does not grow beyond the xl breakpoint (1440px), centers and contains the correct outside padding across viewport changes. Usage: `.ui-standard-container`",
      },
    },
  },
};

export const GridGap = {
  render: () => (
    <div className="ui-standard-container mb-32">
      <div className="bg-mid-grey align-center p-32">
        <div className="grid grid-cols-4 ui-grid-gap">
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            1
          </div>
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            2
          </div>
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            3
          </div>
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            4
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Add correct gaps across viewport changes. Usage: `.ui-grid-gap`",
      },
    },
  },
};

export const GridPX = {
  render: () => (
    <div className="ui-standard-container mb-32">
      <div className="bg-mid-grey align-center p-32">
        <div className="ui-grid-px">
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            Text
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Add padding on the x axis, with correct values across viewport changes. Usage: `.ui-grid-px`",
      },
    },
  },
};

export const GridMX = {
  render: () => (
    <div className="ui-standard-container mb-32">
      <div className="bg-mid-grey align-center p-32">
        <div className="ui-grid-mx">
          <div className="bg-cool-black text-white font-sans p-32 text-center">
            Text
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Add margin on the x axis, with correct values across viewport changes. Usage: `.ui-grid-mx`",
      },
    },
  },
};

export const FullContainerOverride = {
  render: () => (
    <div className="overflow-x-hidden">
      <div className="ui-standard-container mb-32">
        <div className="bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-32 ui-full-container-override text-white">
          <div>
            {[...Array(20)].map((_, i) => (
              <span className="mx-8 rounded-lg bg-cool-black p-16" key={i}>
                Content
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Somewhat niche override for situations where you would like an element to break out from inside a container and occupy the whole width of the page. The dark blue line here shows that the element is centered, but the content starts from the left hand edge.\n\nPlace on an element that is a child of `.ui-standard-container`.\n\nUsage: `.ui-full-container-override`",
      },
    },
  },
};

export const FullBorderlessContainerOverride = {
  render: () => (
    <div className="overflow-x-hidden">
      <div className="ui-standard-container mb-32">
        <div className="bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-32 ui-full-borderless-container-override text-white">
          <div className="text-center">
            {[...Array(20)].map((_, i) => (
              <span className="mx-8 rounded-lg bg-cool-black p-16" key={i}>
                Content
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Even more niche application where you would like an element to break out from a standard container, but without the constraints of the window width. The dark blue line here shows that the element is centered (it's more blurry as the 'element' is far wider to achieve the borderless effect).\n\nPlace on an element that is a child of `.ui-standard-container`, and ensure that the container is within an element with `overflow:hidden` or something of that ilk.\n\nUsage: `.ui-full-borderless-container-override`",
      },
    },
  },
};
