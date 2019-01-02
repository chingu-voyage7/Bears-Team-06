import React, { Component } from "react";
import Draggable from "react-draggable";
import Grid from "@material-ui/core/Grid";
import "./container.scss";

//This will be the container for all the components
class Container extends Component {
  eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };
  render() {
    return (
      //Draggable allows to have draggable components throughout
      <Draggable
        handle=".handle"
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <Grid
          item
          xs={this.props.size["xs"]}
          sm={this.props.size["sm"]}
          md={this.props.size["md"]}
          lg={this.props.size["lg"]}
          xl={this.props.size["xl"]}
        >
          <div className="box-dashboard handle">{this.props.children}</div>
        </Grid>
      </Draggable>
    );
  }
}

export default Container;
