
const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/get', (req, res) => {
    // TODO: query all rows from the questions table, parse the stored
    // `options` JSON string for each, and return the formatted question list
});

module.exports = router;
