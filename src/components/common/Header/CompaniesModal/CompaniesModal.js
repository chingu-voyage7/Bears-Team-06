import React, { Component } from "react";
import HeaderContext from "../_headerContext";
import Modal from "react-modal";
import classnames from "classnames";
import { connect } from "react-redux";
import CompaniesLists from "./CompaniesLists/CompaniesLists";
import ReactTooltip from "react-tooltip";
import axios from "axios";

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

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.searchCompanies();
    }
  };

  searchCompanies = async () => {
    const searchText = this.context.companySearchText;
    this.context.setCompanySearchFetched(false);
    this.context.setCompanySearching(true);
    this.context.setShowFollowingCompanies(false);
    this.context.setCompanies([]);
    try {
      const res = await axios.get(`/api/companies/search?text="${searchText}"`);
      this.context.setCompanies(res.data);
      this.context.setCompanySearchFetched(true);
      this.context.setCompanySearching(false);
    } catch (error) {
      console.log(error);
    }
  };
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
        <ReactTooltip place="left" effect="solid" />
        <div className={modalWrapperClasses}>
          <div className="CompaniesModal">
            <div className="CompaniesModal__header">
              <div className="CompaniesModal__search-btn-wrapper">
                <input
                  type="text"
                  placeholder="Search for companies"
                  value={this.context.companySearchText}
                  onChange={this.context.changeCompanySearchText}
                  onKeyPress={this._handleKeyPress}
                  className="CompaniesModal__search-btn-wrapper__search"
                />
              </div>
              <div
                data-tip="Following"
                className="CompaniesModal__header__icon"
                onClick={() => this.context.setShowFollowingCompanies(true)}
              >
                <i className="fas fa-user-plus" />
              </div>
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
