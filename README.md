# Ecommerce_Follow_Along

# Milestone-1
created readme.md[text]
 In this milestone, we begin the exciting journey of building an e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project is designed to provide you with hands-on experience in building a full-stack web application from scratch.

 ### Key Features of the Project
In this project, we will be building a fully functional e-commerce platform with the following features:

### REST API Creation: Learn how to build scalable and efficient APIs for handling user authentication, product management, and order processing.
### Authentication: Implement secure login and registration functionalities for users.
### Database Schema Design: Design and implement MongoDB schemas to structure the data for users, products, and orders.
Backend Development: Set up a robust server-side application using Node.js and Express.js.

Frontend Development: Use React.js to create the user interface for browsing products, registering users, and making purchases.
Core Concepts Covered

In this milestone, we will focus on understanding and implementing:

MERN Stack Overview: Introduction to the technologies used in the MERN stack and how they integrate to build a full-stack application.

REST API Structure and Endpoints: Learn how to create RESTful APIs to handle requests for user authentication, product data, and orders.

Database Schema Design: Understand how to structure the data in MongoDB using schemas for users, products, and orders.

User Authentication: Implement authentication functionality, ensuring that users can securely log in and access restricted resources.
# Milestone-3
In Milestone 3, we are focusing on creating a well-organized structure for the backend of a web application. The goal is to organize our code in a way that makes it easier to maintain and scale over time. Here's a brief explanation of key components:

**Backend Folder Structure:**

Routes: This folder will hold all the endpoints of your application (e.g., /users, /products). Routes define the paths users or clients can visit and what happens when they do.

Controllers: These are responsible for handling the logic for each route. Controllers interact with models, process data, and send responses back to the user.

Models: These represent the structure of the data you're working with, typically related to your database. For example, a User model would define how user data is stored and interacted with.

Middleware: Middleware functions are executed before the final route handler. They can be used for tasks like authentication, logging, or input validation. Think of them as layers that "sit" between the request and the response.
Additional Concepts:

Utils: This refers to utility functions that provide helpful, reusable code for common tasks, like formatting dates or parsing data.
Middlewares: As mentioned, they act as intermediaries between the incoming request and the route handler. They're useful for tasks like checking if the user is logged in or validating inputs.
The structure helps you build clean, modular, and reusable code, which makes development smoother as your application grows. The concepts of routes, controllers, models, and middleware will become clearer as you implement them in your project.

# Milestone 5: Creating the Signup Page

## Overview
In this milestone, I focused on building the sign-up page for users to register. The page includes fields for the user’s full name, email, and password. After users fill out the form, their inputs are validated to ensure they meet the required criteria before submission.

## Key Features
- **Sign-Up Form**: A user-friendly sign-up form with fields for the name, email, and password.
- **Form Validation**: Input validation for name, email format, and password strength (minimum 6 characters).
- **Responsive Design**: The page is designed to be responsive and user-friendly on both desktop and mobile devices.



## Milestone 6 - Secure User Data and Password Encryption

In this milestone, the focus was on securely handling user data during the signup process. The key objectives and achievements are as follows:

### What Was Achieved

1. **Password Encryption:**
   - Implemented password hashing using the `bcrypt` library to ensure user passwords are stored securely.
   - Passwords are now encrypted before being stored in the database, making it nearly impossible for attackers to retrieve them, even if they gain access to the database.

2. **User Data Storage:**
   - Created a secure backend endpoint for the signup process, where user details (such as name, email, and password) are stored in the database.
   - Only the encrypted password is stored, ensuring user privacy is maintained.

3. **Database Integration:**
   - Integrated the backend with the database to store user data securely, and ensured that the data is validated before storing.
   - Utilized encryption techniques to comply with security standards and ensure user privacy.

### Key Security Considerations
- **Encryption:** Passwords are encrypted using `bcrypt` before being saved to the database. This makes passwords unreadable and adds a layer of security.
- **Privacy Protection:** The system is designed to prevent sensitive information like passwords from being exposed or stored in plain text.
- **Compliance:** The encryption strategy ensures that we follow best practices for data security and compliance with relevant standards.

