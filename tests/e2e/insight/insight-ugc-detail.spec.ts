let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsight = (content) => {
  $('insight-create .input-textarea').sendKeys(content)
  $('insight-create .btn-submit').click()
}

describe('for more ugc insight detail', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(true)
    browser.get('/login?localLogin=true')
    $('#email').sendKeys('lvmh/mahantesh.shinagi@businessthreezero.com')
    $('#password').sendKeys('123456')
    $('.btn-submit').click()
  })

  beforeEach(() => {
    $('[data-test="nav-live"]').click()
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/live')
  })

  it('should allow a user to see an insight in full', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
  })

  it('should allow a user to to return to the insight list', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)

    element.all(by.css('user-generated-content .user-content-container')).get(0).click()
    $('article .insight-close').click()

    let firstInsightContent = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
    expect(firstInsightContent).toEqual(timeStamp)
  })
})
