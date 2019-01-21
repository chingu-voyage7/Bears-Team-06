import React, { Component } from "react";
import HeaderContext from "../_headerContext";
import Modal from "react-modal";
import classnames from "classnames";
import { connect } from "react-redux";
import CompaniesLists from "./CompaniesLists/CompaniesLists";

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

class CompaniesModal extends Component {
  static contextType = HeaderContext;

  render() {
    const modalWrapperClasses = classnames({
      ThemeDark: this.props.theme === "dark",
      ThemeLight: this.props.theme === "light",
    });

    return (
      <Modal
        isOpen={this.context.companiesModalOpen}
        onRequestClose={this.context.closeCompaniesModal}
        style={customStyles}
        contentLabel="Companies Modal"
      >
        <div className={modalWrapperClasses}>
          <div className="CompaniesModal">
            <div className="CompaniesModal__search-btn-wrapper">
              <input
                type="text"
                placeholder="Search for companies"
                className="CompaniesModal__search-btn-wrapper__search"
              />
            </div>
            <CompaniesLists />
          </div>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  theme: state.settings.theme,
});
export default connect(mapStateToProps)(CompaniesModal);
