
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

    'projectUserMapping': function () {
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
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectUserMapping-01-projectDetail', buffer); })
				.findById('tabUser')
					.click()
					.end()
					.sleep(1000)
				.findById('openUserListModal')
					.click()
					.end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectUserMapping-02-openUserMappingModal', buffer); })
				.findByName('searchUser')
					.click()
					.type('kim')
					.end()
				.findByXpath("//table/thead/tr/th/div/input[@type='checkbox']")
					.click()
					.end()
					.sleep(1000)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectUserMapping-03-searchFilterAndCheckAll', buffer); })
				.findById('projectUserMappingSubmit')
					.click()
					.end()
					.sleep(1000)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1500)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectUserMapping-04-mappingUserSuccess', buffer); })
				.findById('8')
					.click()
					.end()
					.sleep(500)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1500)
				.takeScreenshot().then( function (buffer) { consts.takeCapture('projectUserMapping-05-mappingUserUnconnected', buffer); })
				.findById('2')
					.click()
					.end()
					.sleep(500)
				.findByXpath(XPATH_YES_BUTTON)
					.click().end().sleep(1500)
				.findById('close')
					.click()
					.end()
					.sleep(1000)
				.findByXpath("//td[text()='" + projectNameEdited + "']")
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
