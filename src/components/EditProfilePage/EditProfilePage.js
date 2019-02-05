import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import { Image } from "cloudinary-react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import Header from "../common/Header/Header";
import classNames from "classnames";
import { updateProfile } from "../../store/actions/profile/profile";
import keys from "../../keys/keys";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class EditProfilePage extends Component {
  state = {
    edit: true,
    username: "",
    // name:
    location: "",
    age: "",
    gender: "",
    bio: "",
    userImage: null,
    //keeps track of just images for now
    //later can be updaetd
    files: [],
  };
  componentDidMount(newProps) {
    console.log("Mounting component");
    this.getUserInfo();
  }

  //Currently we accept only single file
  //but the user are free to enable multiple image option
  //and it wont break
  onDrop = files => {
    this.setState({
      files: files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    });
  };

  handleUploadImages = async images => {
    let imagesId = [];
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
    const uploads = images.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", keys.cloudinary.uploadPreset); // Replace the preset name with your own
      formData.append("api_key", keys.cloudinary.key); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Replace cloudinary upload URL with yours
      return axios
        .post(
          `https://api.cloudinary.com/v1_1/${
            keys.cloudinary.name
          }/image/upload`,
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          },
        )
        .then(response => imagesId.push(response.data.public_id));
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    try {
      await axios.all(uploads);
      console.log(
        "Images have been successfully uploaded to cloudinary",
        imagesId,
      );
      return imagesId;
    } catch (error) {
      console.log(error);
      if (error.response) console.log(error.response);
    }
  };
  getUserInfo = async () => {
    try {
      const res = await axios.get(`api/user/get-user`);
      this.setState({
        username: res.data.local.username,
        location: res.data.location,
        age: res.data.age,
        gender: res.data.gender,
        bio: res.data.bio,
        userImage: res.data.userImage,
      });
    } catch (err) {
      console.error(err);
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = async () => {
    try {
      let image = this.state.userImage;
      if (this.state.files.length > 0) {
        let res = await this.handleUploadImages(this.state.files);
        let imageId = res[0];
        const rawImageURL = "https://res.cloudinary.com/samrat/image/upload/";
        image = `${rawImageURL}${imageId}`;
        console.log("Uploaded image id is ", image);
      }
      const user = {
        username: this.state.username,
        location: this.state.location,
        age: this.state.age,
        bio: this.state.bio,
        gender: this.state.gender,
        userImage: image,
      };
      const res = await axios.post("/api/user/update", user);
      console.log("User have been successfully update", res.data);
      this.props.updateProfile(res.data);
      NotificationManager.success(
        "The profile is successfully updated",
        "Success",
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    let inputClass = "info__input";
    const {
      username,
      location,
      age,
      gender,
      bio,
      userImage,
      files,
    } = this.state;

    if (this.state.edit) {
      inputClass += " edit";
    }
    return (
      <div className="EditProfilePage">
        <Header />
        <NotificationContainer />
        <main className="EditProfilePage__content">
          <div className="EditProfilePage__pic-container-wrapper">
            {/* If the user has uploaded a image display that or display the default image from database */}
            <div className="EditProfilePage__pic-container">
              <img
                src={files.length > 0 ? files[0].preview : userImage}
                alt=""
                className="EditProfilePage__pic__image"
              />
              <Dropzone onDrop={this.onDrop}>
                {({ getRootProps, getInputProps, isDragActive }) => {
                  return (
                    <div
                      {...getRootProps()}
                      className={classNames("dropzone", {
                        "dropzone--isActive": isDragActive,
                      })}
                    >
                      <input {...getInputProps()} />
                      <div className="EditProfilePage__image-upload-btn">
                        Upload
                      </div>
                    </div>
                  );
                }}
              </Dropzone>
            </div>
          </div>
          <h2 className="EditProfilePage__username">{this.props.username}</h2>
          <div className="EditProfilePage__info">
            <div className="info__row">
              <label className="info__label">
                <span>Name:</span>
              </label>
              <input
                name="username"
                type="text"
                className={inputClass}
                value={username}
                onChange={this.onChange}
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
                rows="5"
                cols="5"
                onChange={this.onChange}
              />
            </div>
            <div className="EditProfilePage__btn-wrapper">
              <button className="EditProfilePage__btn" onClick={this.saveUser}>
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { updateProfile },
)(EditProfilePage);
