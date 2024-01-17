import express from 'express';
import passport from '../authentication/passport.js';

const router = express.Router();

// Handle login form submission
router.post('/', passport.authenticate('local'), (req, res) => {
    const redirectTo = `${process.env.FRONTEND_URL}/dashboard/`;
    res.json({ message: 'Login successful', redirectTo});
});

export default router;
