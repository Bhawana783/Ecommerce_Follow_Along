// Import the ErrorHandler class from the utils/ErrorHandler module
// This is used for creating and throwing custom errors
const ErrorHandler = require("../utils/ErrorHandler");

// Import the catchAsyncErrors utility
// This is a middleware to handle errors in asynchronous functions automatically
const catchAsyncErrors = require("./catchAsyncError");

// Import the jsonwebtoken (JWT) library
// This library is used for creating, signing, and verifying JSON Web Tokens
const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user info to request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = isAuthenticated;
