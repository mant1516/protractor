// // it('should allow users to navigate to the toolkit page', () => {})
// // it('should allow users to download toolkit docs', () => {})
// // it('should allow users to email toolkit docs', () => {})


// var path = require('path');
// var downloadloc = path.join(__dirname, '../../documents/downloads');

// describe('navigation to the toolkit section', () => {

//   beforeAll(() => {
//     browser.waitForAngularEnabled(true)
//     browser.get('/login?localLogin=true')
//     $('#email').sendKeys('lvmh/mahantesh.shinagi@businessthreezero.com')
//     $('#password').sendKeys('123456')
//     $('.btn-submit').click()
//   })

//    beforeEach(() => {
//     $('[data-test=nav-live]').click()
//     expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/live')
//   })

//   // it('user should be able to navigate to toolkit page', () => {
   
//   //   element.all(by.css('[href="/insights/feed/documents"]')).click()
//   //   browser.wait(10000)
//   //   expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/documents')
//   // })

//   it('user should be able to download the file', () => {
   
//     element.all(by.css('[href="/insights/feed/documents"]')).click()
//     expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/documents')
//     element.all(by.className('placeholder')).click();
//     element.all(by.className('options')).get(0).click();
//     element.all(by.model("Download")).get(0).click();

//   })

// })