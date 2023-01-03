import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //Ger unikt id till varje låt
import fs from 'fs';

const router = express.Router();

//GÅ IGENOM KODEN OCH SE TILL ATT ALLA MEDDELANDEN ÄR PÅ SAMMA SPRÅK. VÄLJ ANTINGEN SVENSKA ELLER ENGELSKA
//SKA JAG JUSTERA STARTEN FÖR ALLA ENDPOINTS TILL /API INNAN /SONGS????

//Alla endpoints här lyssnar till route /songs

//GET endpoint som hämtar hela spellistan
router.get('/', (req, res) => {
    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            res.status(404).send("Filen du försöker nå finns inte")
        }

        const songs = JSON.parse(data)

        console.log(data);
        res.send(songs);
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
            res.status(404).send("Det gick inte att lägga till låten i spellistan, vänligen skriv en titel.");
        } else {

        songs.push({ ...newSong, id: uuidv4()}); //Får ett unikt id

        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
            if(err){
                console.log(err);
            }
        })

        res.status(201).send(newSong);
        return;
        }
    });
});

//GET endpoint med id för att hämta en specifik låt
router.get('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            res.status(404).send("Filen du försöker nå finns inte")
        }

    const songs = JSON.parse(data)

    const { id } = req.params;

    const foundSong = songs.find((song) => song.id === id);

    if(!foundSong) res.status(404).send("Låten du försöker nå finns inte");
        
    res.send(foundSong);
    });
});


//DELETE endpoint för att radera en låt från spellistan
router.delete('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            res.status(404).send("Filen du försöker nå finns inte")
        }

    let songs = JSON.parse(data)

    const { id } = req.params;

    const song = songs.find((song) => song.id === id);

    if(!song) {
        res.status(404).send("Låten du försöker radera finns inte");
    } else {
        songs = songs.filter((song) => song.id !== id);

        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){

            if(err){
                console.log(err);
            }
        });
    
        res.send("Raderad från spellistan");
        }
    });
});

//PATCH endpoint för att uppdatera en låt i spellistan
router.patch('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            res.status(404).send("Filen du försöker nå finns inte")
        }

    let songs = JSON.parse(data)

    const { id } = req.params;
    const { title, artist, genre } = req.body;

    const song = songs.find((song) => song.id === id);

    if(!song) res.status(404).send("Låten du försöker uppdatera finns inte");
    
    if(title) song.title = title;
    if(artist) song.artist = artist;
    if(genre) song.genre = genre;

    fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
        if(err){
            console.log(err);
        }
    })

    res.status(201).send("Uppdatering slutförd");
    });
});

export default router;