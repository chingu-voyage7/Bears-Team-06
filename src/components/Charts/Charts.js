import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";
import { options_dark } from "./themes/charts-options-dark";
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

    let options = {
      title: "Stock comparison",
      legend: { position: "top", textStyle: { color: "black", fontSize: 16 } },
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
