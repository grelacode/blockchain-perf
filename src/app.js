'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('./constants/http_codes');
const router = require('./routes/router');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = NOT_FOUND;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || INTERNAL_SERVER_ERROR);
    res.json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;