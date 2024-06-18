const { defineConfig } = require("Cypress");
// const { instrumentCoverage } = require('@cypress/code-coverage/task');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEventsCucumber(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // require('@cypress/code-coverage/task')(on, config)
      return config
    },
    setupNodeEventsCucumber,
    specPattern: 'cypress/e2e/integration/FeatureBDD/FixCom/*.feature'
  },
  env:{
    url:"https://rahulshettyacademy.com/"
  },
  retries:{
    runMode : 1
  }
});