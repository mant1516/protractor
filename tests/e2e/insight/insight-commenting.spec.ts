let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsight = (content) => {
  element(by.css('insight-create .input-textarea')).sendKeys(content)
  element(by.css('insight-create .btn-submit')).click()
}

describe('when commenting on an insight', () => {

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

  it('should allow a user to make a comment comment', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)
    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()

    $('react-tile [data-test="react-input"]').sendKeys(timeStamp)
    $('react-tile .btn-submit').click()

    let firstComment = element.all(by.css('comment-list [data-test="comment-text"]')).get(0).getText()
    expect(firstComment).toEqual(timeStamp)
  })

  it('should allow a user to reply to a comment', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)
    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()

    $('react-tile [data-test=react-input]').sendKeys('a comment')
    $('react-tile .btn-submit').click()

    $('comment-list .comment-reply').click()
    $('[data-test="react-wrapper"] [data-test=react-input]').sendKeys(timeStamp)
    $('[data-test="react-wrapper"] .btn-submit').click()

    let firstCommentReply = element.all(by.css('comment-list [data-test="comment-replies"] [data-test="comment-text"]')).get(0).getText()
    expect(firstCommentReply).toEqual(timeStamp)
  })

  it('should increase the comment count by one after a user comments', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()

    $('react-tile [data-test="react-input"]').sendKeys(timeStamp)
    $('react-tile .btn-submit').click()

    let commentCount = $('insight-footer [data-test="comment-count"]').getText()
    expect(commentCount).toEqual('(1)')
  })

  it('should increase both the comment count and the reply count by one after a user comments', () => {
    let timeStamp = uniqueString()
    createInsight(timeStamp)
    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()

    $('react-tile [data-test="react-input"]').sendKeys('a comment')
    $('react-tile .btn-submit').click()

    $('comment-list .comment-reply').click()
    $('[data-test="react-wrapper"] [data-test="react-input"]').sendKeys(timeStamp)
    $('[data-test="react-wrapper"] .btn-submit').click()

    let commentCount = $('insight-footer [data-test="comment-count"]').getText()
    let replyCount = $('.comment-reply [data-test="reply-count"]').getText()

    expect(commentCount).toEqual('(2)')
    expect(replyCount).toEqual('(1)')
  })
})
