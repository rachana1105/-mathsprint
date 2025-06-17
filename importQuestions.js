
const db = require('./database');
const questionBank = require('./frontend/questions.js');

db.serialize(() => {
    Object.keys(questionBank).forEach(topic => {
        questionBank[topic].forEach(q => {
            db.run(
                `INSERT INTO questions (topic, question, options, correct, explanation, difficulty)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    topic,
                    q.q,
                    JSON.stringify(q.options),
                    q.correct,
                    q.explanation,
                    q.difficulty
                ]
            );
        });
    });

    console.log("? All questions imported successfully.");
});