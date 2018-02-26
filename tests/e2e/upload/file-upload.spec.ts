const path = require('path')

let uniqueString = () => {
  return 'Unique test string ' + (new Date).getTime()
}

let createInsightWithFile = (content, filePath) => {
  element(by.css('insight-create .input-textarea')).sendKeys(content)
  element(by.css('[data-test="file-upload"]')).click()
  element(by.css('file-uploader .file-input')).sendKeys(filePath)
  element(by.css('insight-create .btn-submit')).click()
}

describe('when uploading documents', () => {

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

  it('should allow a user to create an insight with a docx attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'Welcome to Word.docx'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with a doc attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'SampleDOCFile_5000kb.doc'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with an xls attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'SampleXLSFile_6800kb.xls'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with an xlsx attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'ExcelFile.xlsx'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with a pdf attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'PDF.pdf'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with a pptx attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'Performance.Out.pptx'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('insight-attachments .attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual(docName)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('[data-test="document-name"]').getText()).toEqual(docName)
  })

  it('should allow a user to create an insight with an mp3 attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'SampleAudio_0.7mb.mp3'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    let attachmentName = $('.attachments-container [data-test="document-name"]').getText()
    expect(attachmentName).toEqual('Audio attachment')

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('audio').isPresent()).toBe(true)
  })

  it('should allow a user to create an insight with an mp4 attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'SampleVideo_1280x720_5mb.mp4'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)

    let attachmentContainer = $('insight-attachments .attachments-container')
    expect(attachmentContainer.isPresent()).toBeFalsy()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('media-tile video').isPresent()).toBe(true)
  })

  it('should allow a user to create an insight with .mov attachment', () => {
    let timeStamp = uniqueString()
    let docName = 'sample mov.mov'
    let docPath = path.resolve(__dirname, '../../sample-files/' + docName)

    createInsightWithFile(timeStamp, docPath)

    element.all(by.css('.insights-list user-generated-content .user-content-container')).get(0).click()

    let attachmentContainer = $('insight-attachments .attachments-container')
    expect(attachmentContainer.isPresent()).toBeFalsy()
    expect($('[data-test="ugc-text"]').getText()).toEqual(timeStamp)
    expect($('media-tile video').isPresent()).toBe(true)
  })

})
