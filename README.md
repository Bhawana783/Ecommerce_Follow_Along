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

## Milestone19

Overview
In this milestone, we created a cart page UI that displays the products fetched from the backend, and implemented functionality to increase and decrease product quantities using dedicated buttons. We also built new backend endpoints to handle these actions seamlessly.

🔧 Features Implemented
1️⃣ Frontend Cart Page (Cart.jsx)

Displays cart products fetched from the backend
Shows product image, name, price, and quantity
Includes + and - buttons to increase or decrease quantity
Supports real-time updates on the UI
2️⃣ Backend Cart Endpoints (cart.js)

GET /api/cart/user/:email - Fetches cart products for the user
POST /api/cart/increase/:email/:productId - Increases product quantity
POST /api/cart/decrease/:email/:productId - Decreases product quantity (min 1)
3️⃣ Error Handling

Handles errors like product not found, empty cart, or invalid user
Supports both frontend error messages and backend error responses
🛠️ Code Breakdown
Frontend - Cart.jsx
State Management: Manages cart data with useState()
Effect Hook: useEffect() fetches cart data on page load
Event Handlers: Handles button clicks for quantity control
Styling: Responsive design with Tailwind CSS
Backend - cart.js
Routes: New routes for fetching cart and updating quantities
Database Operations: Uses Mongoose to find, update, or modify cart data
Error Handling: Returns appropriate status codes and messages

## Milestone20

# 🎯 Ecommerce Project - Milestone 20: Profile Page & User Data Endpoint
🌟 Overview

In this milestone, we created a Profile Page frontend and a backend User Data Endpoint. The profile page dynamically fetches and displays user details, including the profile photo, name, email, and addresses.

🎯 Learning Goals
By completing this milestone, I have:

Built a backend endpoint to fetch user data by email.

 Created a frontend profile page to display user information.

Displayed profile photo, name, email, and addresses neatly.

Handled missing addresses with a "No address found" message.

Added an "Add Address" button for future functionality.

🛠️ Tech Stack

Frontend: React (Vite), TailwindCSS, Axios

Backend: Express.js, Mongoose, MongoDB

Database: MongoDB Atlas

Deployment: GitHub Pages (frontend) & Render (backend)


## Milestone21

In this milestone, we created a frontend page to input addresses.

✅ Features Implemented

Address Form Page with the following fields:

Country

City

Address Line 1

Address Line 2

Zip Code

Address Type (Home/Work)

State Management for form data.

Navigation from Profile Page to the Address Form when 'Add Address' is clicked.

# 🛍️ Ecommerce Project

Welcome to the Ecommerce Project! 🚀  
This project is a full-stack ecommerce web application with user authentication, product management, cart functionality, and user profile handling.  

---

## 🌟 Milestone 22: Backend Address Endpoint

In this milestone, we built a backend API to **save user addresses** into the database. This ensures users can manage multiple addresses from their profile page.  

---

### 🎯 Learning Goals  

By the end of this milestone, you’ll understand how to:  
- Create a **backend endpoint** to receive address data from the frontend.  
- Store the **address** inside the **user profile** collection in **MongoDB**.  
- Handle API requests, database updates, and error responses properly.  

### Ecommerce Project - Milestone 23
## Milestone Overview
In this milestone, we implemented the Place Order functionality by creating a Select Address page in the frontend and defining an Order Schema in the backend.

Learning Outcomes
By completing this milestone, we:
   Added a "Place Order" button inside the cart page.

   Created a Select Address page to display all saved addresses and allow users to select one.
  
   Wrote a Mongoose schema to store order details in the database.
  
   Developed a backend endpoint to fetch all saved addresses for a user.

Implementation Details
Frontend:
Created a "Place Order" button inside the cart page.

Navigated to the Select Address page upon clicking the button.

Displayed all saved addresses with an option to select one.

Backend:
Created an Order Schema to store order details in MongoDB.

Developed an API endpoint to retrieve user addresses from the database.

## Milestone 24: Order Confirmation Page
Overview
In this milestone, we have implemented the Order Confirmation Page, which displays:

All the products being ordered

 The selected delivery address

The total price of the order

A "Place Order" button to finalize the purchase

Features Implemented
Product Display - Lists all the items in the order.

Delivery Address - Shows the selected address for delivery.

Total Price Calculation - Displays the final amount for the order.

Place Order Button - Allows users to confirm their purchase.

 Tech Stack
Frontend: React (Vite), Tailwind CSS

Backend: Express.js, MongoDB

Deployment: GitHub Pages (Frontend), Render (Backend)

## Milestone25

Place Order API Implementation
Overview
In this milestone, we implemented a backend endpoint to handle order placement. This API receives product details, user information, and address details, processes the order, and stores it in the MongoDB database.

Features Implemented 
Created a new backend endpoint to place an order.

Retrieved the _id of the user using their email.

Processed multiple product orders with the same delivery address.

Stored order details in MongoDB using the orders collection.

Backend Implementation 

 Created Order Schema (models/Order.js)
Defined the structure of the Order collection in MongoDB.

 Created a Place Order Endpoint (routes/orderRoutes.js)
Accepts products, user email, and address details.

Retrieves user _id using the email.

Creates a separate order entry for each product.

Saves orders in the database.

## Milestone26 

Ecommerce Project - Milestone 26 
Fetch User Orders API Implementation

Overview

In this milestone, we implemented a backend endpoint to fetch all orders placed by a specific user. This API receives the user’s email, retrieves their _id, and fetches all associated orders from the MongoDB database.

Features Implemented 

Created a new backend endpoint to fetch all orders of a user.

Retrieved the _id of the user using their email.

Queried the database to get all orders associated with the user.

Sent the list of orders in the response.

