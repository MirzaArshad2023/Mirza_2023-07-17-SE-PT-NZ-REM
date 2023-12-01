const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/myApproutes')
const { initializeApp } = require('./controllers/initializer')
// parse requests of content-type -application / json
// Initialize the application
async function startApp() {
    try {
      await initializeApp();
      
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }
  
startApp();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MySQL Demo application."
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});