The application is now more secure, with encrypted passwords stored in the database, protecting user information from unauthorized access.


## Milestone 4 - User Model, User Controller, and File Uploads

In this milestone, we made significant progress by adding user data management and enabling file uploads to the application. Here's a summary of what was achieved:

### What Was Achieved

1. **User Model Creation:**
   - Created a **User Model** to define how user data is structured in the database.
   - The User Model uses a **Schema** to define fields such as `name`, `email`, `password`, and additional fields like `profilePicture` to store user information.
   - This model helps ensure consistency and structure when saving and retrieving user data.

2. **User Controller:**
   - Developed a **User Controller** to handle various user-related actions.
   - The controller includes functions for user registration, authentication, and retrieving user data.
   - It also manages the logic related to user data validation, encryption of passwords, and handling any business logic before saving or retrieving user data from the database.

3. **File Uploads with Multer:**
   - Configured **Multer** to handle file uploads within the application.
   - Enabled users to upload files such as profile pictures, which are then stored on the server.
   - Multer helps manage file storage, validation, and handles the security concerns related to file uploads (such as limiting file size and type).

### Key Features Added
- **User Data Model:** With the use of Mongoose Schema, we defined and structured user data for seamless storage and retrieval.
- **User Controller Functions:** Ensured that actions like user registration and profile data retrieval are efficiently handled by the server.
- **File Uploading System:** Enabled users to upload files, store them securely on the server, and associate them with user profiles.

### Security Considerations:
- **File Validation:** Multer's file filter ensures that only valid file types (e.g., images) are uploaded, preventing potential malicious files from being stored on the server.
- **Password Encryption:** As part of the User Model, we ensure that passwords are hashed and encrypted before being stored in the database.

This milestone sets up foundational features such as managing user data and handling file uploads, which are crucial for developing a fully functional user management system.

---

### Next Steps
In the upcoming milestones, we will continue to build on this foundation, adding more features to enhance the application, such as user authentication and profile management.

## Milestone 7 - User Login Implementation

### What was achieved in Milestone 7:
- Implemented a user login functionality with password validation using `bcryptjs`.
- Passwords are securely hashed and compared with the stored hashes in the database.
- Implemented a `login` route that accepts user credentials (email & password), verifies the user, and issues a JSON Web Token (JWT) for successful authentication.
- The login functionality is available via the `POST /api/auth/login` endpoint.

### Key Features:
- **Password Hashing:** Passwords are hashed using `bcryptjs` before saving to the database.
- **Token Generation:** Upon successful login, the server returns a JWT token for authenticated users.
- **User Verification:** Ensures that the user exists and that the entered password matches the hashed password in the database.

## Milestone 8 - What Was Achieved in This Milestone

In this milestone, I created a reusable product card component and displayed it dynamically on the homepage. Here are the key accomplishments:

- Created a `ProductCard` component that accepts `name`, `image`, and `price` as props.
- Used `map()` to iterate over a list of products and display each card on the homepage.
- Styled the card components using CSS to ensure a clean and responsive layout.
- The homepage now dynamically displays product cards, making it easy to showcase products.


# Ecommerce-Follow-Along

## Milestone 9 - Product Input Form

### Features Implemented:
- Created a form to input product details (name, description, price).
- Added functionality to upload multiple images.
- Validated input fields.
- Handled image uploads.

### Next Steps:
- Implement backend API to save product details in the database.
- Restrict product uploads to authorized users.
# Ecommerce-Follow-Along

## Milestone 10: Creating a Product Schema and API Endpoint

### Features Implemented:
- **Mongoose Schema** for product data.
- **Validation** to ensure data integrity.
- **POST API Endpoint** to add products.
- **MongoDB Connection** for data storage.

### Technologies Used:
- Node.js
- Express
- MongoDB
- Mongoose
- Postman (for testing)

## Milestone 11 - Displaying Products Dynamically

## 🚀 Overview

In this milestone, we made our home page dynamic by fetching product data from MongoDB and displaying it using a React component. We created an API endpoint to retrieve all stored products and used it to display the products on the fronten🎯 Learning Goals

By completing this milestone, you will:

Learn how to write an API endpoint to fetch product data from MongoDB.

