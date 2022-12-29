import express from 'express'; // = const express = require("express");
import bodyParser from 'body-parser'; //tillåter oss att ta emot data från body

import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json()); //vi kan använda json-data
app.use('/songs', songsRoutes);

//First route
app.get('/', (req, res) => res.send("Hello from first route"));


//Express server körs
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));