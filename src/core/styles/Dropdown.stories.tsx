import React from "react";

export default {
  title: "CSS/Dropdown",
};

const exampleOptionFields = (
  <>
    <option value="select" disabled>
      Select language
    </option>
    <option value="javascript">Javascript</option>
    <option value="ruby">Ruby</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
  </>
);

export const Default = {
  render: () => (
    <select className="ui-dropdown" defaultValue="select">
      {exampleOptionFields}
    </select>
  ),
};

export const Small = {
  render: () => (
    <select className="ui-dropdown-small" defaultValue="select">
      {exampleOptionFields}
    </select>
  ),
};

export const Disabled = {
  render: () => (
    <select className="ui-dropdown" defaultValue="select" disabled>
      {exampleOptionFields}
    </select>
  ),
};

export const Synthetic = {
  render: () => (
    <div className="ui-dropdown max-w-256" tabIndex={0}>
      Select language
    </div>
  ),
};

export const DarkMode = {
  render: () => (
    <div className="bg-neutral-1300 p-24">
      <select className="ui-dropdown ui-dropdown-dark" defaultValue="select">
        {exampleOptionFields}
      </select>
    </div>
  ),
};
