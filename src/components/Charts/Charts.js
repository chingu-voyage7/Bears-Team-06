import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";
import { options_dark } from "./themes/charts-options-dark";

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

    let options = {
      title: "Stock comparison",
      chartArea: {
        // leave room for y-axis labels
        width: "94%",
      },
      legend: {
        position: "top",
        textStyle: { color: "rgb(34,37,42)", fontSize: 16 },
      },
      vAxis: {
        title: "Stocks",
      },
      hAxis: {
        title: "Time",
      },
    };

    if (this.props.theme == "dark") {
      options = options_dark;
    }
    return (
      <div className="Charts">
        <div className="Charts__header">
          <i className="fas fa-chart-line" />
          <span>Charts</span>
        </div>
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
  theme: state.settings.theme,
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
