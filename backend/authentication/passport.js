// passport.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            // Invalid email or password
            return done(null, false, { message: 'Invalid email or password' });
        }

        // Compare hashed password using bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // Invalid email or password
            return done(null, false, { message: 'Invalid email or password' });
        }

        // Authentication succeeded
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

// Serialize and deserialize user functions (if not already defined)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

export default passport;
