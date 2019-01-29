import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import StockTable from "../StockTable/StockTable";
import SimpleModal from "./SimpleModal";
import Header from "../common/Header/Header";
import ProfileLeftNav from "./ProfileLeftNav/ProfileLeftNav";
import ProfileMainArea from "./ProfileMainArea/ProfileMainArea";
import PublicProfileContext from "./_publicProfileContext";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class PublicProfile extends Component {
  state = {
    fetched: false,
    fetchErr: false,
    username: "",
    userImage: "",
    companies: [],
  };
  openModal = () => {
    console.log("Clicked on open modal");
  };

  fetchProfile = async () => {
    try {
      const id = this.props.match.params.id;
      const res = await axios.get(`/api/people/${id}`);
      this.setPublicProfileData(res.data);
      this.setState({ fetched: true });
    } catch (error) {
      console.log(error);
      if (error.response) console.log(error.response);
      this.setState({ fetchErr: true });
    }
  };

  setPublicProfileData = data => {
    console.log("Set Public profile data", data);
    this.setState({
      username: data.local.username,
      userImage: data.userImage,
      companies: data.companies,
    });
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  render() {
    const contextValue = {
      username: this.state.username,
      userImage: this.state.userImage,
      companies: this.state.companies,
    };
    let spinnerColor = "#fff";
    if (this.props.settings.theme === "light") {
      spinnerColor = "#7289da";
    }

    if (this.state.fetchErr) {
      return (
        <div className="PublicProfile">
          <Header />
          <div className="PublicProfile__error-message">
            Oops We are unable to retrieve the profile.Maybe there is a network
            error or the user does not exist
          </div>
        </div>
      );
    }

    if (!this.state.fetched) {
      return (
        <div className="PublicProfile">
          <Header />
          <div className="PublicProfile__loading">
            <ClipLoader
              css={override}
              sizeUnit={"px"}
              size={55}
              color={spinnerColor}
              loading={this.context.companySearching}
            />
          </div>
        </div>
      );
    }
    return (
      <PublicProfileContext.Provider value={contextValue}>
        <div className="PublicProfile">
          <Header />
          <div className="PublicProfile__main-wrapper">
            <ProfileLeftNav />
            <ProfileMainArea />
          </div>
        </div>
      </PublicProfileContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});
export default connect(mapStateToProps)(PublicProfile);
