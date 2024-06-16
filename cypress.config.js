const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)

      // implement node event listeners here
      return config
    },
    specPattern: 'cypress/e2e/integration/*.js'
  },
});
