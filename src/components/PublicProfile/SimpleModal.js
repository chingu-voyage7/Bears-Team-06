import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import ProfilePage from "../ProfilePage/ProfilePage";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    width: "75%",
    height: "75%",
    overflow: "scroll",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "block",
  },
  modal: {
    width: "100%",
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    email: "",
    threadMessage: "",
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleThreadMessageChange = e => {
    this.setState({ threadMessage: e.target.value });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onSubmitFormThread = event => {
    event.preventDefault();
    this.props.addNewThread(this.state);
    return false;
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <p className="anchor-text" onClick={this.handleOpen}>
          Edit profile
        </p>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <ProfilePage
              open={this.state.open}
              editable
              username="anshul"
              name="Random name"
              location="Bangalore"
              age="30"
              gender="M"
              bio="XYZ"
            />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
