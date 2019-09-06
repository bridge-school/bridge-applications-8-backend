const express = require('express');
const router = express.Router();

const cohortsController = require("./cohorts.controller");

router.get('/', cohortsController.index);

module.exports = {
  cohortsRouter: router
}