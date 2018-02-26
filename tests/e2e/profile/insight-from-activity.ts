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

   it('user should be able view an activiity of their own and navigate from activity tab', () => {
     let timeStamp = uniqueString()
     let shareInput = "@aaccount"
     createInsight(timeStamp)
     element.all(by.css('[data-test="share"]')).get(0).click();
    element.all(by.css('[data-test="share-input"]')).click().sendKeys(shareInput);
     element.all(by.className('profile')).get(0).click();
     element.all(by.css('[data-test="share-submit"]')).click();
     element.all(by.className('nav-avatar')).click();
    element.all(by.css('[data-test="activity-tab"]')).click();
     browser.refresh();
     element.all(by.css('[data-test="activity-tab"]')).click();
     element.all(by.className('activity-title')).get(0).click();
     expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)

  })

   it('user should be able view an help text ', () => {
     
     element.all(by.className('nav-avatar')).click();
     element.all(by.css('[data-test="help-tab"]')).click();
     expect(element.all(by.className('collapse profile-child-content ng-trigger ng-trigger-fade in')).isDisplayed());

  })


})