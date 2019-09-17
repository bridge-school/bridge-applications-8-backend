const express = require('express');
const router = express.Router();

const cohortsController = require("./cohorts.controller");

router.get('/', cohortsController.index);
router.get('/:id', cohortsController.cohort);

module.exports = {
  cohortsRouter: router
}