const express = require('express');
const router = express.Router();

const doctors = require('./doctors');

router.get('/doctors/:cityName',doctors.get);

module.exports = router;
