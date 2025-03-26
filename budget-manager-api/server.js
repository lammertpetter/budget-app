const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Define allowed origins
const allowedOrigins = [
    'https://budget-app-steel-nine.vercel.app', // Production frontend
    'http://localhost:3000', // Local development (optional)
];

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies if needed
}));

app.options('*', cors()); // Handle preflight requests for all routes
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