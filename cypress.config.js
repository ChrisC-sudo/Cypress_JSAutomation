const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
    },
    specPattern: 'cypress/e2e/integration/*.js'
  },
  env:{
    url:"https://rahulshettyacademy.com/"
  },
  retries:{
    runMode : 1,
  }
});
