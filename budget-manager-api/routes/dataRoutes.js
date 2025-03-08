const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.get('/data', auth, async (req, res) => {
    res.json(req.user.data);
});

router.post('/data', auth, async (req, res) => {
    req.user.data = req.body;
    await req.user.save();
    res.json(req.user.data);
});

module.exports = router;