const isAuthenticated = (req, res, next) => {
    // Passport adds the user object to the request if authentication succeeds
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware
    }

    // User is not authenticated, redirect or send an error response
    return res.status(401).json({ message: 'Unauthorized' });
};

export default isAuthenticated;