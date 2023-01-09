import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //Ger unikt id till varje låt
import fs from 'fs';
import cors from 'cors';

const router = express.Router();
router.use(express.json());
router.use(cors());

//GET endpoint som hämtar hela spellistan
router.get('/', (req, res) => {
    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
        
            return res.status(404).json("Sidan du försöker nå finns inte");

        }

        const songs = JSON.parse(data)

        console.log(songs);
        
        res.json(songs);
        return;
    });
});

//POST endpoint för att lägga till en låt till spellistan (Vi skickar data från frontend till servern)
router.post('/', function(req, res, next){

    fs.readFile("songs.json", function(err, data){
        if(err){
            console.log(err);
        }

        const songs = JSON.parse(data)

        let newSong = req.body;

        if(!req.body.title) {
            return res.status(404).json("Det gick inte att lägga till låten i spellistan, vänligen skriv en titel.");
        } else {

        songs.push({ ...newSong, id: uuidv4()}); //Får ett unikt id

        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
            if(err){
                console.log(err);
            }
        })

        res.status(201).json({"Message":"Ny låt tillagd i spellistan"});
        return;
        }
    });
});

//GET endpoint med id för att hämta en specifik låt
router.get('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            return res.status(404).json("Filen du försöker nå finns inte");
        }

    const songs = JSON.parse(data)

    const { id } = req.params;

    const foundSong = songs.find((song) => song.id === id);

    if(!foundSong) res.status(404).json("Låten du försöker nå finns inte");
        
    res.json(foundSong);
    });
});


//DELETE endpoint för att radera en låt från spellistan
router.delete('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            return res.status(404).json("Filen du försöker nå finns inte")
        }

    let songs = JSON.parse(data)

    const { id } = req.params;

    const song = songs.find((song) => song.id === id);
  
    if(!song) {
        return res.status(404).json("Error - id saknas, låten kan inte raderas från spellistan");
    } else {
        songs = songs.filter((song) => song.id !== id);

        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){

            if(err){
                console.log(err);
            }
        });

        //let jsonData = {"Message":"Raderad från spellistan"}
        res.json(`Låt med id ${id} är nu raderad från spellistan`);
        }
    });
});

//PATCH endpoint för att uppdatera en låt i spellistan
router.patch('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            return res.status(404).json("Filen du försöker nå finns inte");
        }

    let songs = JSON.parse(data)

    const { id } = req.params;
    const { title, artist, genre } = req.body;

    const song = songs.find((song) => song.id === id);

    if(!song) return res.status(404).json("Låten du försöker uppdatera finns inte");

    if(title) song.title = title;
    if(artist) song.artist = artist;
    if(genre) song.genre = genre;

    if(!title || artist || genre) return res.status(404).json("Inget att uppdatera!");

    fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
        if(err){
            console.log(err);
        }
    })

    let jsonData = {
        "Song" : song,
        "Message":"Låten är nu uppdaterad"
    }

    res.json(jsonData);
    });
});

export default router;