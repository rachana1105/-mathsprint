# MathSprint

MathSprint is a timed math practice quiz app. Users sign up, pick topics, answer a sprint of questions, and get scored on accuracy — with score history saved per user.

## Stack

- **Backend**: Node.js, Express, SQLite3
- **Auth**: JWT-based sessions, bcrypt for password hashing
- **Frontend**: Vanilla HTML/CSS/JS

## Features

- User signup/login (passwords hashed with bcrypt, sessions via JWT)
- Topic selection and timed question sprints
- Score tracking with accuracy percentage, saved per user
- A bank of ~80 pre-loaded questions across topics/difficulties

## Getting started

```bash
npm install
cp .env.example .env   # fill in your own JWT_SECRET
npm run import         # loads questions.js into the SQLite database
npm start
```

The app runs at `http://localhost:5000` (backend also serves the frontend as static files).

## Environment variables

See `.env.example`:

- `PORT` — server port (default 5000)
- `JWT_SECRET` — secret used to sign auth tokens. Use a long random string, e.g. generate one with `openssl rand -hex 32`.

## Project structure

```
mathsprint/
├── server.js              # Express app entry point
├── database.js            # SQLite schema (questions, users, scores)
├── importQuestions.js      # seeds the questions table from frontend/questions.js
├── routes/
│   ├── auth.js             # signup/login
│   ├── authMiddleware.js   # JWT verification
│   ├── questions.js        # fetch questions by topic
│   └── score.js            # save/fetch scores
└── frontend/
    ├── index.html
    ├── script.js            # app logic: auth, quiz flow, scoring
    ├── questions.js          # question bank
    └── style.css
```

## Notes

- The SQLite database file (`mathsprint.db`) is created locally on first run and is git-ignored — it will contain real user accounts and scores once people sign up, so it should never be committed.
- `npm run import` needs to be run once to populate the questions table before the quiz has anything to serve.

## License

MIT — see [LICENSE](LICENSE).
