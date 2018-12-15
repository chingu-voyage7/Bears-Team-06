import React, { Component } from "react";
import Container from "./Container/Container";
import Charts from "../Charts/Charts";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Container children={<Charts />} />
      </div>
    );
  }
}

export default Dashboard;
