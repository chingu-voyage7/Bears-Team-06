import React, { Component, Fragment } from "react";
import Container from "./Container/Container";
import Charts from "../Charts/Charts";
import Grid from "@material-ui/core/Grid";
import Header from "../common/Header/Header";
import StockTable from "../StockTable/StockTable";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchDashboard } from "../../store/actions/dashboard/dashboard";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const columns = ["Company Name", "Low", "High", "% Change", "Today"];
//This is the main dashboard component
class Dashboard extends Component {
  //Pass different components to container from here with props as children
  componentDidMount = () => {
    this.fetchDashboardItems();
  };

  componentDidUpdate = (prevProps, prevState) => {
    this.fetchDashboardItems();
  };

  fetchDashboardItems = () => {
    if (this.props.profile.authenticated && !this.props.dashboard.fetched) {
      this.props.fetchDashboard(this.props.profile.companies);
    }
  };
  render() {
    let charts_size = { xs: 12, sm: 12, md: 8, lg: 8, xl: 6 };
    let table_size = { xs: 12, sm: 12, md: 8, lg: 8, xl: 6 };
    let spinnerColor = "#fff";
    if (this.props.settings.theme === "light") {
      spinnerColor = "#7289da";
    }
    if (!this.props.dashboard.fetched) {
      return (
        <div className="Dashboard">
          <Header />
          <div className="Dashboard__spinner">
            <ClipLoader
              css={override}
              sizeUnit={"px"}
              size={45}
              color={spinnerColor}
              loading={!this.props.dashboard.fetched}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="Dashboard">
        <Header />
        <Grid container spacing={16}>
          <Container children={<Charts />} size={charts_size} />
          <Container
            children={
              <StockTable columns={columns} data={this.props.dashboard.table} />
            }
            size={table_size}
          />
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  dashboard: state.dashboard,
  settings: state.settings,
});

export default connect(
  mapStateToProps,
  { fetchDashboard },
)(Dashboard);
