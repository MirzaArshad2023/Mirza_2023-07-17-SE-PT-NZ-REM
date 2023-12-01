// initializer.js
const { truncateCollections } = require('./truncateCollections'); // Assuming truncateCollections is in a separate file

async function initializeApp() {
  // Other initialization routines, if any
  await truncateCollections();
  // Other initialization routines, if any
}

module.exports = { initializeApp };
