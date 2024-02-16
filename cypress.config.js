const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/Integration/examples/*.js',
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    reporter:"mochawesome",
    reporterOptions:{
      charts: true
    }
  },
});
