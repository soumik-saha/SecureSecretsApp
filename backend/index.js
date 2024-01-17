import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import flash from 'express-flash';
import session from 'express-session';
import passport from './authentication/passport.js';
import secretsRoute from './routes/secretsRoute.js';
import registrationRouter from './routes/registrationRouter.js';
import loginRouter from './routes/loginRouter.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

// Middlewares for passport.js
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Backend is running successfully");
});

app.use('/secrets', secretsRoute);
app.use('/register', registrationRouter);
app.use('/login', loginRouter);

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });