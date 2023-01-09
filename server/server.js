import express from 'express'; // = const express = require("express");
import bodyParser from 'body-parser'; //tillåter oss att ta emot data från body
import cors from 'cors';

import songsRoutes from './routes/songs.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); //vi kan använda json-data
app.use('/api/songs', songsRoutes);


//First route
app.get('/', (req, res, next) => {

    if(next.err){
        console.log(err);
        return res.status(404).json("Filen du försöker nå finns inte");
    } else {
        return res.send("Hello from first route");
    }
})

//Express server körs
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));