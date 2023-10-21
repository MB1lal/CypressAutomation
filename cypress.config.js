const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
   e2e: {
      baseUrl: 'https://the-internet.herokuapp.com',
      defaultCommandTimeout: 10000,
      setupNodeEvents(on, config) {
         on('task', {downloadFile});
         require('cypress-mochawesome-reporter/plugin')(on);
       },
    },
});
