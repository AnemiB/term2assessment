import "./Splash.css";
import Logo from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/Home");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Link to="../">
        <img
          src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
          alt="Back Arrow"
          className="back-arrow"
        />
      </Link>
      <h1 className="signupmain">Welcome Back</h1>
      
      <div className="signincard">
        <form onSubmit={handleSignIn}>
          <h1 className="signsplashmain">Sign In</h1>
          <div className="signupformat">
            <p className="signupbody">Username</p>
            <input className="inputsign" value={username} onChange={handleUsernameChange} required
            />
          </div>
          <div className="signupformat">
            <p className="signupbody">Password</p>
            <input className="inputsign" type="password" value={password} onChange={handlePasswordChange} required
            />
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="signupbutton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
