const express = require('express');

const router = express.Router();

module.exports = (apiController) => {
  router.post('/v1/register', (req, res, next) => apiController.register(req, res, next));

  return router;
};
