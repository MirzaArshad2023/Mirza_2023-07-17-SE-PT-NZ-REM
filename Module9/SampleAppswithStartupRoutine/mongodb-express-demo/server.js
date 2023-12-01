const express = require('express')
let dbConnect = require('./dbConnect')
let userRoutes = require('./routes/userRoutes')
const { initializeApp } = require('./controllers/initializer');

async function startApp() {
  try {
    await initializeApp();
    // Start your application here
  } catch (error) {
    console.error('Error during initialization:', error);
  }
}


const app = express();
require('dotenv').config();

app.use(express.json()); //This code will make sure this server can parse json requests

app.get("/", (req,res)=>{
    res.json({ message: "Welcome to my MongoDB application."});
});

startApp();

app.use('/api/users', userRoutes)
//set port, listen for requests.

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
