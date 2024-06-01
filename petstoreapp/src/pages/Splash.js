import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./Splash.css";

const Splash = () => {
  const [roleChosen, setRoleChosen] = useState(false);
  const [role, setRole] = useState("None");
 const getRole = (roleChoose) => () => {
   if (role === "None") {
     setRole(roleChoose);
     setRoleChosen(true);
     sessionStorage.setItem("role", roleChoose); 
   } else {
     setRole("None");
     setRoleChosen(false);
     sessionStorage.removeItem("role"); 
   }
 };

  return (
    <div className="container">
      <div className="content">
        <img src={Logo} alt="" width={250} />
        <h1 className="splashmain">Puppy Paws</h1>
        {roleChosen ? (
          <>
            <Link to="./SignUp">
              <button className="ButtonMain">Sign up</button>
            </Link>
            <Link to="./SignIn">
              <button className="ButtonSub">Sign in</button>
            </Link>
          </>
        ) : (
          <>
            <button className="ButtonMain" onClick={getRole("Customer")}>
              Enter
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Splash;
