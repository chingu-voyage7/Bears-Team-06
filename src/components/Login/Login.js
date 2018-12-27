import React, { Component } from "react";
import loginGraphics from "../../assets/images/bg/login-graphics.svg";
import Logo from "../../assets/images/logo/logo.png";

class Login extends Component {
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
                  name="username"
                  className="Login__form__input-group__input Login__form__input-group__input--error"
                />
                <p className="Login__form__input-group--error">
                  Such email does not exist on server
                </p>
              </div>
              <div className="Login__form__input-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="Login__form__input-group__input"
                />
              </div>
              <div className="Login__form__btn-wrapper">
                <button className="Login__form__btn-wrapper__submit">
                  Login
                </button>
              </div>

              <div className="Login__form__social-login-wrapper">
                <p className="Login__form__label">Or login with</p>
                <a className="Login__form__social-login">
                  <i className="fab fa-facebook-f Login__form__social-login__icon Login__form__social-login__icon--blue" />
                  Facebook
                </a>
                <a className="Login__form__social-login">
                  <i className="fab fa-facebook-f Login__form__social-login__icon Login__form__social-login__icon--red" />
                  Google
                </a>
              </div>

              <div className="Login__form__register">Register new account</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
