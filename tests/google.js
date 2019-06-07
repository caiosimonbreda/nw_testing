module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {

    //search terms
    const mainQueryInputSelector = 'input[name="as_q"]';
    const mainQuery = 'Elon Musk';

    const page = browser.page.googleAdvancedSearch();

    const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const resultsPageLanguageSelector = '[aria-label = "Search Italian pages"]';
    const resultsPagelastUpdateSelector = '[aria-label = "Past month"]';

    page
      .navigate()
      .setValue('@mainQueryInput', mainQuery)

      //.click(languageDropdownOpenerSelector)
      //.click(languageDropdownValueSelector)
      .selectFilter('@languageDropdown', 'lang_it')
      .selectFilter('@lastUpdateDropdown', 'm')

      //.perform(() => { debugger; })

      .search();

    browser
      .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
      .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
      .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

      .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in query input')
      .assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian')
      .assert.containsText(resultsPagelastUpdateSelector, 'Past month', 'UI: Time period is set to last month')

      .saveScreenshot('tests_output/google.png');

  }
};