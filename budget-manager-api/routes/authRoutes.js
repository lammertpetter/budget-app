// filepath: budget-manager-api/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // Ensure this line is present
router.post('/login', login);

module.exports = router;