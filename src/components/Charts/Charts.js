import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphType: "LineChart",
      width: "100%",
      height: "400px",
    };
  }
  componentDidMount() {
    this.props.charts.getCharts();
  }
  render() {
    let data = this.props.chart.data;
    console.log(data);
    return (
      <Chart
        chartType={this.state.graphType}
        data={data}
        width={this.state.width}
        height={this.state.height}
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
