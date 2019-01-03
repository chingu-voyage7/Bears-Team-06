import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import "./profile.css";
import StockTable from "../StockTable/StockTable";
// Sample data for StockTable
const data = [
  ["AZ", 495, 96, 2140],
  ["BZ", 100, -12, 11120],
  ["XZ", 450, 40, 66063],
  ["RZ", 305, 540, 1120],
  ["TZ", 506, 50, 1055],
  ["YZ", 103, -119, 24455],
  ["GZ", 110, 12, 3636],
];

const columns = ["Symbol", "Price", "% Change", "$ Volume"];

class Profile extends Component {
  openModal=()=>{
    console.log("Clicked on open modal");
  }
  render() {
    return (
      <div className="profile">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardMedia
              component="img"
              alt="Profile Pic"
              image="/assets/images/alberto.png"
              title="Profile Pic"
              className="image-round"
              width="200"
              height="200"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10}>
            <div className="profile-info">
              <Typography variant="h5" component="h2" className="profile-text">
                Anshul
              </Typography>
              <Typography variant="p" component="p" className="profile-text">
                DOB: 19th July, 1997
              </Typography>
              <Typography variant="p" component="p" className="profile-text">
                Add a small bio here
              </Typography>
              <Typography variant="p" component="p" className="profile-text">
                <span className="click-modal" onClick={this.openModal}>Edit Profile</span>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="all-lists">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <ListBox
                title="Following stocks"
                data="Google, Microsoft, Apple, Flipkart, Amazon, PayPal"
              />
            </Grid>
          </Grid>
        </div>
        <div className="all-stocks">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <Typography
                variant="h4"
                component="h2"
                className="heading-profile-text text-center"
              >
                My Stocks
              </Typography>
              <StockTable columns={columns} data={data} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Profile;
