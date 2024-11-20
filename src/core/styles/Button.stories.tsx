import React from "react";

export default {
  title: "CSS/Button",
};

const buttons = {
  priority: {
    default: "ui-button-priority",
    iconLeft: "",
  },
};

const sizes = [
  { label: "Large", symbol: "lg" },
  { label: "Regular", symbol: "" },
  { label: "Small", symbol: "sm" },
  { label: "Extra small", symbol: "xs" },
];

type ButtonSetType = "priority" | "primary" | "secondary";

const buttonSet = (type: ButtonSetType) => (
  <div className="grid sm:grid-cols-3 gap-16">
    {Array(3)
      .fill(0)
      .map((_, index) => (
        <div
          key={`button-variant-${index}`}
          className="flex flex-col gap-16 max-w-[300px]"
        >
          {sizes.map((size, sizeIndex) => (
            <button
              type="button"
              key={`button-size-${sizeIndex}`}
              className={`ui-button-${type}-${size}`}
            >
              {index === 1 ? (
                <svg
                  className="text-cool-black hover:text-active-orange"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <use xlinkHref="#sprite-icon-gui-search"></use>
                </svg>
              ) : null}
              {size.label}
              {index === 2 ? (
                <svg
                  className="text-cool-black hover:text-active-orange"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <use xlinkHref="#sprite-icon-gui-arrow-right"></use>
                </svg>
              ) : null}
            </button>
          ))}
        </div>
      ))}
  </div>
);

export const HighPriority = {
  render: () => buttonSet("priority"),
};

export const Primary = {
  render: () => buttonSet("primary"),
};

export const Secondary = {
  render: () => buttonSet("secondary"),
};
