// initializer.js
const { truncateTables } = require('./truncateTables'); // Assuming truncateTables is in a separate file

async function initializeApp() {
  // Other initialization routines, if any
  await truncateTables();
  // Other initialization routines, if any
}

module.exports = { initializeApp };
