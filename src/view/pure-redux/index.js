import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, bindActionCreators } from 'redux';

function run() {
  // Store initial state
  const initialState = { count: 0 };

  // reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "PLUS_ONE":
        return { count: state.count + 1 }; // 不能直接处理state+1 应该整个对象return出去否则redux监控不到相应变化
      case "MINUS_ONE":
        return { count: state.count -1 };
      case "CUSTOM_ADD":
        return {
          count: state.count + action.payload.count
        };
      default:
        break;      
    }
    return state;
  }

  // reducer
  const todos = (state = {}) => state;

  // create store
  const store = createStore(
    combineReducers({
      counter,
      todos
    })
  );

  // Action creator
  function plusOne() {
    // action
    return { type: "PLUS_ONE" };
  }

  function minusOne() {
    return { type: "MINUS_ONE" };
  }

  function customAdd(count) {
    return { type: "CUSTOM_ADD", payload: { count } };
  }

  plusOne = bindActionCreators(plusOne, store.dispatch)

  store.subscribe(() => console.log(store.getState().counter));
  // store.dispatch(plusOne());
  plusOne();
  store.dispatch(minusOne());
  store.dispatch(customAdd(5));
}

function App() {
  return (
    <div>
      <button onClick={run}>Run</button>
      <p>* 请打开控制台享用</p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)