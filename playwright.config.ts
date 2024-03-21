import type { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["fixture/fixtureTest.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "only-on-failure",
    video: "retry-with-video"
  },
  "retries": 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
