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

  it('user should be able share an insight', () => {
     let timeStamp = uniqueString()
     let shareInput = "@aaccount"
     createInsight(timeStamp)
     element.all(by.css('[data-test="share"]')).get(0).click();
    element.all(by.css('[data-test="share-input"]')).click().sendKeys(shareInput);
     element.all(by.className('profile')).get(0).click();
     element.all(by.css('[data-test="share-submit"]')).click();
     expect(element.all(by.className('notification-badge ng-tns-c10-1')).isDisplayed());

  })

   it('Notification count should be incresed when you recieve an insight', () => {
     let timeStamp = uniqueString()
     let shareInput = "@aaccount"
     createInsight(timeStamp)
     element.all(by.css('[data-test="share"]')).get(0).click();
     element.all(by.css('[data-test="share-input"]')).click().sendKeys(shareInput);
     element.all(by.className('profile')).get(0).click();
     element.all(by.css('[data-test="share-submit"]')).click();
     browser.refresh();
     element.all(by.className('nav navbar-nav')).click();
     let notifiicationName = element.all(by.className('notification-title')).get(0).getText();
     element.all(by.className('dropdown-menu pull-left collapse ng-trigger ng-trigger-fade')).get(0).click();
     expect(timeStamp).toContain(notifiicationName)
  })
    
})


