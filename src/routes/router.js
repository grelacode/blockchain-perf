'use strict';

const express = require('express');
const router = express.Router();

const userMessageSchema = require('../schemas/user-message-schema');
const schemaValidator = require('../middlewares/schema-validator');
const BlockchainController = require('../controllers/blockchainController');

router.post('/block',
    schemaValidator(userMessageSchema),
    BlockchainController.controllerMethod
  );

module.exports = router;