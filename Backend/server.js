const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => { 
    res.send('Hello World');
});

console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected'))
.catch(err => console.error('MongoDB connection error:', err));

const userRoutes = require('./Routes/UserRoutes');
app.use('/api/users', userRoutes);

const petStoreRoutes = require('./Routes/PetStoreRoutes');
app.use('/api/Pets', petStoreRoutes);

const appointmentRoutes = require("./Routes/AddPetsRoutes");
app.use("/api/AddPets", appointmentRoutes);

const employeeRoutes = require("./Routes/EmployeeRoutes");
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
