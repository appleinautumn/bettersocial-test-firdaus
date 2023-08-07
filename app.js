require('dotenv').config();

const cors = require('cors');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');

const apiRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init database
const db = await createDatabase(process.env.DB_URL);

// init dependencies
const userRepository = createUserRepository(db);
const userService = createUserService(userRepository);
const apiController = createApiController(userService);

// init routes
app.use('/', apiRouter(apiController));

app.get('/', (req, res) => {
  res.send("bettersocial-test");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.json({
    message: err.message,
    data: null,
  });
});

module.exports = app;
