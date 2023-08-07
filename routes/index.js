const express = require('express');

const { validate } = require('../middlewares/validate');
const { registrationRules } = require('../modules/controller/api_request');

const router = express.Router();

module.exports = (apiController) => {
  router.post('/v1/register', registrationRules(), validate, (req, res, next) => apiController.register(req, res, next));

  return router;
};
