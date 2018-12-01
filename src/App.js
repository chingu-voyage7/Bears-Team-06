import React, { Component } from "react";
import { Route } from "react-router-dom";
import GroupChat from "./components/GroupChat/GroupChat";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/group-chat/:name" component={GroupChat} />
      </div>
    );
  }
}

export default App;
