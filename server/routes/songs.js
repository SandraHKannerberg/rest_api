import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //Ger unikt id till varje låt
import fs from 'fs';

const router = express.Router();

//let songs = [];

//alla endpoints här lyssnar till /songs

/*GET endpoint för hela spellistan
router.get('/', (req, res) => {
    console.log(songs);

    res.send(songs);
});*/

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
})


//POST endpoint för att lägga till en låt till spellistan (Vi skickar data från frontend till servern)
//DENNA FRUNGERAR I REST CLIENT MEN ÄR INTE KOPPLAD TILL JSON-FILEN
/*router.post('/', (req, res) => {
   
    const newSong = req.body;

    songs.push({ ...newSong, id: uuidv4()});

    res.send(`${newSong.title} is added to the playlist`);
});*/

//DENNA POST FUNGERAR INTE
/*router.post('/', (req, res) => {

    //const newSong = req.body;

    fs.readFile("songs.json", function(err, data){
        if(err){
            console.log(err);
        }

        const songs = JSON.parse(data)

        const newSong = 
        {
            "title": "Jul Igen",
            "artist": "Just D",
            "genre": "Christmas"
        }

        songs.push(newSong);

        fs.writeFile("songs.json", JSON.stringify(songs, null, 2), function(err){
            if(err){
                console.log(err);
            }
        })

        res.send(songs);
        return;
    });
});*/

//GET endpoint med id för att få fram en specifik låt
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundSong = songs.find((song) => song.id === id);

    res.send(foundSong);
});

//DELETE endpoint för att radera en låt från spellistan
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    songs = songs.filter((song) => song.id !== id);

    res.send("Deleted from playlist");
});

//PUT endpoint för att uppdatera en låt i spellistan


export default router;