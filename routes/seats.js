const express = require('express');
const router = express.Router();

const Seats = require('../controller/seats.controller');

router.get('/', Seats.findAllPublished);

module.exports = router;
