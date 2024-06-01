import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/NavBar";
import "./PetDetails.css";
import "./Global.css";

const PetDetails = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/AddPets/${petId}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet details!", error);
      });
  }, [petId]);

  if (!Object.keys(pet).length) {
    return null;
  }

  const handleEditClick = () => {
    navigate(`/EditPet/${petId}`);
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h1 style={{ marginTop: "15px", marginBottom: "50px" }}>Pet Details</h1>
        <div className="card-container1">
          <div className="card-details">
            <h4>{pet.name}</h4>
            <p>ID: {pet.petId}</p>
            <p>Category: {pet.categoryName}</p>
            <p>Status: {pet.status}</p>
            <p>Price: {pet.price}</p>
          </div>
        </div>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default PetDetails;
