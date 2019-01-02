import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-stock">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/alberto.png"
              title="Profile Pic"
              className="image-round"
              width="150"
              height="150"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10}>
            <div className="profile-info">
            <Typography variant="h5" component="h2">
                Anshul
              </Typography>
              <Typography variant="p" component="p">
                Add a small bio here
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="all-lists">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox title="Skills" data="React, NodeJs, Python"/>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox title="Accomplishments" data="First in district coding championship, Third rank in college"/>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox title="Projects" data="Built a question paper generator using Java, Built an image modifier using Javascript"/>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox title="Completed Courses" data="An introduction to computer science, Data structures and alogorithms"/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Profile;