Backend Implementation 
 Created a GET Order Endpoint (routes/orderRoutes.js)
Accepts the user’s email as a query parameter.

Finds the corresponding _id of the user.

Retrieves all orders associated with the user from the orders collection.

Returns the orders in the response.




## Milestone27

### Milestone 27 - My Orders Page

Overview

In this milestone, we focused on creating the frontend page for displaying user orders. This page allows users to view all their orders, which are fetched from the server through a GET request to the my-orders endpoint. The user's email is sent as part of the request to fetch the respective orders.

Learning Goals

By the end of this milestone, the following objectives were achieved:

Created the My Orders page to display user orders.

Sent a GET request to the my-orders endpoint, passing the user’s email to retrieve the relevant orders.

Displayed the fetched orders on the frontend.

Added the My Orders page to the navigation bar for easier access.


Steps Followed

Created the My Orders Page:

Designed the layout for the My Orders page that will show all the orders placed by the user.

Fetching Orders:

Sent a GET request to the my-orders API endpoint, including the user's email in the request body.

Retrieved all orders associated with the user.

Displaying Orders:

Displayed the orders in a user-friendly format on the frontend.

Navigation:

Added the My Orders page to the navigation bar for easy access by the user.

Technologies Used

Frontend: HTML, CSS, JavaScript (React or other libraries as applicable)

Backend: Bruno (for managing and validating users), API to handle fetching orders

Database: MySQL (or other DB depending on your project setup)



Acknowledgments
Thanks to the Kalvian community for supporting the learning process.

Special thanks to the Bruno framework for handling the backend operations.


# 🛒 Milestone 28 – Cancel Order Functionality

Welcome to Milestone 28 of the E-commerce Follow-Along Project!

##  What's New in This Milestone?

In this milestone, I implemented **Cancel Order** functionality to allow users to cancel their orders directly from the **My Orders** page.

---

##  Features Implemented

### 1. Cancel Order Button on My Orders Page
- Each order item now includes a **"Cancel Order"** button.
- This button is **only visible** for orders that have **not been canceled** yet.

### 2. Backend Endpoint for Canceling an Order
- A new API endpoint `/cancel-order/:id` (or similar) was created.
- It:
  - Receives the `orderId` from the request.
  - Fetches the order from the database.
  - Updates its `status` to `"canceled"`.
  - Saves the updated order back to the database.

### 3. Status Update on Frontend
- Once an order is canceled:
  - The UI is updated to reflect the new status.
  - The **"Cancel Order"** button disappears for that order.

---

##  Tech Stack Used

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB Atlas

---

##  How to Test?

1. Go to the **My Orders** page.
2. Find any active (non-canceled) order.
3. Click the **"Cancel Order"** button.
4. Confirm that the status updates to "Canceled" and the cancel button disappears.
5. You can verify backend changes by checking the updated order in the database.

---

##  Folder Structure Affected

- `frontend/pages/MyOrders.jsx` – UI changes to show/hide cancel button
- `backend/routes/orderRoutes.js` – New endpoint to cancel order
- `backend/controllers/orderController.js` – Logic to update order status

---


##  Summary

This milestone helped me understand how to:
- Update records in MongoDB.
- Create dynamic buttons based on order status.
- Manage UI reactivity based on backend changes.

---

##  Feedback

**How did I like this assignment?**  
✅ Very Good – It was practical and helped reinforce full-stack skills!


# 💳 Milestone 29 – Integrating Online Payment Gateway (PayPal)

Welcome to Milestone 29 of the E-commerce Follow-Along Project!

---

##  What's New in This Milestone?

In this milestone, I laid the foundation for integrating **PayPal Online Payments** into the order process.

---

##  Features Implemented

### 1. Created PayPal Sandbox Developer Account
- Set up a developer account on [PayPal Developer Dashboard](https://developer.paypal.com/).
- Created **sandbox account** and saved:
  - **User ID**
  - **Client ID**

### 2. Updated Order Confirmation Page with Payment Options
- Added **radio buttons** to choose between:
  - **Cash on Delivery (COD)**
  - **Online Payment (PayPal)**
- If **Online Payment** is selected, the placeholder for PayPal buttons is displayed.
  - *(PayPal button logic to be implemented in Milestone 30)*

---

##  How to Test?

1. Navigate to the **Order Confirmation Page**.
2. You will see two payment options:
   - COD
   - Online Payment
3. Selecting Online Payment shows a placeholder area for PayPal buttons.

---

##  Folder Structure Affected

- `frontend/pages/OrderConfirmation.jsx` – Updated UI with radio buttons
- `.env` – (If required) Store the PayPal sandbox Client ID securely

---


##  Summary

This milestone helped me understand how to:
- Set up PayPal Developer credentials
- Add payment method options in the UI
- Prepare the app for online payment integration

---

##  Feedback

**How did I like this assignment?**  
✅ Very Good – It was insightful to explore payment integration!

## Milestone 30 - PayPal Payment Integration

In this milestone, we implemented an online payment system using the PayPal API and `@paypal/react-paypal-js` library. We created a sandbox account, obtained the client ID, and integrated PayPal buttons that support credit/debit card payments.

### Features:
- PayPalScriptProvider wraps the app to load PayPal SDK.
- PayPalButtons renders the payment UI.
- Transaction alert displays payer's name on successful payment.

## Milestone 31 - Global State Management with Redux

In this milestone, we implemented Redux for managing global state. We created a `store` with a `userReducer` to manage the user's email state. The email can now be accessed from anywhere in the app using the global state.

Key files:
- `store/store.js`: Configures the Redux store with the user reducer.
- `store/userActions.js`: Contains action to set email.
- `main.jsx`: Wrapped the app with `<Provider>` to make the Redux store available globally.


