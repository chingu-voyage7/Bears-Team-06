import React, { Component } from "react";
import { Route } from "react-router-dom";
import GroupChat from "./components/GroupChat/GroupChat";
import SampleComponent from "./components/SampleComponent/SampleComponent";

import { connect } from "react-redux";

class App extends Component {
  render() {
    let themeClass = null;
    if (this.props.theme === "dark") themeClass = "ThemeDark";
    if (this.props.theme === "light") themeClass = "ThemeLight";

    return (
      <div className={themeClass}>
        <Route exact path="/group-chat/:name" component={GroupChat} />
        <Route exact path="/sample" component={SampleComponent} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme
});
export default connect(mapStateToProps)(App);
