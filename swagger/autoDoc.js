const mongooseToSwagger = require('mongoose-to-swagger');
const SchemaCountries = require('../src/models/countries')
const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0',
  language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['../index.js', '../src/routes.js'];

let doc = {
  info: {
    version: "1.0.0",
    title: "Júlio API Challenge",
    description: "Challenge Júlio API documentation"
  },
  servers: [
    {
      url: "http://localhost:4000/",
      description: "Server localhost"
    },
    {
      url: "https://first-challenge-back.vercel.app/",
      description: "Server de produção"
    }
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  components: {
    schemas: {
      Countries: mongooseToSwagger(SchemaCountries)
    }
  },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated can be found in the archive at: " + outputFile);
  if (process.env.NODE_ENV !== 'production') require("../index.js");
});