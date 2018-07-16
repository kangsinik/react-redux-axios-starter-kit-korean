define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var XPATH_PARA_TITLE = "//p/span[contains(text(),'EPS')]";
	var XPATH_YES_BUTTON = "//button/div/span[contains(text(),'Yes')]";

	registerSuite({
		name: 'plumber',
		'login': function () {
			return this.remote
				.get(consts.url)
                .setFindTimeout(5000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('login-01', buffer); })
								.sleep(1000)
                .findByName('username')
                    .click()
                    .type('apiadmin')
                    .end()
				.findByName('password')
					.click()
					.type('apiadmin0')
					.end()
				.findByName('username')
					.click()
					.end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('login-02', buffer); })
				.findById('loginButton')
                    .click()
                    .end()
										.sleep(1000)
				.findById('loginGo')
				   					.click()
										.end()
										.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('login-03', buffer); })
                // .findByTagName('span')
								.findByXpath(XPATH_PARA_TITLE)
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'EPS')
                })
								.end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('login-04', buffer); })
				;
		}
	});
});
