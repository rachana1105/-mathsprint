
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mathsprint.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        topic TEXT,
        question TEXT,
        options TEXT,
        correct INTEGER,
        explanation TEXT,
        difficulty TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS scores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        score INTEGER,
        total INTEGER,
        accuracy INTEGER,
        topics TEXT,
        createdAt TEXT
    )`);
});

module.exports = db;
