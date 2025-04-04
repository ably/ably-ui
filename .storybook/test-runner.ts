import type { TestRunnerConfig } from "@storybook/test-runner";

const flakyStories = [
  "components-status",
  "components-meganav",
  "components-accordion",
  "components-footer",
  "components-tab-menu",
  "components-header",
  "features-pricing-cards",
  "components-legacymeganav",
  "components-legacyfooter",
];

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    const url = page.url();

    if (flakyStories.some((story) => url.includes(story))) {
      return;
    }

    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler?.innerHTML();

    // We don't need TS to make sense of this, it's a hook to a place where 'expect' makes sense
    // @ts-ignore
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
