exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    // './insight/insight-cms.spec.ts'
    // './insight/insight-commenting.spec.ts'
    // './insight/insight-ugc-create.spec.ts'
    // './insight/insight-ugc-detail.spec.ts'
    //'./upload/file-upload.spec.ts'
    // './insight/**'
    //'./profile/user-profile-navigate.spec.ts'
    //'./documents/toolkit-list.spec.ts'
    //'./share/share.spec.ts'
    //'./profile/save-bookmark.spec.ts'
      './profile/insight-from-activity.ts'

      
  ],
  baseUrl: 'http://localhost:3000',
  capabilities : {
    browserName: 'chrome',
    platform: 'any',
    version : 'any',
    'chromeOptions': {
     prefs: {
       download: {
         'prompt_for_download': false,
         'directory_upgrade': true,
         'default_directory': '../../documents/downloads'
                  }
             }
     }
  },
  useAllAngular2AppRoots: true,
  allScriptsTimeout: 10000
};
