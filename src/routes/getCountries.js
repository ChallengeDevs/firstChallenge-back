const express = require('express');
const router = express.Router();
const connectBD = require('../middleware/connectDB')
const countriesSchema = require('../models/countries')

router.get('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Get All Countries']
    // #swagger.description = "Endpoint to get all countries from the database."
    const responseDB = await countriesSchema.find({});

    res.status(200).json({ status: "ok", statusMessage: "Countries listed successfully!", response: responseDB })
  } catch (error) {
    return console.error(`Erro: ${error}`)
  }
});

module.exports = router;