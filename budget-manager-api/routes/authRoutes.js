// filepath: budget-manager-api/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // Ruta para el registro
router.post('/login', login); // Ruta para el inicio de sesión

module.exports = router;