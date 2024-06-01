import React from "react";
import SideNav, { Toggle, NavItem, NavText } from "@trendmicro/react-sidenav";
import { useNavigate } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Navbar.css";
import LogoSmall from "./Logosmall.png";
function MySideNav() {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={LogoSmall}
          alt="Logo"
          style={{
            width: "90px",
            height: "auto",
            marginRight: "50px",
            marginBottom: "10px",
            marginTop: "60px",
          }}
        />
      </div>
      <SideNav.Nav defaultSelected="Home">
        <NavItem eventKey="Home">
          <NavText>
            <span style={{ color: "aliceblue" }}>Home</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="PetDetails">
          <NavText>
            <span style={{ color: "white" }}>Details</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="PetStore">
          <NavText>
            <span style={{ color: "white" }}>Store</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="AddPets">
          <NavText>
            <span style={{ color: "white" }}>AddPets</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="SignIn">
          <NavText>
            <span style={{ color: "white" }}>Sign out</span>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNav;
