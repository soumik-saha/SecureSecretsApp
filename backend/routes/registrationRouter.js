import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/userModel.js';

const router = express.Router();

// Route for create a new user
router.post('/', async (req, res) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send({
                message: "Send all required fields: username, email, password",
            });
        }

        const { username, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username,
            email,
            password: hashedPassword, // Save the hashed password to the database
        };

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
