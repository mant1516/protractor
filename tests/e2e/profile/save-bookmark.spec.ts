const path = require('path')

let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsight = (content) => {
  $('insight-create .input-textarea').sendKeys(content)
  $('insight-create .btn-submit').click()
}

describe('Share an insight ', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(true)
    browser.get('/login?localLogin=true')
    $('#email').sendKeys('lvmh/mahanteshs16@yahoo.com')
    $('#password').sendKeys('123456')
    $('.btn-submit').click()
  })

   beforeEach(() => {
    $('[data-test=nav-live]').click()
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/live')
  })
   
  it('user should be able save an insight', () => {
     let timeStamp = uniqueString()
     createInsight(timeStamp)
     let firstInsight = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
     element.all(by.css('[data-test="save"]')).get(0).click();
     element.all(by.className('nav-avatar')).click();
     element.all(by.css('[data-test="bookmark-icon"]')).click();
     let savedInsight = (element.all(by.className('bookmark-title')).getText(0));
     expect(savedInsight).toContain(firstInsight)
  })

   it('user should be able unsave an insight', () => {
     let timeStamp = uniqueString()
     createInsight(timeStamp)
     let firstInsight = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
     element.all(by.css('[data-test="save"]')).get(0).click();
     element.all(by.className('nav-avatar')).click();
     element.all(by.css('[data-test="bookmark-icon"]')).click();
      let savedInsight = (element.all(by.className('bookmark-title')).getText(0));
     element.all(by.className('bookmark-remove')).get(0).click();
     element.all(by.className('bookmark-remove')).get(0).click();
     expect(element.all(by.className('No insights have been saved!')).isDisplayed());

})
    
it('user should be able open an saved insight', () => {
     let timeStamp = uniqueString()
     createInsight(timeStamp)
     let firstInsight = element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).getText()
     element.all(by.css('[data-test="save"]')).get(0).click();
     element.all(by.className('nav-avatar')).click();
     element.all(by.css('[data-test="bookmark-icon"]')).click();
      let savedInsight = (element.all(by.className('bookmark-title')).getText(0));
      element.all(by.className('bookmark-title')).get(0).click();
      expect(firstInsight).toContain(savedInsight)
      element.all(by.className('nav-avatar')).click();
     element.all(by.css('[data-test="bookmark-icon"]')).click();
     element.all(by.className('bookmark-remove')).get(0).click();
})

})