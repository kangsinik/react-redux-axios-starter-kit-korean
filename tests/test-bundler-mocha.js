// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import 'babel-polyfill'
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'
// add by lepffm
import { shallow } from 'enzyme'
import React from 'react'
import { bindActionCreators } from 'redux'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

// add by lepffm
global.shallow = shallow
global.React = React
global.bindActionCreators = bindActionCreators
