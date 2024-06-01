import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import UserPhoto from "../Userphoto.png";
import "./AddPets.css";
import "./Global.css";

const AddPets = () => {
  const [addPets, setAddPets] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(UserPhoto);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    petId: '',
    name: '',
    categoryName: '',
    status: '',
    price: ''  
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/AddPets")
      .then((response) => {
        setAddPets(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pets!", error);
      });
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePhoto(reader.result);
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/AddPets/register", formData)
      .then((response) => {
        setAddPets([...addPets, response.data]);
        setFormData({
          petId: '',
          name: '',
          categoryName: '',
          status: '',
          price: ''  
        });
        setProfilePhoto(UserPhoto); 
      })
      .catch((error) => {
        console.error("There was an error adding the pet!", error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h1 style={{ marginTop: "15px", marginBottom: "50px" }}>Add Pets</h1>
        
        <div className="card-container">
          <h4>Create Pet Listing</h4>
          <div className="card">
            <img
              src={profilePhoto}
              alt="User"
              className="profile-photo-circle" 
            />
            <br />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              id="file-input"
              style={{ display: 'none' }}
            />
            <button
              onClick={() => document.getElementById('file-input').click()}
              className="add-photo-button"
              style={{ backgroundColor: "#FFC700", borderRadius: "25px", padding: "10px 20px", margin: "10px 0", cursor: "pointer" }}
            >
              Add Photo
            </button>
            <form onSubmit={handleSubmit} className="pet-form">
              <div className="form-group">
                <label htmlFor="petId">ID</label>
                <input
                  type="text"
                  id="petId"
                  name="petId"
                  value={formData.petId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoryName">Category Name</label>
                <input
                  type="text"
                  id="categoryName"
                  name="categoryName"
                  value={formData.categoryName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br/>
              <button type="submit" className="add-pet-button" style={{ backgroundColor: "#FFC700", borderRadius: "25px", padding: "10px 20px", cursor: "pointer" }}>
                Add Pet
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPets;
