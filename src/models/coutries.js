const MONGOOSE = require('mongoose');

const esquema = new MONGOOSE.Schema(
  {
    name: {
      type: String,
      required: 'é obrigatório!',
    },
    population: {
      type: Number,
      default: '',
    },
    continents: {
      type: String,
      required: 'é obrigatório!',
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

const EsquemaPaises = MONGOOSE.models.Paises || MONGOOSE.model('Paises', esquema);
module.exports = EsquemaPaises;