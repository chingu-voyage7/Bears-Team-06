import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import ReactTooltip from "react-tooltip";
import HeaderContext from "../../common/Header/_headerContext";
import CompaniesModal from "./CompaniesModal/CompaniesModal";
import Switch from "@material-ui/core/Switch";
import { switchTheme } from "../../../store/actions/settings/settings";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LastMessages from "./LastMessages/LastMessages";
import Logo from "../../../assets/images/logo/logo.png";
import { logoutUser } from "../../../store/actions/profile/profile";

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  avatar: {
    cursor: "pointer",
    margin: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  darkThemeHeader: {
    backgroundColor: "#22252A",
  },
});

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    messageAnchorEl: null,
    companiesModalOpen: false,
    companySearchText: "",
    companySearching: false,
    companySearchFetched: false,
    showFollowingCompanies: false,
    companies: [],
    searchText: "",
  };

  setShowFollowingCompanies = bool => {
    this.setState({ showFollowingCompanies: bool });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMessageMenuOpen = event => {
    this.setState({ messageAnchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null, messageAnchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMessageClose = () => {
    this.setState({ messageAnchorEl: null });
    this.handleMobileMessageClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMessageClose = () => {
    this.setState({ mobileMessageAnchorEl: null });
  };
  openCompaniesModal = () => {
    console.log("Open companies modal called");
    this.setState({ companiesModalOpen: true });
  };

  closeCompaniesModal = () => this.setState({ companiesModalOpen: false });

  //Related to companies modal goes below here
  changeCompanySearchText = e => {
    this.setState({ companySearchText: e.target.value });
  };

  setCompanySearching = bool => {
    this.setState({ companySearching: bool });
  };

  setCompanySearchFetched = bool => {
    this.setState({ companySearchFetched: bool });
  };

  setCompanies = companies => {
    this.setState({ companies });
  };

  redirectToGroupChat = () => {
    this.props.history.push("/group-chat");
  };

  redirectToFindPeople = () => {
    this.props.history.push("findpeople");
  };

  redirectToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  redirectToNews = () => {
    this.props.history.push("/news");
  };

  redirectToEditProfile = () => {
    this.props.history.push("/edit-profile");
  };
  onSearchTextChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onFindPeopleClick = () => {
    if (this.state.searchText !== "") {
      this.props.history.push(`/showpeople/${this.state.searchText}`);
    }
  };

  _handleKeyPress = e => {
    console.log("key press os called");
    if (e.key === "Enter") {
      this.onFindPeopleClick();
    }
  };

  onThemeChange = () => {
    console.log("On theme change is called");
    if (this.props.settings.theme === "dark") {
      return this.props.switchTheme("light");
    }
    this.props.switchTheme("dark");
  };
  render() {
    const {
      anchorEl,
      mobileMoreAnchorEl,
      messageAnchorEl,
      mobileMessageAnchorEl,
    } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isMessageOpen = Boolean(messageAnchorEl);
    const contextValue = {
      companiesModalOpen: this.state.companiesModalOpen,
      closeCompaniesModal: this.closeCompaniesModal,
      openCompaniesModal: this.openCompaniesModal,
      companySearchText: this.state.companySearchText,
      companySearching: this.state.companySearching,
      companySearchFetched: this.state.companySearchFetched,
      companies: this.state.companies,
      showFollowingCompanies: this.state.showFollowingCompanies,
      changeCompanySearchText: this.changeCompanySearchText,
      setCompanySearching: this.setCompanySearching,
      setCompanySearchFetched: this.setCompanySearchFetched,
      setCompanies: this.setCompanies,
      setShowFollowingCompanies: this.setShowFollowingCompanies,
    };

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.redirectToEditProfile}>Edit Profile</MenuItem>
        <MenuItem onClick={() => this.props.logoutUser()}>Log out</MenuItem>
      </Menu>
    );

    const renderMessagesMenu = (
      <Menu
        anchorEl={messageAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isMessageOpen}
        onClose={this.handleMenuClose}
      >
        {/*<MenuItem onClick={this.handleMenuClose}>Log out</MenuItem> */}
        <LastMessages />
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.openCompaniesModal}>
          <div className="Header__action">
            <IconButton color="inherit">
              <div data-tip="Companies" className="Header__building">
                <i className="fas fa-building" />
              </div>
            </IconButton>
            <p>Companies</p>
          </div>
        </MenuItem>
        <MenuItem onClick={this.handleMessageMenuOpen}>
          <IconButton
            color="inherit"
            aria-owns={isMessageOpen ? "material-appbar" : undefined}
            aria-haspopup="true"
            color="inherit"
          >
            <Badge
              badgeContent={this.props.profile.lastMessages.length}
              color="secondary"
            >
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.redirectToGroupChat}>
          <IconButton color="inherit">
            <div data-tip="Group Chat" className="Header__group-chat">
              <i className="fas fa-comments" />
            </div>
          </IconButton>
          <p>Group Chat</p>
        </MenuItem>
        <MenuItem onClick={this.redirectToFindPeople}>
          <IconButton color="inherit">
            <div className="Header__find-people">
              <i className="fas fa-user-friends" />
            </div>
          </IconButton>
          <p>Find People</p>
        </MenuItem>
        <MenuItem onClick={this.redirectToNews}>
          <IconButton color="inherit">
            <div data-tip="News" className="Header__find-people">
              <i className="fas fa-newspaper" />
            </div>
          </IconButton>
          <p>News</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={this.onThemeChange}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            data-tip="Dark Mode"
          >
            <Switch checked={this.props.settings.theme === "dark"} />
          </IconButton>
          <p>Dark theme</p>
        </MenuItem>
      </Menu>
    );

    return (
      <HeaderContext.Provider value={contextValue}>
        <CompaniesModal />
        <div className="Header">
          <ReactTooltip effect="solid" />
          <AppBar
            position="static"
            className={
              this.props.settings.theme === "dark"
                ? classes.darkThemeHeader
                : ""
            }
          >
            <Toolbar>
              <Avatar
                alt="Remy Sharp"
                src={Logo}
                className={classes.avatar}
                onClick={this.redirectToDashboard}
              />
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                onClick={this.redirectToDashboard}
                noWrap
              >
                StockMa
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search user"
                  value={this.state.searchText}
                  onChange={this.onSearchTextChange}
                  onKeyPress={this._handleKeyPress}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <div className={classes.grow} />

              <div className={classes.sectionDesktop}>
                <IconButton color="inherit" onClick={this.openCompaniesModal}>
                  <div data-tip="Companies" className="Header__building">
                    <i className="fas fa-building" />
                  </div>
                </IconButton>
                <IconButton
                  aria-owns={isMessageOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMessageMenuOpen}
                  color="inherit"
                >
                  <Badge
                    badgeContent={this.props.profile.lastMessages.length}
                    color="secondary"
                  >
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={this.redirectToGroupChat}>
                  <div data-tip="Group Chat" className="Header__group-chat">
                    <i className="fas fa-comments" />
                  </div>
                </IconButton>
                <IconButton color="inherit" onClick={this.redirectToFindPeople}>
                  <div data-tip="Find People" className="Header__find-people">
                    <i className="fas fa-user-friends" />
                  </div>
                </IconButton>
                <IconButton color="inherit" onClick={this.redirectToNews}>
                  <div data-tip="News" className="Header__find-people">
                    <i className="fas fa-newspaper" />
                  </div>
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  data-tip="Dark Mode"
                  onClick={this.onThemeChange}
                >
                  <Switch checked={this.props.settings.theme === "dark"} />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
          {renderMessagesMenu}
        </div>
      </HeaderContext.Provider>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  settings: state.settings,
  profile: state.profile,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { switchTheme, logoutUser },
  )(withRouter(Header)),
);
