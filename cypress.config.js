const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", 
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      const preprocessor = await import("@badeball/cypress-cucumber-preprocessor");
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    video: false,
  },
});