
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const authRoutes = require('./routes/auth');
const scoreRoutes = require('./routes/score');
const questionRoutes = require('./routes/questions');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/score', scoreRoutes);
app.use('/questions', questionRoutes);

app.use('/', express.static(path.join(__dirname,'frontend')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
