const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const lessonsRoutes = require('./routes/lessons');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/smart-education')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('DB Error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
