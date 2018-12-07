import React, { Component } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chartActions from "../../store/actions/charts/charts";

class Charts extends Component {
  componentDidMount() {
    this.props.charts.getCharts();
  }
  render() {
    let data = this.props.chart.data;
    console.log(data);
    return (
      <div
        style={{
          width: "400px",
          height: "300px",
        }}
      >
        <Chart
          data={data}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" },
          ]}
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
