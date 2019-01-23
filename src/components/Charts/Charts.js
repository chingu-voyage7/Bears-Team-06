import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";
import { Chart } from "react-google-charts";
import { options_dark } from "./themes/charts-options-dark";
import { options_light } from "./themes/charts-options-light";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphType: "LineChart",
      width: "100%",
      height: "400px",
    };
  }
  render() {
    let data = this.props.dashboard.chart;
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
        title: "Stock value",
      },
      hAxis: {
        title: "Time (Updated every 30 minutes)",
      },
    };

    if (this.props.theme == "dark") {
      options = options_dark;
    } else {
      options = options_light;
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
  dashboard: state.dashboard,
  theme: state.settings.theme,
});

export default connect(mapStateToProps)(Charts);
