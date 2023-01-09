import express from 'express'; // = const express = require("express");
import bodyParser from 'body-parser'; //tillåter oss att ta emot data från body
import cors from 'cors';

import songsRoutes from './routes/songs.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json()); //vi kan använda json-data
app.use('/api/songs', songsRoutes);
app.use(cors())

//First route
app.get('/', (req, res) => res.send("Hello from first route"));


//Express server körs
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));