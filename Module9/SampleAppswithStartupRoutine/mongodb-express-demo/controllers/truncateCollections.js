// truncateCollections.js
const mongoose = require('mongoose');
const { connection } = mongoose;

const collectionsToTruncate = ['users']; // Replace with your collection names

async function truncateCollections() {
  try {
    for (const collectionName of collectionsToTruncate) {
      // Check if the collection exists
      const collectionExists = connection.collections[collectionName];

      if (collectionExists) {
        // Collection exists, so remove all documents
        await connection.collections[collectionName].deleteMany({});
        console.log(`Collection ${collectionName} truncated successfully.`);
      } else {
        // Collection does not exist, log a message
        console.log(`Collection ${collectionName} does not exist. No action taken.`);
      }
    }
    console.log('All collections truncated successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // Close the Mongoose connection when done (if needed)
    //await mongoose.connection.close();
  }
}

module.exports = { truncateCollections };
