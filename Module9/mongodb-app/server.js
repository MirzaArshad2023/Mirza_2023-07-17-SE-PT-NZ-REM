const express = require("express");
let dbConnect = require("./dbConnect");
const app = express();
let userRoutes = require('./routes/userRoutes')

require("dotenv").config();
// parse requests of content-type -
// application / json
app.use(express.json());
app.use('/api/users', userRoutes)
app.get("/", (req, res) => {
    res.json({message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.SERVERPORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on
port ${PORT}.`);
});