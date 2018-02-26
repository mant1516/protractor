let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsight = (content) => {
  $('insight-create .input-textarea').sendKeys(content)
  $('insight-create .btn-submit').click()
}

describe('for more cms insight detail', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(true)
    browser.get('/login?localLogin=true')
    $('#email').sendKeys('lvmh/mahantesh.shinagi@businessthreezero.com')
    $('#password').sendKeys('123456')
    $('.btn-submit').click()
  })

  it('should be allow a user to see more insight details', () => {
    element(by.name('search')).sendKeys('cms content')
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    expect($('[data-test="search-page-title"]').getText()).toEqual('Search Results...')

    let insightTitle = element.all(by.css('[data-test="insight-title"]')).get(0).getText()
    element.all(by.css('[data-test="insight-title"]')).get(0).click()

    let insightTitleInDetail = $('[data-test="insight-title"]').getText()
    expect(insightTitleInDetail).toEqual(insightTitle)
  })

})
