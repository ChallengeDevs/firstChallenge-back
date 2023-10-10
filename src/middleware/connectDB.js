const MONGOOSE = require('mongoose');

async function connectBD(req = null, res = null, next = null) {
  try {
    await MONGOOSE.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connect BD!');
    try { next(); } catch { };
    return MONGOOSE
  } catch (error) {
    return console.error(`Error: ${error}`);
  }
}

module.exports = connectBD;