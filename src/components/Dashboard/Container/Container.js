import React, { Component } from "react";
import Draggable from "react-draggable";
import Grid from "@material-ui/core/Grid";
import "./container.scss";

class Container extends Component {
  eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <div className="box-dashboard handle">{this.props.children}</div>
          </Grid>
        </Grid>
      </Draggable>
    );
  }
}

export default Container;
