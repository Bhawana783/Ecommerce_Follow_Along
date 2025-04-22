const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");

router.get("/dashboard", isAuthenticated, (req, res) => {
    res.status(200).json({
        message: `Welcome back, user ${req.user.email}`,
        user: req.user,
    });
});

module.exports = router;
