const app = require("./app");
const connectDatabase = require("./db/Database");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server for handling uncaught exception");
    process.exit(1);
});

// Load config before anything else
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/.env" });
}

// Middleware for cookies (add this before app routes load)
app.use(cookieParser());

// Connect to database
connectDatabase();

// Start server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection.");
    server.close(() => {
        process.exit(1); 
    });
});
