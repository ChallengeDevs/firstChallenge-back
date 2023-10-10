const express = require('express');
const router = express.Router();
const connectBD = require('../middleware/connectDB')
const SchemaCountries = require('../models/countries')

router.get('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Get All Countries']
    // #swagger.description = "Endpoint to get all countries from the database."
    const responseDB = await SchemaCountries.find({});

    if (responseDB.length > 0) {
      res.status(200).json({ status: "ok", statusMessage: "Countries listed successfully!", response: responseDB });
    } else {
      res.status(404).json({ status: "error", statusMessage: "No countries found in the database." });
    }
  } catch (error) {
    return res.status(500).json({ status: "error", statusMessage: `Error: ${error}` });
  }
});

module.exports = router;