
define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var XPATH_SUBMIT_BUTTON = "//button[@type='submit']";
	var XPATH_YES_BUTTON = "//button/div/span[contains(text(),'Yes')]";
	var nodeName = 'gray_node_name';
	var nodeUrl = 'http://70.121.224.26:9110';
	var nodeAdminId = 'apiadmin';
	var nodeAdminPassword = 'apiadmin0';
	var nodeNameEdited ='gray_node_name_edit';

	registerSuite({
  	name: 'plumber',

    'node': function () {
			return this.remote
				.get(consts.url)
          .setFindTimeout(5000)
				// 상단메뉴에서 Node 선택( Node List View Test)
				.findByXpath("//a[@href='#/node']")
					.click()
					.end()
				.sleep(1000) // avoid this [ stale element reference: element is not attached to the page document ]
				.takeScreenshot().then( function (buffer) { consts.takeCapture('node-01-list', buffer); })
				// Node Create Test
				.findById('nodeAdd')
            .click()
            .end()
				.sleep(1500)
				.findByTagName('h3')
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, 'Node Register');
				}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('node-02-regist', buffer); })
				.findByName('name')
					.click()
					.type(nodeName)
					.end()
				.findByName('url')
					.click()
					.type(nodeUrl)
					.end()
				.findByName('adminId')
					.click()
					.type(nodeAdminId)
					.end()
				.findByName('adminPassword')
					.click()
					.type(nodeAdminPassword)
					.end()
				.findByName('useYn')
					.click()
					.end()
					.sleep(500)
				.findById('useYnYes')
					.click()
					.end()
					.sleep(500)
				.findByName('userAuthYn')
					.click()
					.end()
					.sleep(500)
				.findById('userAuthYnYes')
					.click()
					.end()
					.sleep(500)
				.findById('addSubmit')
					.click()
					.end()
					.sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1000)
				.findByXpath("//td[text()='" + nodeName + "']")
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, nodeName)
					})
					.sleep(2000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('node-03-registSuccess', buffer); })
					.end()
				// Node Detail View & Edit Test
				.findByXpath("//td[text()='" + nodeName + "']")
					.click().end()
					.sleep(1000)
				.findByTagName('h3')
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, 'Node Detail');
					}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('node-04-detail', buffer); })
				.findById('toggleButton')
	        .click()
	        .end()
					.sleep(500)
				.findByName('name')
					.click()
					.type('_edit')
					.end()
					.sleep(500)
				.findByName('useYn')
			    .click()
			    .end()
					.sleep(1000)
				.findById('useYnYes')
			    .click()
			    .end()
					.sleep(1000)
				.findById('editSubmit')
					.click()
					.end()
				  .sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1500)
				.findByXpath("//td[text()='" + nodeNameEdited + "']")
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, nodeNameEdited)
					}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('node-05-edit', buffer); })

				// Node Delete Test
				.findByXpath("//td[text()='" + nodeNameEdited + "']")
				 	.click()
				 	.end()
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
					.click()
					.end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-06-delete', buffer); })
				;
        }
    });
});
