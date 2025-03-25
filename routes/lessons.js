const express = require('express');
const router = express.Router();

// Mock lessons (Replace with DB fetch)
const lessons = [
  { id: 1, title: 'React Basics', content: 'Introduction to React' },
  { id: 2, title: 'State & Props', content: 'Understanding State Management' },
];

router.get('/', (req, res) => {
  res.json(lessons);
});

module.exports = router;
