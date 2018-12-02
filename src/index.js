import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers/reducers";
import chatgroup from "./redux-middlewares/sockets/chatgroup";
import * as types from "./store/types";
import socket from "./services/socket";
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Router>
    <Provider
      store={createStore(
        reducers,
        composeEnhancers(
          applyMiddleware(
            reduxThunk,
            //All below middleware are for chat functionality
            chatgroup(socket, types)
          )
        )
      )}
    >
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
