import React from "react";

export default {
  title: "CSS/Toggle",
};

export const Default = {
  render: () => (
    <label className="ui-toggle">
      <input type="checkbox" />
      <span className="ui-toggle-slider"></span>
    </label>
  ),
};

export const Toggled = {
  render: () => (
    <label className="ui-toggle">
      <input type="checkbox" checked />
      <span className="ui-toggle-slider"></span>
    </label>
  ),
};

export const Disabled = {
  render: () => (
    <label className="ui-toggle">
      <input type="checkbox" disabled />
      <span className="ui-toggle-slider"></span>
    </label>
  ),
};

export const CustomisedSliderColor = {
  render: () => (
    <label className="ui-toggle">
      <input type="checkbox" />
      <span className="ui-toggle-slider bg-neutral-800"></span>
    </label>
  ),
};
