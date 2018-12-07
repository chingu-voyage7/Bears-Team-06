import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";

class Charts extends Component {
  componentDidMount() {
    this.props.charts.getCharts();
  }
  render() {
    const options = {
      title: "Age vs. Weight comparison",
      hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
      vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
      legend: "none",
    };
    let data = this.props.chart.data;
    console.log(data);
    return (
      <Chart
        chartType="LineChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    );
  }
}

const mapStateToProps = state => ({
  chart: state.charts,
});

const mapActionsToProps = dispatch => {
  return {
    charts: bindActionCreators(chartActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Charts);
