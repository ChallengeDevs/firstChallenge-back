function routes(app) {
  app.use('/get-countries', require('./routes/createCountries'));
  app.use('/get-all', require('./routes/getCountries'));
  return;
}

module.exports = routes;