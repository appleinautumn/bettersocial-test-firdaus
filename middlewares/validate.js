const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');

function validate(req, res, next) {
  try {
    validationResult(req).throw();
    next();
  } catch (e) {
    throw createError(StatusCodes.BAD_REQUEST, e.errors[0].msg);
  }
}

module.exports = {
  validate,
};
