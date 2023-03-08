// require('express)==> import express from "express";
const express = require("express");

// instance of express app
const app = express();

// dotenv is a package to read the environment variables from the .env file
require("dotenv").config();

// import the connectDB function from the config\dbConfig.js file
const connectDB = require("./config/dbConfig");

// connect to the database using the connectDB function 
connectDB();

// express.json() is a middleware to parse the request body to json format
app.use(express.json());


// declare the port number to be used by the server 
// if the port number is not defined in the .env file, use 3000 as the default port number
const PORT = process.env.PORT || 3000;

// import the router from the routes\imagesRoutes.js file
// all routes in this file will start with /api/images
app.use("/api/images", require("./routes/imagesRoutes"));
app.use("/", require("./routes/authRoutes"));
// listen to the server on the defined port number to handle the requests 
app.listen(PORT, () => console.log("Server started ---> " + PORT));
