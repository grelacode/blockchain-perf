'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const userBlock = req.body;
  return res.send(userBlock);
} );

module.exports = router;