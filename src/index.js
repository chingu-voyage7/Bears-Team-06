import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers/reducers";
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Router>
    <Provider
      store={createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
      )}
    >
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
