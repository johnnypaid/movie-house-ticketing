const express = require('express');
const router = express.Router();

const Movies = require('../controller/movies.controller');

router.get('/', Movies.findAllPublished);
router.get("/:id", Movies.findOne);


module.exports = router;
