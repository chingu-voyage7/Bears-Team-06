import React, { Component } from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { connect } from "react-redux";
import PeopleItem from "../common/PeopleItem/PeopleItem";
import Header from "../common/Header/Header";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ShowPeople extends Component {
  state = {
    loading: true,
    fetched: false,
    peoples: [],
    error: "",
  };

  componentDidMount = async () => {
    try {
      const searchText = this.props.match.params.searchText;
      const res = await axios.get(`/api/people/find/${searchText}`);
      console.log("From find people", res.data);
      this.setState({ peoples: res.data, loading: false, fetched: true });
    } catch (err) {
      console.log(err);
      this.setState({
        error: "Oops some error occured please try again later",
        loading: false,
        fetched: true,
      });
    }
  };

  renderPeopleItems = () => {
    console.log("Render People Items have benn called", this.state.peoples);
    if (this.state.peoples.length > 0) {
      return this.state.peoples.map(people => (
        <div className="col-md-3">
          {" "}
          <PeopleItem
            name={people.local.username}
            image={people.userImage}
            id={people._id}
            following={people.companies.length}
          />{" "}
        </div>
      ));
    } else {
      if (!this.state.loading && this.state.fetched) {
        return (
          <p className="ShowPeople__no-friend-message">
            Your search did not match any results
          </p>
        );
      }
      return null;
    }
  };

  render() {
    let spinnerColor = "#fff";
    if (this.props.settings.theme === "light") {
      spinnerColor = "#7289da";
    }
    let spinner = (
      <div className="ShowPeople--spinner">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={50}
          color={spinnerColor}
          loading={this.state.uploading}
        />
      </div>
    );

    return (
      <div className="ShowPeople">
        <Header />
        {this.state.loading && spinner}
        <div className="container ShowPeople__contents">
          <div className="row ShowPeople__row">{this.renderPeopleItems()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(ShowPeople);
