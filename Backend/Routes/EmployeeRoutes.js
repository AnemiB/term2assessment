const express = require("express");
const router = express.Router();
const Employee = require("../Models/Employee"); // Ensure the path to the User model is correct

router.post("/registerEmployee", async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    const employee = new Employee({ username, name, email, password });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send({ message: "Sign in successful" });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
