const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Define the allowed origin for CORS
const allowedOrigin = 'https://budget-app-steel-nine.vercel.app';

// Middleware
app.use(cors({ origin: allowedOrigin })); // Updated CORS configuration
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes')); // Authentication routes
app.use('/api/user', require('./routes/dataRoutes')); // User data routes

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle EADDRINUSE error
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw err;
    }
});