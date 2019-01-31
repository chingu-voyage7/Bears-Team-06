import React, { Component } from "react";
import { Route } from "react-router-dom";
import GroupChat from "./components/GroupChat/GroupChat";
import SampleComponent from "./components/SampleComponent/SampleComponent";
import StockTable from "./components/StockTable/StockTable";
import Charts from "./components/Charts/Charts";
import { connect } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import EditProfilePage from "./components/EditProfilePage/EditProfilePage";
import { fetchUser, getLastMessages } from "./store/actions/profile/profile";
import Landing from "./components/Landing/Landing";
import News from "./components/News/News";
import FindPeople from "./components/FindPeople/FindPeople";
import PrivateChat from "./components/PrivateChat/PrivateChat";
import Login from "./components/Login/Login";
import { withRouter, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import PublicProfile from "./components/PublicProfile/PublicProfile";
import ShowPeople from "./components/ShowPeople/ShowPeople";
import PrivateRoute from "./hoc/PrivateRoute";

// Sample data for StockTable

class App extends Component {
  componentDidMount = async () => {
    await this.props.fetchUser();
    this.props.getLastMessages();
  };

  render() {
    let themeClass = null;
    if (this.props.theme === "dark") themeClass = "ThemeDark";
    if (this.props.theme === "light") themeClass = "ThemeLight";

    return (
      <div className={themeClass}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Switch>
          <PrivateRoute exact path="/group-chat" component={GroupChat} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/news" component={News} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/findpeople" component={FindPeople} />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/showpeople/:searchText"
            component={ShowPeople}
            RouteKey={true}
          />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/chat/:name"
            component={PrivateChat}
            RouteKey={true}
          />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/edit-profile"
            component={EditProfilePage}
          />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <PrivateRoute
            path="/profile/:id"
            component={PublicProfile}
            RouteKey={true}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
});
export default withRouter(
  connect(
    mapStateToProps,
    { fetchUser, getLastMessages },
  )(App),
);
