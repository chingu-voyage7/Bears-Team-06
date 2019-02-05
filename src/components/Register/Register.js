import React, { Component } from "react";
import loginGraphics from "../../assets/images/bg/login-graphics.svg";
import Logo from "../../assets/images/logo/logo.png";
import { withRouter } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import { fetchUser } from "../../store/actions/profile/profile";
import { connect } from "react-redux";
class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",

    nameErr: "",
    emailErr: "",
    passwordErr: "",
    password2Err: "",
  };

  onNameChange = e => this.setState({ name: e.target.value, nameErr: "" });
  onEmailChange = e => this.setState({ email: e.target.value, emailErr: "" });
  onPasswordChange = e =>
    this.setState({ password: e.target.value, passwordErr: "" });
  onPassword2Change = e =>
    this.setState({ password2: e.target.value, password2Err: "" });

  onSumbitForm = async () => {
    try {
      const user = await axios.post("/api/user/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
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
    if (error.name) this.setState({ nameErr: error.name });
    if (error.email) this.setState({ emailErr: error.email });
    if (error.password) this.setState({ passwordErr: error.password });
    if (error.password2) this.setState({ password2Err: error.password2 });
  };

  redirectToLogin = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="Register">
        <div className="Register__website-logo-container">
          <div className="Register__logo-wrapper">
            <img src={Logo} alt="" className="Register__logo-wrapper__logo" />
            <span className="Register__logo-wrapper__name">StockMa</span>
          </div>
        </div>
        <div className="Register__image-holder">
          <div className="Register__image-holder__content">
            <img
              src={loginGraphics}
              alt=""
              className="Register__image-holder__image"
            />
          </div>
        </div>
        <div className="Register__form-holder">
          <div className="Register__form-content">
            <div className="Register__form">
              <h3 className="Register__form__title">Register the account</h3>
              <p className="Register__form__subtitle">
                Access to the most powerful stock tool in the entire web
                industry
              </p>
              <div className="Register__form__input-group">
                <input
                  type="text"
                  placeholder="Provide Username"
                  value={this.state.name}
                  onChange={this.onNameChange}
                  name="username"
                  className={classnames({
                    "Register__form__input-group__input": true,
                    "Register__form__input-group__input--error": this.state
                      .nameErr,
                  })}
                />
                {this.state.nameErr && (
                  <p className="Register__form__input-group--error">
                    {this.state.nameErr}
                  </p>
                )}
              </div>
              <div className="Register__form__input-group">
                <input
                  type="text"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  name="username"
                  className={classnames({
                    "Register__form__input-group__input": true,
                    "Register__form__input-group__input--error": this.state
                      .emailErr,
                  })}
                />
                {this.state.emailErr && (
                  <p className="Register__form__input-group--error">
                    {this.state.emailErr}
                  </p>
                )}
              </div>
              <div className="Register__form__input-group">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  placeholder="Password"
                  name="password"
                  className={classnames({
                    "Register__form__input-group__input": true,
                    "Register__form__input-group__input--error": this.state
                      .passwordErr,
                  })}
                />
                {this.state.passwordErr && (
                  <p className="Register__form__input-group--error">
                    {this.state.passwordErr}
                  </p>
                )}
              </div>
              <div className="Register__form__input-group">
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.onPassword2Change}
                  placeholder="Confirm Password"
                  name="password"
                  className={classnames({
                    "Register__form__input-group__input": true,
                    "Register__form__input-group__input--error": this.state
                      .password2Err,
                  })}
                />
                {this.state.password2Err && (
                  <p className="Register__form__input-group--error">
                    {this.state.password2Err}
                  </p>
                )}
              </div>
              <div className="Register__form__btn-wrapper">
                <button
                  onClick={this.onSumbitForm}
                  className="Register__form__btn-wrapper__submit"
                >
                  Register
                </button>
              </div>

              <div className="Register__form__social-login-wrapper">
                <p className="Register__form__label">Or register with</p>
                <a
                  href="/api/user/auth/facebook"
                  className="Register__form__social-login"
                >
                  <i className="fab fa-facebook-f Register__form__social-login__icon Register__form__social-login__icon--blue" />
                  Facebook
                </a>
                <a
                  href="/api/user/auth/google"
                  className="Register__form__social-login"
                >
                  <i className="fab fa-facebook-f Register__form__social-login__icon Register__form__social-login__icon--red" />
                  Google
                </a>
              </div>

              <div
                onClick={this.redirectToLogin}
                className="Register__form__register"
              >
                Go to Login
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
  )(Register),
);
