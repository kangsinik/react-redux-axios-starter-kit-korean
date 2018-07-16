import { connect } from 'react-redux'
import { increment, doubleAsync, decrement } from '../actions'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Counter from 'components/Counter'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  increment: () => increment(1),
  doubleAsync,
  decrement: () => decrement(1)
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

// connect 전역 redux store의 상태를 받아서 컴포넌트가 필요로 하는 props를 반환.
// root reducer에서 필요한 state 와 함수형 PROPS를 App 컴포넌트에 제공하고 dispatch를 전역변수로 (prop) 제공!
export default connect(
  /* mapStateToProps(state, [ownProps]): (Function) 전역  Redux store 의 state 를 컴포넌트의 props 에 매핑.
  ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근가능 */
  mapStateToProps,
   /* mapDispatchToProps(dispatch, [ownProps]): (Function or Object)  컴포넌트의 특정 함수형 props 를 실행 했을 때,
  개발자가 지정한 action을 dispatch 하도록 설정. ownProps의 용도는 위 인수와 동일 */
  mapActionCreators
)(Counter)
