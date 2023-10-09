function routes(app) {
  app.use('/get-countries', require('./routes/createCountries'));
  return;
}

module.exports = routes;