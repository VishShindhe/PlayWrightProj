import { PlaywrightTestConfig, devices } from '@playwright/test';

const capabilities = {
  browserName: "Chrome",
  browserVersion: "latest",
  "LT:Options": {
      platform: "MacOS Sonoma",
      build: "Playwright Test Build from config",
      name: "Playwright Test - 1",
      user: 'vishwa.shindhe',
      accessKey: '',
      network: true,
      video: true,
      console: true,
      tunnel: false,
      tunnelName:"",
      geoLocation: '',
  },

};

const config: PlaywrightTestConfig = {

  projects: [
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'] 
      },
    },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'] 
      },
    },
  ],

  testMatch: ["pomTest/addToCartUsingFixture.test.ts"],
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
      ${encodeURIComponent(JSON.stringify(capabilities))}`
    },
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
