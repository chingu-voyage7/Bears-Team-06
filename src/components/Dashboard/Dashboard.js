import React, { Component, Fragment } from "react";
import Container from "./Container/Container";
import Charts from "../Charts/Charts";
import Grid from "@material-ui/core/Grid";
import Header from "../common/Header/Header";
import StockTable from "../StockTable/StockTable";
const data = [
  ["AZ", 495, 96, 2140, 11],
  ["BZ", 100, -12, 11120, 11],
  ["XZ", 450, 40, 66063, 11],
  ["RZ", 305, 540, 1120, 11],
  ["TZ", 506, 50, -1055, 11],
  ["YZ", 103, -119, 24455, 11],
  ["GZ", 110, 12, 3636, 11],
];

const columns = ["Company Name", "Min", "Max", "Yesterday", "Today"];
//This is the main dashboard component
class Dashboard extends Component {
  //Pass different components to container from here with props as children
  render() {
    let charts_size = { xs: 12, sm: 12, md: 8, lg: 8, xl: 6 };
    let table_size = { xs: 12, sm: 12, md: 8, lg: 8, xl: 6 };
    return (
      <div className="Dashboard">
        <Header />
        <Grid container spacing={16}>
          <Container children={<Charts />} size={charts_size} />
          <Container
            children={<StockTable columns={columns} data={data} />}
            size={table_size}
          />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
