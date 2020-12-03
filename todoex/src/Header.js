import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Moment from "moment";

function Header() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__left">
          <img className="header__logo" src="logo_teal.png" alt="" />
          {/* <IconButton className='header__icons' aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <IconButton className='header__icons' aria-label="home">
                    <HomeIcon />
                </IconButton> */}
        </div>

        <div className="header__center">
          <input type="text" placeholder="Start your Search" />
          <IconButton>
            <SearchIcon style={{ color: "green" }} />
          </IconButton>
        </div>

        <div className="header__right">
          <IconButton className="header__icons" aria-label="addtask">
            <AddCircleIcon />
          </IconButton>

          <IconButton className="header__icons" aria-label="notification">
            <NotificationsIcon />
          </IconButton>

          <IconButton className="header__icons" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <div className="header__today">
        <span className="today__content">Today</span>
        <small className="today__date">
          {Moment(date.toLocaleDateString()).format("LL")}
        </small>
      </div>
    </div>
  );
}

export default Header;
