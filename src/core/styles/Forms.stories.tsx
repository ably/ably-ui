import React from "react";
import { Checkbox, RadioButton } from "./forms/story-components";

export default {
  title: "Styles/Forms",
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

export const Inputs = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <p className="mb-4 text-neutral-800">Default</p>
        <input
          type="search"
          className="ui-input"
          placeholder="Light mode input"
          autoComplete="off"
        />
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Disabled</p>
        <input
          type="search"
          className="ui-input disabled"
          placeholder="Light mode input"
          autoComplete="off"
          disabled
        />
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Invalid</p>
        <input
          type="search"
          className="ui-input disabled"
          placeholder="Light mode input"
          autoComplete="off"
          required
        />
        <p className="ui-text-p3 text-gui-error-red mt-2">Oof, what an input</p>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">With character insert</p>
        <div className="relative">
          <div className="h-8 w-8 absolute left-2 top-2 flex items-center justify-center select-none cursor-default">
            $
          </div>
          <input
            type="search"
            className="ui-input pl-10"
            placeholder="With icon"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  ),
};

export const Dropdowns = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <p className="mb-4 text-neutral-800">Default</p>
        <select className="ui-dropdown" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Small</p>
        <select className="ui-dropdown-small" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Disabled</p>
        <select className="ui-dropdown" defaultValue="select" disabled>
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Synthetic</p>
        <div className="ui-dropdown max-w-64" tabIndex={0}>
          Select language
        </div>
      </div>
    </div>
  ),
};

export const Checkboxes = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4">
      {["Default", "Disabled"].map((label, groupIndex) => (
        <div key={label} className="flex flex-col gap-2">
          <p className="mb-4 text-neutral-800">{label}</p>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Checkbox
                key={i}
                index={i + groupIndex * 3 + 1}
                disabled={groupIndex === 1}
              />
            ))}
        </div>
      ))}
    </div>
  ),
};

export const RadioButtons = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4">
      {["Default", "Disabled"].map((label, groupIndex) => (
        <div key={label} className="flex flex-col gap-2">
          <p className="mb-4 text-neutral-800">{label}</p>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <RadioButton
                key={i}
                index={i + groupIndex * 3 + 1}
                disabled={groupIndex === 1}
              />
            ))}
        </div>
      ))}
    </div>
  ),
};

export const Textareas = {
  render: () => (
    <div className="mb-10">
      <label className="ui-text-p1 block" htmlFor="example-text-area">
        Textarea Label
      </label>
      <textarea
        id="example-text-area"
        className="ui-textarea"
        rows={2}
        placeholder="The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."
      ></textarea>
      <p className="ui-text-p3 text-dark-grey">
        Example of additional text beneath the textarea.
      </p>
    </div>
  ),
};

export const Toggles = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="flex gap-4 items-center">
        <label className="ui-toggle" aria-label="Default toggle">
          <input type="checkbox" />
          <span className="ui-toggle-slider" />
        </label>
        <p>Default</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle" aria-label="Pre-checked toggle">
          <input type="checkbox" defaultChecked />
          <span className="ui-toggle-slider" />
        </label>
        <p>Pre-checked</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle" aria-label="Disabled toggle">
          <input type="checkbox" disabled />
          <span className="ui-toggle-slider" />
        </label>
        <p>Disabled</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle" aria-label="Custom color toggle">
          <input type="checkbox" className="peer" />
          <span className="ui-toggle-slider peer-checked:!bg-pink-600 bg-blue-800" />
        </label>
        <p>Custom color</p>
      </div>
    </div>
  ),
};
