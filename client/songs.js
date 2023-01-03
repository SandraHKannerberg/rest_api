const container = document.querySelector(".container");
const playlistContainer = document.createElement("div");
playlistContainer.classList.add("playlistContainer");

container.appendChild(playlistContainer);

function getDataWithThen(){
    fetch("http://localhost:3000/songs")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (const song of data) {
            //SKAPAR VARJE "LÅTBOX"
            const songContainer = document.createElement("div")
            songContainer.classList.add("songContainer");
            playlistContainer.appendChild(songContainer);

            //SKICKAR IN LÅTENS TITEL
            const title = document.createElement("h2")
            title.classList.add("songTitle");
            title.textContent = song.title;

            //SKICKAR IN ARTISTEN
            const artist = document.createElement("h3")
            artist.classList.add("artist");
            artist.textContent = song.artist;

            //SKICKAR IN LÅTENS GENRE
            const genre = document.createElement("p")
            genre.classList.add("genre");
            genre.textContent = song.genre;

            //VARJE LÅTS INFO LÄGGS TILL I EN EGEN BOX
            songContainer.appendChild(title)
            songContainer.appendChild(artist)
            songContainer.appendChild(genre)

            //LÅTBOXARNA LÄGGS TILL I PLAYLISTCONTAINERN
            playlistContainer.appendChild(songContainer);
        };
    })
    .catch(function (err) {
        console.log(err);
    });
}

getDataWithThen();