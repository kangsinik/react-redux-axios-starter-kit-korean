
define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var XPATH_SUBMIT_BUTTON = "//button[@type='submit']";
	var XPATH_YES_BUTTON = "//button/div/span[contains(text(),'Yes')]";
	var projectName = 'gray_project_name';
	var projectKey = 'gray_project_key';
	var projectNameEdited ='gray_project_name_edit';
	var projectMappingNodeId = '100';

	registerSuite({
  	name: 'plumber',

    'projectNodeMapping': function () {
			return this.remote
				.get(consts.url)
          .setFindTimeout(5000)
				// 상단메뉴에서 Project 선택( Project List View Test)
				.findByXpath("//a[@href='#/project']")
					.click()
					.end()
				.sleep(1000)
				// Project Detail Open
				.findByXpath("//td[text()='" + projectNameEdited + "']")
					.click().end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-01-projectDetail', buffer); })
				.findById('tabNode')
					.click()
					.end()
					.sleep(1000)
				.findById('openNodeListModal')
					.click()
					.end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-02-openNodeMappingModal', buffer); })
				.findByName('node')
					.click()
					.end()
					.sleep(500)
				.findById('101')
					.click()
					.end()
					.sleep(500)
				.findById('mappingSubmit')
					.click()
					.end()
					.sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1500)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-03-mappingNodeSuccess', buffer); })
				.findById('close')
					.click()
					.end()
					.sleep(1000)
					.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-04-projectListNodeCountCheck', buffer); })
				.findByXpath("//td[text()='" + projectNameEdited + "']")
					.click().end()
					.sleep(1000)
				.findById('101')
					.click()
					.end()
					.sleep(500)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(2000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-05-mappingNodeUnconnected', buffer); })
				.findById('close')
					.click()
					.end()
					.sleep(1000)
					.takeScreenshot().then( function (buffer) { consts.takeCapture('projectNodeMapping-06-projectListNodeCountCheck', buffer); })
				;
        }
    });
});
