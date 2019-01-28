import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListBox from "./ListBox/ListBox";
import StockTable from "../StockTable/StockTable";
import SimpleModal from "./SimpleModal";
import Header from "../common/Header/Header";
import ProfileLeftNav from "./ProfileLeftNav/ProfileLeftNav";
import ProfileMainArea from "./ProfileMainArea/ProfileMainArea";
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
  openModal = () => {
    console.log("Clicked on open modal");
  };
  render() {
    return (
      <div className="Profile">
        <Header />
        <div className="Profile__main-wrapper">
          <ProfileLeftNav />
          <ProfileMainArea />
        </div>
      </div>
    );
  }
}

export default Profile;
