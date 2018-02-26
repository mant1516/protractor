let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsight = (content) => {
  $('insight-create .input-textarea').sendKeys(content)
  $('insight-create .btn-submit').click()
}

describe('on the insight list', () => {

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

  it('should allow users to create text insights', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)

    let firstInsightContent = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
    expect(firstInsightContent).toEqual(timeStamp)
  })

  it('should allow users to delete their insights', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)
    createInsight('just a string')

    element.all(by.css('user-generated-content')).get(0).element(by.css('[data-test="delete"]')).click()

    let firstInsightContent = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
    expect(firstInsightContent).toEqual(timeStamp)
  })

  it('should allow users to create text insights', () => {
    let timeStamp = uniqueString()
    let timeStamp2 = uniqueString()
    createInsight(timeStamp)

    element.all(by.css('user-generated-content')).get(0).element(by.css('[data-test="edit"]')).click()
    element.all(by.css('user-generated-content')).get(0).element(by.css('.input-textarea')).sendKeys(timeStamp2)
    element.all(by.css('user-generated-content')).get(0).element(by.css('.btn-submit')).click()

    let firstInsightContent = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
    expect(firstInsightContent).toEqual(timeStamp + timeStamp2)
  })

  it('should allow users to cancel the editing of their insight', () => {
    let timeStamp = uniqueString()
    let timeStamp2 = uniqueString()
    createInsight(timeStamp)

    element.all(by.css('user-generated-content')).get(0).element(by.css('[data-test="edit"]')).click()
    element.all(by.css('user-generated-content')).get(0).element(by.css('.input-textarea')).sendKeys(timeStamp2)
    element.all(by.css('user-generated-content')).get(0).element(by.css('[data-test="cancel-edit"]')).click()

    let firstInsightContent = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
    expect(firstInsightContent).toEqual(timeStamp)
  })
})
