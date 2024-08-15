import type { TestRunnerConfig } from "@storybook/test-runner";

const flakyStories = ["components-status"];

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // skip snapshot testing for flaky stories (atm, just Status)
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
