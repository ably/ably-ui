import React from "react";
import Flash, { reducerFlashes } from "../Flash";
import { expect, within } from "@storybook/test";

import {
  attachStoreToWindow,
  createRemoteDataStore,
} from "../remote-data-store.js";
import { reducerBlogPosts } from "../remote-blogs-posts.js";
import { reducerSessionData } from "../remote-session-data.js";

export default {
  title: "Components/Flash",
  component: Flash,
  args: {
    flashes: [
      ["success", "Congratulations! You've won the Oscar"],
      ["notice", "This is a notice"],
      ["error", "This is an error, very bad"],
      ["alert", "This is an alert"],
      ["info", "Some useful information, you are welcome"],
    ],
  },
};

export const Default = {
  render: (args) => {
    const store = createRemoteDataStore({
      ...reducerBlogPosts,
      ...reducerSessionData,
      ...reducerFlashes,
    });

    attachStoreToWindow(store);

    return <Flash {...args} />;
  },
};

export const WithLinks = {
  args: {
    flashes: [
      ["success", 'Valid link: <a href="/valid-link">Click me</a>'],
      [
        "error",
        'Invalid link: <a href="https://external.com">Should be removed</a>',
      ],
      [
        "info",
        'Link with data-method: <a href="/delete" data-method="delete">Delete</a>',
      ],
      [
        "notice",
        'Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>',
      ],
    ],
  },
  render: (args) => {
    const store = createRemoteDataStore({
      ...reducerBlogPosts,
      ...reducerSessionData,
      ...reducerFlashes,
    });

    attachStoreToWindow(store);

    return <Flash {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for flashes to appear
    const flashes = await canvas.findAllByTestId("ui-flash");

    // Test valid link (should be present)
    const validLinkFlash = flashes[0];
    const validLink = within(validLinkFlash).getByText("Click me");
    expect(validLink).toBeInTheDocument();
    expect(validLink).toHaveAttribute("href", "/valid-link");

    // Test invalid link (should be removed)
    const invalidLinkFlash = flashes[1];
    const invalidLinkText =
      within(invalidLinkFlash).getByText("Should be removed");
    expect(invalidLinkText).toBeInTheDocument();
    expect(invalidLinkText).not.toHaveAttribute("href");

    // Test link with data-method (should be present)
    const dataMethodFlash = flashes[2];
    const dataMethodLink = within(dataMethodFlash).getByRole("link", {
      name: "Delete",
    });
    expect(dataMethodLink).toBeInTheDocument();
    expect(dataMethodLink).toHaveAttribute("href", "/delete");
    expect(dataMethodLink).toHaveAttribute("data-method", "delete");

    // Test link with proto relative url (should be present)
    const relFlash = flashes[3];
    const relLink = within(relFlash).getByText("External");
    expect(relLink).toBeInTheDocument();
    expect(relLink).not.toHaveAttribute("href");
    expect(relLink).not.toHaveAttribute("rel");
  },
};
