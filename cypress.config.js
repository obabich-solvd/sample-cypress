const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: '@zebrunner/javascript-agent-cypress',
  reporterOptions: {
    reportingServerHostname: '<YOUR_ZEBRUNNER_SERVER_URL>',
    reportingServerAccessToken: '<YOUR_ZEBRUNNER_ACCESS_TOKEN>',
    reportingProjectKey: 'DEF',
    reportingRunEnvironment: 'STAGE',
    reportingRunBuild: '2.41.2.2431-SNAPSHOT',
    reportingRunDisplayName: 'Zebrunner Demo Launch',
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
