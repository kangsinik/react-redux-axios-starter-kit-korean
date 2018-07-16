define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var XPATH_SUBMIT_BUTTON = "//button[@type='submit']";
  var XPATH_YES_BUTTON = "//button/div/span[contains(text(),'Yes')]";
  var metadataName = 'test_metadata_subtype_alm';
	var metadataNameModified ='test_metadata_subtype_alm_modify';
	registerSuite({
		name: 'plumber',

		'metadata': function () {
			return this.remote
				.get(consts.url)
                .setFindTimeout(5000)
        .findByXpath("//a[@href='#/metadata']")
          .click()
          .end()
        .sleep(1000) // avoid this [ stale element reference: element is not attached to the page document ]
				// metadata management list
  			.takeScreenshot().then( function (buffer) { consts.takeCapture('metadata-01-list', buffer); })
        .findById('metadataAdd')
            .click()
            .end()
        .sleep(1500) // avoid this [ stale element reference: element is not attached to the page document ]
				.findByTagName('h3')
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, 'Metadata Register');
				}).end()
				// metadata register
				.takeScreenshot().then( function (buffer) { consts.takeCapture('metadata-02-regist', buffer); })
        .findByName('type')
            .click()
            .end()
        .findById('url')
            .click()
            .end()
				.sleep(1000)
        .findByName('subType')
            .click()
            .end()
			  .findById('ALM')
            .click()
            .end()
				.sleep(1000)
				.findByName('name')
					.click()
					.type('test_metadata_subtype_alm')
					.end()
				.findByName('url')
					.click()
					.type('http://70.70.169.144:9080/alm-jenkins-api')
					.end()
				.findByName('loginId')
					.click()
					.type('apiadmin')
					.end()
				.findByName('privateToken')
					.click()
					.type('xBQxUZRjBxXkztDzr8D9')
					.end()
				.findByName('description')
					.click()
					.type('test_metadata_description')
					.end()
				.findByName('privateToken')
					.click()
					.end()
				.findById('addSubmit')
					.click()
					.end()
				  .sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
						.click().end().sleep(2000)
				.findByXpath("//td[text()='" + metadataName + "']")
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, metadataName)
				})
				.sleep(2000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('metadata-03-regist', buffer); })
				.end()
  			 // metadata detail dialog
				.findByXpath("//td[text()='" + metadataName + "']")
					.click().end()
				.sleep(1500)
				.findByTagName('h3')
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, 'Metadata Detail');
				}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('metadata-04-detail', buffer); })
				// metadata detail modify
				.findById('toggleButton')
            .click()
            .end()
						.sleep(500)
				.findByName('name')
						.click()
						.type('_modify')
						.end()
				.findByName('description')
							.click()
							.end()
				.findById('modifySubmit')
						.click()
						.end()
					  .sleep(1000)
				// 안 넘어가네....
				.findByXpath(XPATH_YES_BUTTON)
						.click().end().sleep(2000)
				.findByXpath("//td[text()='" + metadataNameModified + "']")
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, metadataNameModified)
				}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('metadata-05-modify', buffer); })
				// metadata delete
				.findByXpath("//td[text()='" + metadataNameModified + "']")
					.click().end()
				.sleep(1500)
				.findById('toggleButton')
						.click()
						.end()
						.sleep(500)
				.findById('delete')
							.click()
							.end()
						  .sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
						.click().end().sleep(5000)
				// .takeScreenshot().then( function (buffer) { consts.takeCapture('login-02', buffer); })
				// .findById('loginButton')
        //             .click()
        //             .end()
				// .findById('loginGo')
				//    					.click()
				// 						.end()
				// .takeScreenshot().then( function (buffer) { consts.takeCapture('login-03', buffer); })
        //         .findByTagName('h1')
        //         .getVisibleText()
        //         .then(function (text) {
        //             assert.strictEqual(text, 'Plumber Home');
        //         })
				// .takeScreenshot().then( function (buffer) { consts.takeCapture('login-04', buffer); })
				;
		}
	});
});
