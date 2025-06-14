const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, hashed],
        function (err) {
            if (err) return res.status(400).json({ error: "Email already exists" });
            res.json({ success: true });
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email=?`, [email], async (err, user) => {
        if (!user) return res.status(400).json({ error: "User not found" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(400).json({ error: "Invalid password" });

        const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '7d' });
        res.json({ token, name: user.name });
    });
});

module.exports = router;
