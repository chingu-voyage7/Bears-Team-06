import React, { Component } from "react";
import loginGraphics from "../../assets/images/bg/login-graphics.svg";
import Logo from "../../assets/images/logo/logo.png";
import { withRouter } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import { fetchUser } from "../../store/actions/profile/profile";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailErr: "",
    passwordErr: "",
  };

  onEmailChange = e => this.setState({ email: e.target.value, emailErr: "" });
  onPasswordChange = e =>
    this.setState({ password: e.target.value, passwordErr: "" });

  onSumbitForm = async () => {
    try {
      const user = await axios.post("/api/user/login", {
        email: this.state.email,
        password: this.state.password,
      });
      await this.props.fetchUser();
      this.props.history.push("/dashboard");
    } catch (error) {
      //Set the form error
      if (error.response && error.response.data)
        this.setFormError(error.response.data);

      console.log(error.response);
    }
  };

  setFormError = error => {
    if (error.email) this.setState({ emailErr: error.email });
    if (error.password) this.setState({ passwordErr: error.password });
  };

  redirectToRegister = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div className="Login">
        <div className="Login__website-logo-container">
          <div className="Login__logo-wrapper">
            <img src={Logo} alt="" className="Login__logo-wrapper__logo" />
            <span className="Login__logo-wrapper__name">StockMa</span>
          </div>
        </div>
        <div className="Login__image-holder">
          <div className="Login__image-holder__content">
            <img
              src={loginGraphics}
              alt=""
              className="Login__image-holder__image"
            />
          </div>
        </div>
        <div className="Login__form-holder">
          <div className="Login__form-content">
            <div className="Login__form">
              <h3 className="Login__form__title">Login to account</h3>
              <p className="Login__form__subtitle">
                Access to the most powerful stock tool in the entire web
                industry
              </p>
              <div className="Login__form__input-group">
                <input
                  type="text"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  name="username"
                  className={classnames({
                    "Login__form__input-group__input": true,
                    "Login__form__input-group__input--error": this.state
                      .emailErr,
                  })}
                />
                {this.state.emailErr && (
                  <p className="Login__form__input-group--error">
                    {this.state.emailErr}
                  </p>
                )}
              </div>
              <div className="Login__form__input-group">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  placeholder="Password"
                  name="password"
                  className={classnames({
                    "Login__form__input-group__input": true,
                    "Login__form__input-group__input--error": this.state
                      .passwordErr,
                  })}
                />
                {this.state.passwordErr && (
                  <p className="Login__form__input-group--error">
                    {this.state.passwordErr}
                  </p>
                )}
              </div>
              <div className="Login__form__btn-wrapper">
                <button
                  onClick={this.onSumbitForm}
                  className="Login__form__btn-wrapper__submit"
                >
                  Login
                </button>
              </div>

              <div className="Login__form__social-login-wrapper">
                <p className="Login__form__label">Or login with</p>
                <a
                  href="/api/user/auth/facebook"
                  className="Login__form__social-login"
                >
                  <i className="fab fa-facebook-f Login__form__social-login__icon Login__form__social-login__icon--blue" />
                  Facebook
                </a>
                <a
                  href="/api/user/auth/google"
                  className="Login__form__social-login"
                >
                  <i className="fab fa-facebook-f Login__form__social-login__icon Login__form__social-login__icon--red" />
                  Google
                </a>
              </div>

              <div
                onClick={this.redirectToRegister}
                className="Login__form__register"
              >
                Register new account
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchUser },
  )(Login),
);
