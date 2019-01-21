import React, { Component } from "react";
import Container from "./Container/Container";
import Charts from "../Charts/Charts";
import StockTable from "../StockTable/StockTable";
import Grid from "@material-ui/core/Grid";
import "./dashboard.scss";
//This is the main dashboard component
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

class Dashboard extends Component {
  //Pass different components to container from here with props as children
  render() {
    let charts_size = { xs: 12, sm: 12, md: 8, lg: 8, xl: 6 };
    return (
      <div className="dashboard">
        <h1 className="text-center title">
          Your personal dashboard
        </h1>
        <Grid container spacing={16}>
          <Container children={<Charts />} size={charts_size} />
          <Container children={<StockTable columns={columns} data={data} />} size={charts_size} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
