import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //Ger unikt id till varje låt
import fs from 'fs';

const router = express.Router();

//Alla endpoints här lyssnar till route /songs

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

        songs.push({ ...newSong, id: uuidv4()}); //Får ett unikt id


        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
            if(err){
                console.log(err);
            }
        })

        res.send(songs);
        return;
    });
});


//GET endpoint med id för att få fram en specifik låt
router.get('/:id', (req, res) => {

    fs.readFile("songs.json", function (err, data){

        if(err){
            console.log(err);
            res.status(404).send("Filen du försöker nå finns inte")
        }

    const songs = JSON.parse(data)

    const { id } = req.params;

    const foundSong = songs.find((song) => song.id === id);
    //Hittar id men ger inget felmeddelande om id inte finns. Hur löser man det?

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

    songs = songs.filter((song) => song.id !== id);

    fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
        if(err){
            console.log(err);
        }
    })

    res.send("Deleted from playlist");
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
    const { title, artist, genre} = req.body;

    const song = songs.find((song) => song.id === id);

    if(title) song.title = title;
    if(artist) song.artist = artist;
    if(genre) song.genre = genre;

    fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
        if(err){
            console.log(err);
        }
    })

    res.send("Update successful");
    });
});

export default router;