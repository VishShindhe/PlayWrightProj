import type { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retry-with-video"
  },
  "retries": 2,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
