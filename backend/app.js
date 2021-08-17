var createError = require('http-errors');
var path = require('path');

var express = require('express');
var logger = require('morgan');

let ownersRouter = require('./src/resources/owners/routes');
let leadMechanicsRouter = require('./src/resources/leadMechanics/routes');
let garagesRouter = require('./src/resources/garages/routes');
let carsRouter = require('./src/resources/cars/routes');
let transactionsRouter = require('./src/resources/transactions/routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/owners', ownersRouter);
app.use('/leadMechanics', leadMechanicsRouter);
app.use('/garages', garagesRouter);
app.use('/cars', carsRouter);
app.use('/transactions', transactionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
