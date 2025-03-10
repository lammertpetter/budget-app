const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors({
    origin: ['https://budget-9rotwbisq-lammerts-projects.vercel.app', 'https://budget-app-steel-nine.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization','Access-Control-Allow-Origin'],
}));
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/authRoutes')); // Rutas de autenticación
app.use('/api/user', require('./routes/dataRoutes')); // Rutas de datos del usuario

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Manejo de errores para EADDRINUSE
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw err;
    }
});