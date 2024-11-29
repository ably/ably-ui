import type { TestRunnerConfig } from "@storybook/test-runner";

const flakyStories = [
  "components-status",
  "components-meganav",
  "components-accordion",
  "components-footer",
  "components-tab-menu",
  "features-pricing-cards",
];

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    const url = page.url();

    if (flakyStories.some((story) => url.includes(story))) {
      return;
    }

    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
