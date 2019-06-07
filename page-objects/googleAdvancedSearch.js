module.exports = {
  url: 'https://www.google.com/advanced_search',
  elements: {
    mainQueryInput: 'input[name="as_q"]',
    mainQuery: 'Elon Musk',
    languageDropdown: '#lr_button',
    lastUpdateDropdown: '#as_qdr_button',
    submitButton: '.jfk-button[type="submit"]'
  },
  commands: [{
    setQuery(value) {
      return this
        .setValue('@mainQueryInput', value)
        .click(`.goog-menuitem[value="${value}"]`);
    },
    selectFilter(selector, value) {
      return this
        .click(selector)
        .click(`.goog-menuitem[value="${value}"]`);
    },
    search() {
      return this
        .click('@submitButton');
    }
  }],
}