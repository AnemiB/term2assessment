import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/NavBar";
import "./PetStore.css";
import "./Global.css";

const PetStore = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedPets = sessionStorage.getItem("pets");
    if (storedPets) {
      const parsedPets = JSON.parse(storedPets);
      setPets(parsedPets);
      setFilteredPets(parsedPets);
    } else {
      axios
        .get("http://localhost:5000/api/AddPets")
        .then((response) => {
          setPets(response.data);
          setFilteredPets(response.data);
          sessionStorage.setItem("pets", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error("There was an error fetching the pets!", error);
        });
    }
  }, []);

  useEffect(() => {
    let filtered = pets;

    if (categoryFilter) {
      filtered = filtered.filter(pet => pet.categoryName.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (searchTerm) {
      filtered = filtered.filter(pet => pet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredPets(filtered);
  }, [categoryFilter, searchTerm, pets]);

  const handleCardClick = (petId) => {
    navigate(`/PetDetails/${petId}`);
  };

  const handleRemove = async (petId, event) => {
    event.stopPropagation();

    try {
      await axios.delete(`http://localhost:5000/api/AddPets/${petId}`);
      const updatedPets = pets.filter(pet => pet.petId !== petId);
      setPets(updatedPets);
      setFilteredPets(updatedPets);
      sessionStorage.setItem("pets", JSON.stringify(updatedPets));
    } catch (error) {
      console.error("Error removing pet:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h1 style={{ marginTop: "15px", marginBottom: "50px" }}>Pet Store</h1>

        <div className="filter-container">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="Dog">Dog</option>
            <option value="Snake">Snake</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
          </select>

          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="card-container1">
          {filteredPets.map((pet) => (
            <div key={pet.petId} className="card1" onClick={() => handleCardClick(pet.petId)}>
              <div>
                <h4>{pet.name}</h4>
                <p>Category: {pet.categoryName}</p>
                <p>Status: {pet.status}</p>
                <p>Price: {pet.price}</p>
                <button className="remove-button" onClick={(event) => handleRemove(pet.petId, event)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetStore;
