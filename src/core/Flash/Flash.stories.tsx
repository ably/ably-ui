import React from "react";
import Flash, { pushFlash, ZustandFlashes } from "../Flash";
import { useFlashStore, clearFlashes } from "../flash-store";
import { expect, within, waitFor } from "storybook/test";

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
  // Clear flash store before each story loads
  beforeEach: () => {
    clearFlashes();
  },
};

export const Default = {
  render: (args: { flashes: string[][] }) => {
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
  render: (args: { flashes: string[][] }) => {
    return <Flash {...args} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Wait for flashes to appear with longer timeout
    const flashes = await waitFor(
      () => {
        const found = canvas.getAllByTestId("ui-flash");
        if (found.length < 4) {
          throw new Error(`Expected 4 flashes, got ${found.length}`);
        }
        return found;
      },
      { timeout: 5000 }
    );

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

/**
 * This story demonstrates using the Zustand store directly
 * with pushFlash() for programmatic flash creation.
 */
export const ZustandStoreDemo = {
  render: () => {
    const FlashDemo = () => {
      const items = useFlashStore((state) => state.items);

      const addSuccess = () => {
        pushFlash({ type: "success", content: "Action completed successfully!" });
      };

      const addError = () => {
        pushFlash({ type: "error", content: "Something went wrong." });
      };

      const addMultiple = () => {
        pushFlash([
          { type: "notice", content: "First notification" },
          { type: "info", content: "Second notification" },
        ]);
      };

      return (
        <div>
          <div className="mb-16 flex gap-8">
            <button
              type="button"
              onClick={addSuccess}
              className="px-16 py-8 bg-zingy-green text-cool-black rounded"
            >
              Add Success
            </button>
            <button
              type="button"
              onClick={addError}
              className="px-16 py-8 bg-gui-error text-white rounded"
            >
              Add Error
            </button>
            <button
              type="button"
              onClick={addMultiple}
              className="px-16 py-8 bg-electric-cyan text-cool-black rounded"
            >
              Add Multiple
            </button>
            <button
              type="button"
              onClick={clearFlashes}
              className="px-16 py-8 bg-cool-black text-white rounded"
            >
              Clear All
            </button>
          </div>
          <div className="text-sm text-neutral-700 mb-8">
            Store contains {items.length} flash(es)
          </div>
          <ZustandFlashes />
        </div>
      );
    };

    return <FlashDemo />;
  },
};
