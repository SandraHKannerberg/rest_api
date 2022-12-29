import express from 'express'; // = const express = require("express");
import bodyParser from 'body-parser'; //tillåter oss att ta emot data från body

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); //vi kan använda json-data

//First route
app.get('/', (req, res) => res.send("Hello from first route"));


//Express server körs
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));