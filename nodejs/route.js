const express = require('express');
const router = new express.Router;
const Staff = require('./staffController');

router.post('/staff/create',Staff.create);

module.exports= router;