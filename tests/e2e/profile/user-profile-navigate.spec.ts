const path = require('path')

describe('navigation to the user profile section', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(true)
    browser.get('/login?localLogin=true')
    $('#email').sendKeys('lvmh/mahantesh.shinagi@businessthreezero.com')
    $('#password').sendKeys('123456')
    $('.btn-submit').click()
  })

   beforeEach(() => {
    $('[data-test=nav-live]').click()
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/insights/feed/live')
  })

  it('user should be able to navigate to profile', () => {
   
    element.all(by.className('nav-avatar')).click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/profile')
  })

   it('user should be able change the profile image', () => {
    let imgName = 'profileimage.jpg'
    let imgPath = path.resolve(__dirname, '../../sample-files/' + imgName)

      element.all(by.className('nav-avatar')).click();
      element.all(by.className('edit-profile-btn')).click();
      element.all(by.className('edit-profile-avatar')).click();
      element(by.css('file-uploader .file-input')).sendKeys(imgPath)
      element.all(by.className('edit-profile-btn')).click();

   })

   it('user should be able change the role image', () => {
     let inputrole ="Role is roling";
      element.all(by.className('nav-avatar')).click();
      element.all(by.className('edit-profile-btn')).click();
      element.all(by.id('Test-Role')).clear();
      element.all(by.id('Test-Role')).sendKeys(inputrole);
      element.all(by.className('edit-profile-btn')).click();
      
   })

    it('user should be able change the location ', () => {
  
      element.all(by.className('nav-avatar')).click();
      element.all(by.className('edit-profile-btn')).click();
      element.all(by.id('Test-location')).clear();
      element.all(by.id('Test-location')).sendKeys("B30 Location ")
      element.all(by.className('edit-profile-btn')).click();

   })

    it('user should be able change the About Me ', () => {
  
      element.all(by.className('nav-avatar')).click();
      element.all(by.className('edit-profile-btn')).click();
      element.all(by.id('Test-AboutMe')).clear();
      element.all(by.id('Test-AboutMe')).sendKeys("About me")
      element.all(by.className('edit-profile-btn')).click();

   })


})