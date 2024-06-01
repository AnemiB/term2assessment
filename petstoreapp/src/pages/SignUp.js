import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Splash.css";
import Logo from "./Logo.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [usertype, setUserType] = useState("")

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    if (storedRole) {
      setUserType(storedRole)
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (!name || !username || !email || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        name,
        username,
        email,
        password,
        usertype,
      });

      if (response.status === 201) {
        setMessage("User created successfully");
        setTimeout(() => navigate("/home"), 1000); // Navigate after a short delay
      } else {
        setMessage("Error creating user");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Error creating user";
      setMessage(errorMsg);
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
      <h1 className="signupmain">Welcome</h1>
      <div className="signupblock">
        <h1 className="signsplashmain">Sign Up</h1>
        <div className="signupformat">
          <p className="signupbody">Name & Surname</p>
          <input
            className="inputsign"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signupformat">
          <p className="signupbody">Username</p>
          <input className="inputsign" type="text" value={username} onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="signupformat">
          <p className="signupbody">Email</p>
          <input className="inputsign" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signupformat">
          <p className="signupbody">Password</p>
          <input className="inputsign" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signupformat">
          <p className="signupbody">Confirm Password</p>
          <input className="inputsign" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signupbutton">
          Sign Up
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
