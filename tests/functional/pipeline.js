// reference : http://chaijs.com/api/assert
define([
	'intern!object',
	'intern/chai!assert',
	'./consts'
], function (registerSuite, assert, consts) {

	var pipelineName = 'Auto_test_pipeline_name_5';

	var XPATH_SUBMIT_BUTTON = "//button[@type='submit']";

    registerSuite({
      name: 'EPS',
      'pipeline': function () {
				return this.remote
					.get(consts.url).setFindTimeout(5000)

					.findByXpath("//a[@href='#/pipelineView']")
						.click()
						.end()
					.sleep(2000) // avoid this [ stale element reference: element is not attached to the page document ]

// Pipeline List
				// .findByTagName('h1')
				// .getVisibleText()
				// .then(function (text) {
				// 	assert.strictEqual(text, 'Jenkins Pipeline Management')
				// })
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-01-list', buffer) })
				.end()

// Move Pipeline Create
				.findById('pipeline_add_button').click().end()

// Pipeline Info.
				.findById('selectDeployTypeBtn').click().end().sleep(500)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-go-create', buffer) })
				.findByName('name').click().type(pipelineName).end().sleep(500)
				.findByName('nodeId').click().end().sleep(500)
				.findById('nodeId_JENKINS_9120').click().end().sleep(500)
				.findByName('configGitlabId').click().end().sleep(500)
				.findById('configGitlabId_GitlabMeta').click().end().sleep(500)
				.findByName('configGitlabBranchName').click().type('test2').end().sleep(500)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-02-regist', buffer) })
				.findById('next_0').click().end().sleep(500)
				// .findById('next_0').click().end().sleep(500)
				.end()

// Source Info.
				.findByName('artifactRepoType').click().end().sleep(500)
				.findById('GITLAB').click().end().sleep(500)
				.findByName('artifactRepoId').click().end().sleep(500)
				.findById('artifactRepoId_GitlabMeta').click().end().sleep(500)
				.findByName('artifactBranchName').click().type('1.0').end().sleep(500)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-03-regist', buffer) })
				.findById('next_1').click().end().sleep(500)
				// .findById('next_1').click().end().sleep(500)
				.end()

// Image Baking
				.findByName('dockerFromRegistryId').click().end().sleep(500)
				.findById('dockerFromRegistryId_SDS_REDII_URL').click().end().sleep(500)
				.findByName('dockerFromRepository').click().type('sds/tomcat').end().sleep(500)
				.findByName('dockerFromTag').click().type('8.0.32-jdk8-ubuntu14.04.3').end().sleep(500)
				.findByName('dockerTargetRegistryId').click().end().sleep(500)
				.findById('dockerTargetRegistryId_SDS_REDII_URL').click().end().sleep(500)
				.findByName('dockerTargetRepository').click().type('limitx/thumbs-up').end().sleep(500)
				.findByName('dockerTargetTag').click().type('1.0').end().sleep(500)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-04-regist', buffer) })
				.findById('next_2').click().end().sleep(500)
				// .findById('next_2').click().end().sleep(500)
				.end()

// Target Info.
				.findByName('dockerTargetServerId').click().end().sleep(500)
				.findById('dockerTargetServerId_local').click().end().sleep(500)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-05-regist', buffer) })
				.findById('next_3').click().end().sleep(500)
				.end()

// submit
				.findById('finalSubmit').click().end().sleep(500)
				.findById('confirmYes').click().end().sleep(500)

				.findByXpath("//td[text()='" + pipelineName + "']")
				.getVisibleText()
				.then(function (text) {
					assert.strictEqual(text, pipelineName)
				})
				.sleep(2000)
				.takeScreenshot().then(function (buffer) { consts.takeCapture('pipeline-06-regist', buffer) })
			}
    })
})
