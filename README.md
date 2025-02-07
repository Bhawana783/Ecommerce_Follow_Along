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

