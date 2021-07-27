'use strict';

const express = require('express');
const router = express.Router();

const userMessageSchema = require('../schemas/user-message-schema');
const schemaValidator = require('../middlewares/schema-validator');

router.post('/block',
    schemaValidator(userMessageSchema),
    (req, res) => {
  const userBlock = req.body;
  return res.send(userBlock);
} );

module.exports = router;