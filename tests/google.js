module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {

    //search terms
    const mainQueryInputSelector = 'input[name="as_q"]';
    const mainQuery = 'Elon Musk';

    //search language
    const languageDropdownOpenerSelector = '#lr_button';
    const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

    //time window selection
    const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    const lastUpdateDropdownValue = '.goog-menuitem[value="m"]';

    const submitButtonSelector = '.jfk-button[type="submit"]';

    browser
      .url('https://www.google.com/advanced_search')
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValueSelector)
      .click(lastUpdateDropdownOpenerSelector)
      .click(lastUpdateDropdownValue)
      .saveScreenshot('tests_output/google.png')
      .click(submitButtonSelector)


  }
}