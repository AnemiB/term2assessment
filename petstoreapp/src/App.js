import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PetDetails from "./pages/PetDetails";
import PetStore from "./pages/PetStore";
import Home from "./pages/Home";
import AddPets from "./pages/AddPets";
import Splash from "./pages/Splash";
import EditPet from "./pages/EditPet";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PetDetails/:petId" element={<PetDetails />} />
          <Route path="/PetStore" element={<PetStore />} />
          <Route path="/AddPets" element={<AddPets />} />
          <Route path="/EditPet/:petId" element={<EditPet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
