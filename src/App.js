import React, { Component } from "react";
import { Route } from "react-router-dom";
import GroupChat from "./components/GroupChat/GroupChat";
import SampleComponent from "./components/SampleComponent/SampleComponent";
import StockTable from "./components/StockTable/StockTable";
import Charts from "./components/Charts/Charts";
import { connect } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";

// Sample data for StockTable
const data = [
  ["AZ", 495, 96, 2140],
  ["BZ", 100, -12, 11120],
  ["XZ", 450, 40, 66063],
  ["RZ", 305, 540, 1120],
  ["TZ", 506, 50, 1055],
  ["YZ", 103, -119, 24455],
  ["GZ", 110, 12, 3636],
];

const columns = ["Symbol", "Price", "% Change", "$ Volume"];

class App extends Component {
  render() {
    let themeClass = null;
    if (this.props.theme === "dark") themeClass = "ThemeDark";
    if (this.props.theme === "light") themeClass = "ThemeLight";

    return (
      <div className={themeClass}>
        <Route exact path="/group-chat/:name" component={GroupChat} />
        <Route exact path="/sample" component={SampleComponent} />
        <Route
          exact
          path="/table"
          component={() => <StockTable columns={columns} data={data} />}
        />
        <Route exact path="/charts" component={() => <Charts />} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
});
export default connect(mapStateToProps)(App);
