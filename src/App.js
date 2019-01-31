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
import { withRouter } from "react-router-dom";
import Register from "./components/Register/Register";
import PublicProfile from "./components/PublicProfile/PublicProfile";
import ShowPeople from "./components/ShowPeople/ShowPeople";

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
        <Route exact path="/group-chat" component={GroupChat} />
        <Route exact path="/sample" component={SampleComponent} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/news" component={News} />
        <Route exact path="/findpeople" component={FindPeople} />
        <Route exact path="/showpeople/:searchText" component={ShowPeople} />
        <Route exact path="/chat/:name" component={PrivateChat} />
        <Route exact path="/edit-profile" component={EditProfilePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/profile/:id" component={PublicProfile} />
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
