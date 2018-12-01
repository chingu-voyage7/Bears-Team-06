import React, { Component } from "react";
import { switchTheme } from "../../store/actions/settings/settings";

import { connect } from "react-redux";

class SampleComponent extends Component {
  toogleTheme = () => {
    if (this.props.theme === "dark") {
      this.props.switchTheme("light");
    }
    if (this.props.theme === "light") {
      this.props.switchTheme("dark");
    }
  };
  render() {
    return (
      <div className="SampleComponent">
        <button onClick={this.toogleTheme} className="SampleComponent__button">
          Switch Theme
        </button>
        <div className="SampleComponent__text">This is a sample text</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  theme: state.settings.theme
});
export default connect(
  mapStateToProps,
  { switchTheme }
)(SampleComponent);
