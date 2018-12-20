import React, { Component } from "react";

class ProfilePage extends Component {
  state = {
    edit: false,
    name: "",
    email: "",
    location: "",
    age: "",
    gender: "male",
    bio: "",
  };
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo = async () => {
    /*const data = await fetch("");
    const info = await data.json();
    this.setState({ ...this.state, ...info });*/
    const info = {
      name: "Ahmed Zak",
      email: "azak123@gmail.com",
      location: "Khi",
      age: 100,
      gender: "male",
      bio: "Just a dude",
    };
    this.setState({ ...this.state, ...info });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  edit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    // call func to update database
  };
  render() {
    let inputClass = "info__input";
    if (this.state.edit) {
      inputClass += " edit";
    }
    return (
      <div className="profile">
        <header>
          <div className="profile__header">
            <h1 className="profile__heading">Profile</h1>
            {this.props.editable && (
              <button className="profile__btn" onClick={this.edit}>
                {this.state.edit ? "Save" : "Edit"}
              </button>
            )}
          </div>
        </header>
        <main className="profile__content">
          <div className="profile__pic">
            <div className="profile__img" />
          </div>
          <h2 className="profile__username">{this.props.username}</h2>
          <div className="profile__info">
            <div className="info__row">
              <label className="info__label">
                <span>Name</span>:
              </label>
              <input
                name="name"
                type="text"
                className={inputClass}
                value={this.state.name}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Email</span>:
              </label>
              <input
                name="email"
                type="email"
                className={inputClass}
                value={this.state.email}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Location</span>:
              </label>
              <input
                name="location"
                type="text"
                className={inputClass}
                value={this.state.location}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Age</span>:
              </label>
              <input
                name="age"
                type="number"
                className={inputClass}
                value={this.state.age}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Gender</span>:
              </label>
              <select
                name="gender"
                className={inputClass}
                disabled={!this.state.edit}
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Bio</span>:
              </label>
              <textarea
                name="bio"
                className={inputClass}
                value={this.state.bio}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfilePage;
