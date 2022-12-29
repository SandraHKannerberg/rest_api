import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //Ger unikt id till varje låt

const router = express.Router();

let songs = [];

//GET endpoint för hela spellistan
router.get('/', (req, res) => {
    console.log(songs);

    res.send(songs);
});


//POST endpoint för att lägga till en låt till spellistan (Vi skickar data från frontend till servern)
router.post('/', (req, res) => {
   
    const newSong = req.body;

    songs.push({ ...newSong, id: uuidv4()});

    res.send(`${newSong.title} is added to the playlist`);
});

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

//PUT endpoint


export default router;