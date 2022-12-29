import express from 'express';

const router = express.Router();

const songs = [
    {
        title: "Jul Igen",
        artist: "JustD",
        genre: "Christmas",
        id: 1
    },
    {
        title: "Sommaren Är Kort",
        artist: "Thomas Ledin",
        genre: "Sommar",
        id: 2
    }
]

router.get('/', (req, res) => {
    console.log(songs);

    res.send(songs);
});


//Vi skickar data från frontend till servern
router.post('/', (req, res) => {
    console.log("POST route reached");

    const newSong = req.body;

    songs.push(newSong);

    res.send(`${newSong.title} is added to the playlist`);
});



export default router;