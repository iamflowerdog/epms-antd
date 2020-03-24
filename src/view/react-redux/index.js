import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

// Store initial state
const initialState = { count: 0 };

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return { count: state.count + action.payload.count };
    default:
      break;
  }
  return state;
};

const store = createStore(counter);

// Action creator
function plusOne() {
  // action
  return { type: "PLUS_ONE" };
}

function minusOne() {
  return { type: "MINUS_ONE" };
}

class Counter extends React.Component {
  render() {
    const { count, plusOne, minusOne } = this.props; // 通过react-redux绑定
    return (
      <div className="counter">
        <button onClick={minusOne}>-</button>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {count}
        </span>
        <button onClick={plusOne}>+</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne, minusOne }, dispatch)
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class CounterSample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    )
  }
}

ReactDOM.render(
  <CounterSample/>,
  document.getElementById('root')
)