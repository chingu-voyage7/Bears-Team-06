import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { createGroup, fetchGroups } from "../../../store/actions/group/group";
import classnames from "classnames";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    "z-index": "9999",
    border: "none",
    padding: "0px",
  },
  overlay: {
    background: "rgba(0,0,0,.8)",
    "z-index": "999",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class CreateGroupChannel extends Component {
  state = {
    channelName: "",
    channelNameErr: "",
  };

  onChannelNameChange = e =>
    this.setState({ channelName: e.target.value, channelNameErr: "" });

  onCreateGroup = async () => {
    if (this.state.channelName === "")
      return this.setState({ channelNameErr: "Please provide some name" });

    try {
      await this.props.createGroup(this.state.channelName);
      this.props.fetchGroups();
      this.props.closeModal();
    } catch (error) {
      this.setState({ channelNameErr: error });
    }
  };

  render() {
    const { props } = this;
    const modalWrapperClasses = classnames({
      ThemeDark: this.props.theme === "dark",
      ThemeLight: this.props.theme === "light",
    });
    return (
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Create Group Channel"
      >
        <div className={modalWrapperClasses}>
          <div className="CreateGroupChannel">
            <div className="CreateGroupChannel__upper">
              <div className="CreateGroupChannel__upper-header">
                <h4 className="CreateGroupChannel__title">
                  Create A Group Channel
                </h4>
                <span
                  className="CreateGroupChannel__cross-btn"
                  onClick={props.closeModal}
                >
                  <i class="fas fa-times" />
                </span>
              </div>

              <p className="CreateGroupChannel__sub-title">
                Create a new Server. And tell all of your friends to Join.
              </p>
              <div className="CreateGroupChannel__input-body">
                <p className="CreateGroupChannel__input-label">SERVER NAME</p>
                <input
                  value={this.state.channelName}
                  onChange={this.onChannelNameChange}
                  type="text"
                  className="CreateGroupChannel__input-field"
                />
                <p className="CreateGroupChannel__error">
                  {this.state.channelNameErr}
                </p>
              </div>
            </div>
            <div className="CreateGroupChannel__bottom">
              <button
                onClick={this.onCreateGroup}
                className="CreateGroupChannel__create-btn"
              >
                Create A Server
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
});
export default connect(
  mapStateToProps,
  { createGroup, fetchGroups },
)(CreateGroupChannel);
