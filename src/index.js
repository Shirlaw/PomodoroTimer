import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import pomodoroApp from "./reducers/pomodoroApp";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";

let store = createStore(pomodoroApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <PomodoroTimer />
  </Provider>,
  document.getElementById("app")
);
