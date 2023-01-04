const body = document.querySelector("body");

function getDataByIdWithThen(){
    fetch("http://localhost:3000/songs/4")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

            const songContainer = document.createElement("div")
            songContainer.classList.add("songContainer");
            body.appendChild(songContainer);

            const title = document.createElement("h3")
            title.classList.add("songTitle");
            title.textContent = "Titel: " + data.title;

            const artist = document.createElement("h3")
            artist.classList.add("artist");
            artist.textContent = "Artist: " + data.artist;

            const genre = document.createElement("h3")
            genre.classList.add("genre");
            genre.textContent = "Genre: " + data.genre;

            songContainer.appendChild(title)
            songContainer.appendChild(artist)
            songContainer.appendChild(genre)

    })
    .catch(function (err) {
        console.log(err);
    });
}

getDataByIdWithThen();