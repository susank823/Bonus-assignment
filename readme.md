## Workout Tracker Web Application

This is a simple web application built using Node.js, Express, and MongoDB to track workout details. The application follows the MVC (Model-View-Controller) pattern for better code organization.

### Project Structure
```
root
│
├── controllers
│   ├── auth.js         // Handles user authentication logic
│   └── workout.js      // Manages workout data logic
│
├── models
│   ├── user.js         // Defines the User model schema
│   └── workout.js      // Defines the Workout model schema
│
├── routes
│   ├── auth.js         // Routes for authentication (login, register, logout)
│   └── workout.js      // Routes for managing workout data (add, edit, remove)
│
├── static
│   ├── css
│   │   └── bootstrap.min.css         // Bootstrap CSS file
│   ├── js
│   │   ├── jquery.min.js             // jQuery library
│   │   └── bootstrap.bundle.min.js   // Bootstrap JS file
│
├── views
│   ├── base
│   │   ├── header.ejs    // Header template for consistent header across pages
│   │   └── footer.ejs    // Footer template
│   ├── add.ejs           // View for adding new workout details
│   ├── edit.ejs          // View for editing workout details
│   ├── home.ejs          // Home page displaying workout tracker details
│   ├── login.ejs         // Login page
│   └── register.ejs      // Register page
│
├── .env               // Environment variables configuration file (not included in the repository)
├── .gitignore         // Defines which files to ignore in version control
├── db.js              // Mongoose connection configuration
├── isAuthenticated.js // Check logged users to let them access add/edit/remove routes
├── package-lock.json  // Auto-generated file for npm dependencies
├── package.json       // Contains project metadata and dependencies
├── passport.js        // Helper codes for Passport-jwt
└── server.js          // Entry point for the Node.js server
```

### How to Run
- Install Dependencies: Run npm install to install all required dependencies.
- Set Up Environment Variables: Create a .env file and add necessary environment variables like MongoDB connection URI, session secret and port.
- Run the Application: Execute node server.js or npm start to start the server.
- Access the Application: Open a browser and navigate to http://localhost:8000 or 8080 to use the application.


### Additional Notes
* This application uses Express.js for handling routes, controllers for business logic, and Mongoose as an Object Data Modeling (ODM) library for MongoDB.
* MVC pattern separation helps in maintaining a clean codebase with clear separation of concerns.
* Styling is implemented using Bootstrap CSS, providing a clean and responsive UI.
* Flash messages are used for user notifications upon login, registration, etc.