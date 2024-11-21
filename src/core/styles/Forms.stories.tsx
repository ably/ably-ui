import React from "react";
import Icon from "../Icon";

export default {
  title: "CSS/Forms",
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
    <div className="grid sm:grid-cols-2 gap-16">
      <div>
        <p className="mb-16 text-neutral-800">Default</p>
        <input
          type="search"
          className="ui-input"
          placeholder="Light mode input"
          autoComplete="off"
        />
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Default (dark)</p>
        <input
          type="search"
          className="ui-input ui-input-dark"
          placeholder="Dark mode input"
          autoComplete="off"
        />
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Disabled</p>
        <input
          type="search"
          className="ui-input disabled"
          placeholder="Light mode input"
          autoComplete="off"
          disabled
        />
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Disabled (dark)</p>
        <input
          type="search"
          className="ui-input ui-input-dark"
          placeholder="Dark mode input"
          autoComplete="off"
          disabled
        />
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Invalid</p>
        <input
          type="search"
          className="ui-input disabled"
          placeholder="Light mode input"
          autoComplete="off"
          required
        />
        <p className="ui-text-p3 text-gui-error-red mt-8">Oof, what an input</p>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Invalid (dark)</p>
        <input
          type="search"
          className="ui-input ui-input-dark"
          placeholder="Dark mode input"
          autoComplete="off"
          required
        />
        <p className="ui-text-p3 text-gui-error-red mt-8">Oof, what an input</p>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">With character insert</p>
        <div className="relative">
          <div className="h-32 w-32 absolute left-8 top-8 flex items-center justify-center select-none cursor-default">
            $
          </div>
          <input
            type="search"
            className="ui-input pl-40"
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
    <div className="grid sm:grid-cols-2 gap-16">
      <div>
        <p className="mb-16 text-neutral-800">Default</p>
        <select className="ui-dropdown" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Small</p>
        <select className="ui-dropdown-small" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Disabled</p>
        <select className="ui-dropdown" defaultValue="select" disabled>
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Synthetic</p>
        <div className="ui-dropdown max-w-256" tabIndex={0}>
          Select language
        </div>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Dark mode</p>
        <div className="bg-neutral-1300 p-24">
          <select
            className="ui-dropdown ui-dropdown-dark"
            defaultValue="select"
          >
            {exampleOptionFields}
          </select>
        </div>
      </div>
    </div>
  ),
};

export const Checkboxes = {
  render: () => (
    <div className="grid sm:grid-cols-2 gap-16">
      <div>
        <p className="mb-16 text-neutral-800">Default</p>
        <div className="ui-checkbox-p1">
          <input
            data-ui-checkbox-native=""
            type="checkbox"
            id="checkbox-example-1"
            name="checkbox-example-1"
            value="yes"
            className="ui-checkbox-input"
          />
          <div data-ui-checkbox-styled="" className="ui-checkbox-styled">
            <Icon
              name="icon-gui-tick"
              size="1rem"
              additionalCSS="ui-checkbox-styled-tick"
            />
          </div>
          <label htmlFor="checkbox-example-1" className="ui-checkbox-label-p1">
            Subscribe to the Ably newsletter
          </label>
        </div>
      </div>
      <div>
        <p className="mb-16 text-neutral-800">Disabled</p>
        <div className="ui-checkbox-p1">
          <input
            data-ui-checkbox-native=""
            type="checkbox"
            id="checkbox-example-2"
            name="checkbox-example-2"
            value="yes"
            className="ui-checkbox-input"
            disabled
          />
          <div data-ui-checkbox-styled="" className="ui-checkbox-styled">
            <Icon
              name="icon-gui-tick"
              size="1rem"
              additionalCSS="ui-checkbox-styled-tick"
            />
          </div>
          <label htmlFor="checkbox-example-2" className="ui-checkbox-label-p2">
            Subscribe to the Ably newsletter
          </label>
        </div>
      </div>
    </div>
  ),
};

export const Textareas = {
  render: () => (
    <div className="mb-40">
      <label className="ui-text-p1 block" htmlFor="example-text-area"></label>
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
    <div className="grid sm:grid-cols-2 gap-16">
      <div className="flex gap-16 items-center">
        <label className="ui-toggle">
          <input type="checkbox" />
          <span className="ui-toggle-slider" />
        </label>
        <p>Default</p>
      </div>
      <div className="flex gap-16 items-center">
        <label className="ui-toggle">
          <input type="checkbox" defaultChecked />
          <span className="ui-toggle-slider" />
        </label>
        <p>Pre-checked</p>
      </div>
      <div className="flex gap-16 items-center">
        <label className="ui-toggle">
          <input type="checkbox" disabled />
          <span className="ui-toggle-slider" />
        </label>
        <p>Disabled</p>
      </div>
      <div className="flex gap-16 items-center">
        <label className="ui-toggle">
          <input type="checkbox" className="peer" />
          <span className="ui-toggle-slider peer-checked:!bg-pink-600 bg-blue-800" />
        </label>
        <p>Custom color</p>
      </div>
    </div>
  ),
};
