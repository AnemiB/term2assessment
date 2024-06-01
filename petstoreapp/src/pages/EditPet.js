import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/NavBar";
import "./EditPet.css";
import "./Global.css";

const EditPet = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const [updatedPet, setUpdatedPet] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/AddPets/${petId}`)
      .then((response) => {
        setPet(response.data);
        setUpdatedPet(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet details!", error);
      });
  }, [petId]);

  if (!Object.keys(pet).length) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPet({
      ...updatedPet,
      [name]: value,
    });
  };

  const handleDoneClick = () => {
    axios
      .put(`http://localhost:5000/api/AddPets/${petId}`, updatedPet)
      .then((response) => {
        console.log("Pet updated successfully:", response.data);
        navigate(`/PetDetails/${petId}`);
      })
      .catch((error) => {
        console.error("There was an error updating the pet details!", error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h1 style={{ marginTop: "15px", marginBottom: "50px" }}>Edit Pet Details</h1>
        <div className="card-container1">
          <div className="card-details">
            <h4>{pet.name}</h4>
            <input
              type="text"
              name="name"
              placeholder="Update Name"
              value={updatedPet.name}
              onChange={handleInputChange}
            />
            <p>ID: {pet.petId}</p>
            <input
              type="text"
              name="petId"
              placeholder="Update ID"
              value={updatedPet.petId}
              onChange={handleInputChange}
            />
            <p>Category: {pet.categoryName}</p>
            <input
              type="text"
              name="categoryName"
              placeholder="Update Category"
              value={updatedPet.categoryName}
              onChange={handleInputChange}
            />
            <p>Status: {pet.status}</p>
            <input
              type="text"
              name="status"
              placeholder="Update Status"
              value={updatedPet.status}
              onChange={handleInputChange}
            />
            <p>Price: {pet.price}</p>
            <input
              type="text"
              name="price"
              placeholder="Update Price"
              value={updatedPet.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="done-button" onClick={handleDoneClick}>
          Done
        </button>
      </div>
    </div>
  );
};

export default EditPet;
