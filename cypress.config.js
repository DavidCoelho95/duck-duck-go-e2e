module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)},
  },
// Adicionei para rodar em urls cros
  chromeWebSecurity: false

}




