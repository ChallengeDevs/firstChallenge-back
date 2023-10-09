const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Is required!',
    },
    population: {
      type: Number,
      default: '',
    },
    continents: {
      type: String,
      required: 'Is required!',
    },
    capital: {
      type: String,
      default: '',
    },
    flags: {
    },
  },
  {
    timestamps: true
  }
);

const SchemaCountries = mongoose.models.Countries || mongoose.model('Countries', schema);
module.exports = SchemaCountries;