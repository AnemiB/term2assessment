import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";
import "./Global.css";
import UserPhoto from "../Userphoto.png";
import MySideNav from "../Components/NavBar";

const Home = () => {
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(UserPhoto);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setProfilePhoto(parsedUser.profilePhoto || UserPhoto);
    }
  }, []);

  return (
    <div className="profile-container">
      <MySideNav />
      <div className="webpage-frame">
        <header>
          <h1>Profile</h1>
          <br />
          <img
            src={profilePhoto}
            alt="User"
            className="user-photo"
            style={{ width: "12%", marginLeft: "-3%", marginBottom:"1%"}}
          />
          <br />
          <h2>{user && user.name}</h2>
          <p style={{ marginTop: "-10px" }}>{user && user.email}</p>
        </header>
        <div
          style={{
            width: "356px",
            height: "215px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "36%",
            marginTop: "3%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h6 style={{ fontWeight: "bold" }}>Personal Information</h6>
            <p style={{ textAlign: "center", fontSize: "16px" }}>
              Name: <br />
              {user && user.name} <br />
              <br />
              Username: <br />
              {user && user.username} <br />
              <br />
              Email: <br />
              {user && user.email}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button className="update-button">
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Update Information
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
