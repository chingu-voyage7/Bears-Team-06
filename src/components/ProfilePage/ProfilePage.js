import React, { Component } from "react";

class ProfilePage extends Component {
  state = {
    edit: true,
    name: this.props.name,
    // name:
    location: this.props.location,
    age: this.props.age,
    gender: this.props.gender,
    bio: this.props.bio,
    userImage: null,
  };
  componentDidMount(newProps) {
    console.log("Mounting component");
    this.getUserInfo();
  }
  getUserInfo = async () => {
    try {
      console.log("Username is "+this.props.username);
      const data = await fetch(
        `http://localhost:8080/api/users/${this.props.username}`,
      );
      const info = await data.json();
      // const info=res.data;
      console.log("Here is the info");
      console.log(info);
      if (info) {
        this.setState({
          ...info,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  edit = async () => {
    // call func to update database
    if (this.state.edit) {
      try {
        const { name, location, age, gender, bio, userImage } = this.state;
        const info = {
          name,
          location,
          age,
          gender,
          bio,
          userImage,
        };
        console.log("image: ", userImage);
        const response = await fetch(
          `http://localhost:8080/api/users/${this.props.username}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
          },
        );
      } catch (err) {
        console.error(err);
      }
    }
    this.setState(prevState => ({ edit: !prevState.edit }));
  };
  render() {
    let inputClass = "info__input";
    const { name, location, age, gender, bio, userImage } = this.state;

    if (this.state.edit) {
      inputClass += " edit";
    }
    return (
      <div className="profile">
        <header>
          <div className="profile__header">
            <h1 className="profile__heading">Edit Profile</h1>
            {this.props.editable && (
              <button className="profile__btn" onClick={this.edit}>
                Save
              </button>
            )}
          </div>
        </header>
        <main className="profile__content">
          <div className="profile__pic">
            {userImage !== null ? (
              <img className="profile__img" src={userImage} />
            ) : (
              <div className="profile__img" />
            )}
          </div>
          <h2 className="profile__username">{this.props.username}</h2>
          <div className="profile__info">
            <div className="info__row">
              <label className="info__label">
                <span>Name:</span>
              </label>
              <input
                name="name"
                type="text"
                className={inputClass}
                value={name}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Location:</span>
              </label>
              <input
                name="location"
                type="text"
                className={inputClass}
                value={location}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Age:</span>
              </label>
              <input
                name="age"
                type="number"
                className={inputClass}
                value={age}
                onChange={this.onChange}
                readOnly={!this.state.edit}
              />
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Gender:</span>
              </label>
              <select
                name="gender"
                className={inputClass}
                disabled={!this.state.edit}
                value={gender}
                onChange={this.onChange}
              >
                <option>{this.state.gender === "M" ? "Male" : "Female"}</option>
                <option>{this.state.gender === "M" ? "Female" : "Male"}</option>
              </select>
            </div>
            <div className="info__row">
              <label className="info__label">
                <span>Bio:</span>
              </label>
              <textarea
                name="bio"
                className={inputClass}
                value={bio}
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
