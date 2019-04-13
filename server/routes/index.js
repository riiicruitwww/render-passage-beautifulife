const express = require('express');
const createError = require('http-errors');
const task = require('../data/task_container.json');

const router = express.Router();

router.get('/:type', (req, res, next) => {
  if (req.params.type !== task.type) {
    return next(createError(400));
  }

  res.json({
    task
  });
});

module.exports = router;
