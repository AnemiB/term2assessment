const express = require('express');
const router = express.Router();
const User = require('../Models/User');

router.post('/register', async (req, res) => {
    const { username, name, email, password, usertype} = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: "Username or email already exists" });
        }

        const user = new User({ username, name, email, password, usertype});
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: "Could not register user" });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch users" });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {

        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: "Sign in successful", user });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: "Sign in failed" });
    }
});



module.exports = router;