Understand how to make API calls from the frontend.

Dynamically display fetched data using a React component.


## Milestone 12: My Products Page – Filtering Products by User Email
## 📌 Overview
In this milestone, we implemented a My Products page where users can view all the products they have added. This was done by:

Writing an API endpoint to fetch products based on the user's email.
Retrieving the filtered product data on the frontend.
Dynamically displaying the products using the previously created Product Card component.
## 🎯 Learning Outcomes
By completing this milestone, I learned:
✅ How to filter data in MongoDB using specific constraints (email).
✅ How to fetch filtered data from an Express.js API.
✅ How to dynamically display fetched data on the frontend using React.

## 🔧 Implementation Details
## Backend
Created an Express.js API endpoint to fetch products by email.
Used Mongoose to filter products stored in MongoDB.
Sent the filtered product data as a response to the frontend.
## Frontend
Implemented a function to fetch filtered products from the backend.
Passed the data to the Product Card component to display it dynamically.

## Ecommerce Follow-Along - Milestone 13 🚀
## Milestone 13: Implementing Product Editing Functionality
## Overview
In this milestone, we implemented the ability to edit existing products. This includes:
 Creating an API endpoint to update product details in MongoDB.
 Adding an Edit button to each product in the frontend.
 Autofilling the edit form with the product’s existing details.
 Updating the database when the user modifies and submits the form.

## Milestone 14: Implementing Product Deletion

## 📌 Overview

In this milestone, we have implemented the functionality to delete a product from MongoDB using its ID. A delete button has been added to each product card, allowing users to remove products dynamically.

## 🚀 What We Did

Created a DELETE API endpoint in the backend to remove a product by its ID from MongoDB.

Updated the frontend by adding a Delete button to each product card.

Implemented the delete request to send the product ID to the backend when the delete button is clicked.

Handled response and UI updates to reflect the deletion in real time.

## 🛠️ Technical Implementation

## Backend:

Created a DELETE route in server.js to handle product deletion.

Used findByIdAndDelete to remove the product from the database.

## Frontend:

Added a Delete button to each product card.

Implemented a function to send a DELETE request with the product ID.

Removed the deleted product from the UI dynamically.


## Milestone 15

## Features Implemented:
- Created a reusable Navbar component (`Nav.jsx`).
- Added navigation links to Home, My Products, Add Product, and Cart.
- Made the Navbar **responsive** using Tailwind CSS and React Hooks.
- Integrated Navbar into all pages (`App.jsx`).
- Used **React Router** for smooth navigation



# Milestone 16 : In this milestone, we will create an product info page that display all the product data and choose quantity and add to card button.
Key feautures:
Created an new page that display all the product data.
Add quantity and add to card button.
Summary : We created an ProductDetails page to view the product with desired id, and added a count button with increase(+) and decrease(-) option in i
Tech Stack : React - frontend - src - pages - ProductDetails.jsx 


Tech Stack : React - frontend - src - pages - ProductDetails 

# Ecommerce Project - Milestone 17

## Features Implemented
- Created a `Cart` schema to store user cart data.
- Modified `User` schema to include a `cart` field.
- Developed an endpoint to add products to the cart.
- Tested API using Postman/Bruno.

# 🛒 Milestone 18: Fetch Products from User’s Cart  

## 📌 Overview  
In this milestone, we implemented a **backend endpoint** to fetch all products inside a user's cart using their **email**. This enables the frontend to dynamically display the cart items on the cart page.

---

## 🚀 Updates in Backend  

### **1️⃣ Created Cart Fetch API in `routes/cart.js`**  
- Added a **GET** endpoint to retrieve products in the user's cart.
- Used **Mongoose `populate()`** to include product details.

### **2️⃣ Updated `server.js` to Include Cart Routes**  
- Integrated the cart routes with `app.use("/api/cart", cartRoutes)`.
- Ensured proper error handling for API requests.

---

## 🛠️ API Endpoints  

| Method | Endpoint | Description |
|--------|---------|------------|
| `POST` | `/api/cart/add-to-cart` | Adds a product to the user's cart. |
| `GET` | `/api/cart/user/:email` | Fetches all products inside the user's cart. |




