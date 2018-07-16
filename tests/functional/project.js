
define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var XPATH_SUBMIT_BUTTON = "//button[@type='submit']";
	var XPATH_YES_BUTTON = "//button/div/span[contains(text(),'Yes')]";
	var projectName = 'gray_project_name';
	var projectKey = 'GRAYPJTKEY';
	var projectNameEdited ='gray_project_name_edit';
	var projectMappingNodeId = '100';

	registerSuite({
  	name: 'plumber',

    'project': function () {
			return this.remote
				.get(consts.url)
          .setFindTimeout(5000)
				// 상단메뉴에서 Project 선택( Project List View Test)
				.findByXpath("//a[@href='#/project']")
					.click()
					.end()
				.sleep(1000) // avoid this [ stale element reference: element is not attached to the page document ]
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-01-list', buffer); })
				// Project Create Test
				.findById('projectAdd')
            .click()
            .end()
				.sleep(1500)
				.findByTagName('h3')
				.getVisibleText()
				.then(function (text){
					assert.strictEqual(text, 'Project Register');
				}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-02-regist', buffer); })
				.findByName('type')
          .click()
          .end()
				.sleep(1000)
				.findById('CD')
	          .click()
	          .end()
				.sleep(1000)
				.findByName('name')
					.click()
					.type(projectName)
					.end()
				.findByName('almKey')
					.click()
					.type(projectKey)
					.end()
				.findByName('changeYn')
	        .click()
	        .end()
					.sleep(1000)
				.findById('dialogChangeY')
		      .click()
		      .end()
					.sleep(1000)
				.findById('addSubmit')
					.click()
					.end()
					.sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1000)
				.findByXpath("//td[text()='" + projectName + "']")
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, projectName)
					})
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-03-regist', buffer); })
					.end()
				// Project Detail View & Edit Test
				.findByXpath("//td[text()='" + projectName + "']")
					.click().end()
					.sleep(1000)
				.findByTagName('h3')
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, 'Project Detail');
					}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-04-detail', buffer); })
				.findById('toggleButton')
	        .click()
	        .end()
					.sleep(500)
				.findByName('name')
					.click()
					.type('_edit')
					.end()
					.sleep(500)
				.findByName('changeYn')
		      .click()
		      .end()
					.sleep(1000)
				.findById('dialogChangeY')
			    .click()
			    .end()
					.sleep(1000)
				.findById('editSubmit')
					.click()
					.end()
				  .sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1000)
				.findByXpath("//td[text()='" + projectNameEdited + "']")
					.getVisibleText()
					.then(function (text){
						assert.strictEqual(text, projectNameEdited)
					}).end()
				.takeScreenshot().then( function (buffer) { consts.takeCapture('project-05-edit', buffer); })
				;
        }
    });
});
