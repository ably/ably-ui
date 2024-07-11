import React from "react";
import Icon from "../Icon";

export default {
  title: "CSS/Button",
};

export const Standard = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn">
        Primary button
      </button>
      <button type="button" className="ui-btn-alt">
        Primary button alternative
      </button>
      <button type="button" className="ui-btn-secondary">
        Secondary button
      </button>
      <button type="button" className="ui-btn" disabled>
        Unavailable primary button
      </button>
      <button type="button" className="ui-btn-alt" disabled>
        Unavailable primary button alternative
      </button>
      <button type="button" className="ui-btn-secondary" disabled>
        Unavailable secondary button
      </button>
    </div>
  ),
};

export const Inverted = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn-invert">
        Primary button
      </button>
      <button type="button" className="ui-btn-secondary-invert">
        Secondary button
      </button>
      <button type="button" className="ui-btn-invert" disabled>
        Unavailable primary button
      </button>
      <button type="button" className="ui-btn-secondary-invert" disabled>
        Unavailable secondary button
      </button>
    </div>
  ),
};

export const WithIcons = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn">
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Primary button with icon
      </button>
      <button type="button" className="ui-btn-alt">
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Primary button alternative with icon
      </button>
      <button type="button" className="ui-btn-secondary">
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Secondary button with icon
      </button>
      <button type="button" className="ui-btn" disabled>
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Unavailable primary button with icon
      </button>
      <button type="button" className="ui-btn-alt" disabled>
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Unavailable primary button alternative with icon
      </button>
      <button type="button" className="ui-btn-secondary" disabled>
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Unavailable secondary button with icon
      </button>
    </div>
  ),
};

export const LinkStyledAsButton = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <a href="#" role="button" className="ui-btn">
        Link
      </a>
      <a href="#" role="button" className="ui-btn ui-btn-disabled">
        Disabled link
      </a>
    </div>
  ),
};

export const ExtraSmall = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn p-btn-xsmall text-btn4">
        Primary button
      </button>
      <button type="button" className="ui-btn p-btn-xsmall text-btn4">
        <Icon
          name="icon-gui-search"
          size="1rem"
          additionalCSS="ui-btn-icon-xsmall"
        />
        Primary button with icon
      </button>
      <button type="button" className="ui-btn-alt p-btn-xsmall text-btn4">
        Primary button alternative
      </button>
      <button type="button" className="ui-btn-secondary p-btn-xsmall text-btn4">
        Secondary button
      </button>
    </div>
  ),
};

export const Small = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn p-btn-small text-btn3">
        Primary button
      </button>
      <button type="button" className="ui-btn p-btn-small text-btn3">
        <Icon
          name="icon-gui-search"
          size="1rem"
          additionalCSS="ui-btn-icon-small"
        />
        Primary button with icon
      </button>
      <button type="button" className="ui-btn-alt p-btn-small text-btn3">
        Primary button alternative
      </button>
      <button type="button" className="ui-btn-secondary p-btn-small text-btn3">
        Secondary button
      </button>
    </div>
  ),
};

export const Large = {
  render: () => (
    <div className="flex flex-col gap-16 max-w-[300px]">
      <button type="button" className="ui-btn p-btn-large text-btn1">
        Primary button
      </button>
      <button type="button" className="ui-btn p-btn-large text-btn1">
        <Icon name="icon-gui-search" size="1rem" additionalCSS="ui-btn-icon" />
        Primary button with icon
      </button>
      <button type="button" className="ui-btn-alt p-btn-large text-btn1">
        Primary button alternative
      </button>
      <button type="button" className="ui-btn-secondary p-btn-large text-btn1">
        Secondary button
      </button>
    </div>
  ),
};
