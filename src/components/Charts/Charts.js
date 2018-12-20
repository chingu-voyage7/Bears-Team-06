import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";
import "./charts.scss";

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
    const options = {
      title: "Stock comparison",
      backgroundColor: "black",
      legend: { position: "top", textStyle: { color: "white", fontSize: 16 } },
      vAxis: {
        title: "Stocks",
        textStyle: { color: "white" },
        titleTextStyle: { color: "blue" },
      },
      hAxis: {
        title: "Time",
        textStyle: { color: "white" },
        titleTextStyle: { color: "blue" },
      },
    };
    return (
      <div className="charts">
        <Chart
          chartType={this.state.graphType}
          data={data}
          width={this.state.width}
          height={this.state.height}
          options={options}
          legendToggle
        />
      </div>
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
