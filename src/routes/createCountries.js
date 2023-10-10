const express = require('express');
const router = express.Router();
const axios = require('axios');
const connectDB = require('../middleware/connectDB');
const SchemaCountries = require('../models/countries')

router.post('/', connectDB, async function (req, res, next) {
  try {
    // #swagger.tags = ['Create Countries']
    // #swagger.description = "Endpoint responsible for requesting countries in the API and sending them to the database."
    const responseAPI = await axios.get('https://restcountries.com/v3.1/all')

    if (responseAPI.status === 200) {
      const dataRes = responseAPI.data
      const firstTenObj = dataRes.slice(0, 10);
      const addedCountries = [];

      for (const element of firstTenObj) {
        let name = element.name.official;
        let population = element.population;
        let continents = element.continents[0];
        let capital = element.capital[0];
        let flags = element.flags;

        const existingCountrie = await SchemaCountries.findOne({ name });

        if (!existingCountrie) {
          await SchemaCountries.create({ name, population, continents, capital, flags });

          addedCountries.push(name)
        }
      };
      if (addedCountries.length > 0) res.status(200).json({ status: 'ok', statusMessage: 'Countries added successfully', addedCountries });
      else res.status(200).json({ status: 'ok', statusMessage: 'No new countries added' })

    } else {
      console.error('Erro na requisição para a API');
      res.status(500).json({ error: 'Erro na requisição para a API' });
    }

  } catch (error) {
    console.error(`Erro: ${error}`)
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;