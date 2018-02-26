onst path = require('path')

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

  it('user should be able search for an insight', () => {
     let timeStamp = uniqueString()
     createInsight(timeStamp)
     element.all(by.css('[data-test="search-bar"]')).click().clear();
     element.all(by.css('[data-test="search-bar"]')).sendKeys(timeStamp);
     expect(element.all(by.css('[data-test="search-page-title"]')).isDisplayed());

  })

  it('user should be able open search results', () => {
     let timeStamp = uniqueString()
     createInsight(timeStamp)
     element.all(by.css('[data-test="search-bar"]')).click().clear();
     element.all(by.css('[data-test="search-bar"]')).sendKeys(timeStamp);
     
     element(timeStamp).isDisplayed().then(function(result) {
    if ( result ) {
        element.all(by.css(''))
    } else {
        //Whatever if it is false (not displayed)
    }
});

  })



})
