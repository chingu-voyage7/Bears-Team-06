import React, { Component } from "react";
import Container from "./Container/Container";
import Charts from "../Charts/Charts";
import Grid from "@material-ui/core/Grid";

//This is the main dashboard component
class Dashboard extends Component {
  //Pass different components to container from here with props as children
  render() {
    let charts_size = { xs: 12, sm: 12, md: 6, lg: 4, xl: 4 };
    return (
      <div className="dashboard">
        <Grid container spacing={16}>
          <Container children={<Charts />} size={charts_size} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
