It is a comprehensive web application that allows users to discover, manage, and review travel accommodations.
Live Project: View Live Project

Features
User Authentication:

Secure user registration and login functionality powered by Passport.js.
Supports user session management, ensuring that users remain logged in across sessions.
Dynamic Listings:

Browse various travel listings with detailed information, including descriptions, pricing, availability, and images.
Filter and search listings based on user preferences for easy navigation.
Review System:

Submit reviews for listings, providing valuable feedback to other users.
Ratings and comments enhance community interaction and trust.
Responsive Design:

Built using EJS and Bootstrap for a clean and responsive UI across devices.
Session Management:

Utilizes connect-mongo for persistent session storage.
Configured session cookies enhance security against XSS attacks.
Flash Messages:

Provides immediate feedback on user actions through flash messages for successes and errors.
Error Handling:

Custom error handling middleware for graceful error management.
RESTful API Design:

Implements a RESTful structure for managing listings and reviews.
Tech Stack
Backend:

Node.js: Server-side JavaScript runtime.
Express.js: Web framework for routing and middleware.
Mongoose: ODM library for MongoDB.
Database:

MongoDB: NoSQL database for user and listing data.
Frontend:

EJS (Embedded JavaScript): Templating engine for rendering views.
Bootstrap: CSS framework for responsive design.
Authentication:

Passport.js: Middleware for user authentication.
Session Management:

express-session: Middleware for session handling.
connect-mongo: MongoDB session store.
Environment Management:

dotenv: Module for loading environment variables.
