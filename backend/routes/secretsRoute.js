import express from 'express';
import { Secret } from "../models/secretModel.js";

const router = express.Router();

// Route for saving a new secret
router.post("/", async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Send all required fields: content",
            });
        }

        const newSecret = {
            content: req.body.content,
        };

        const secret = await Secret.create(newSecret);

        return res.status(201).send(secret);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for getting all secrets from the database
router.get('/', async (req, res) => {
    try {
        const secrets = await Secret.find({});

        return res.status(200).json({
            count: secrets.length,
            data: secrets,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for getting a secret by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const secret = await Secret.findById(id);

        if (!secret) {
            return res.status(404).send({ message: 'Secret not found' });
        }

        return res.status(200).json(secret);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for updating a secret
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Send all required fields: content",
            });
        }

        const { id } = req.params;

        const result = await Secret.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Secret not found' });
        }

        return res.status(200).send({ message: 'Secret updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for deleting a secret
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Secret.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: 'Secret not found' });
        }

        return res.status(200).send({ message: 'Secret deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
