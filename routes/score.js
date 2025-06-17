const express = require('express');
const db = require('../database');
const auth = require('./authMiddleware');
const router = express.Router();

router.post('/save', auth, (req, res) => {
    const { score, total, accuracy, topics } = req.body;

    // TODO: insert a row into the scores table (userId from req.userId,
    // score, total, accuracy, topics joined as a string, current timestamp)
});

module.exports = router;
