let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const tablesToTruncate = ['users']; // Replace with your table names

async function truncateTables() {
  try {
    for (const tableName of tablesToTruncate) {
      // Check if the table exists
      const tableExists = await sequelizeInstance.getQueryInterface().showAllTables()
        .then(tables => tables.includes(tableName));

      if (tableExists) {
        // Table exists, so truncate it
        await sequelizeInstance.models[tableName].destroy({ truncate: true });
        console.log(`Table ${tableName} truncated successfully.`);
      } else {
        // Table does not exist, log a message
        console.log(`Table ${tableName} does not exist. No action taken.`);
      }
    }
    console.log('All tables truncated successfully.');
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    // Close the Models connection when done (if needed)
    //await sequelizeInstance.close();
  }
}
module.exports = { truncateTables };
