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

            //CONTAINER FÖR TEXTEN I VARJE "LÅTBOX"
            const textContainer = document.createElement("div")
            textContainer.classList.add("textContainer");
            songContainer.appendChild(textContainer);

            //LÅTENS TITEL
            const title = document.createElement("h3")
            title.classList.add("songTitle");
            title.textContent = song.title;

            //ARTISTEN
            const artist = document.createElement("h3")
            artist.classList.add("artist");
            artist.textContent = song.artist;

            //LÅTENS GENRE
            const genre = document.createElement("h3")
            genre.classList.add("genre");
            genre.textContent = song.genre;

            //VARJE LÅTS INFO LÄGGS TILL I TEXTCONTAINERN
            textContainer.appendChild(title)
            textContainer.appendChild(artist)
            textContainer.appendChild(genre)

            //LÅTBOXARNA LÄGGS TILL I PLAYLISTCONTAINERN
            playlistContainer.appendChild(songContainer);

            //CONTAINER FÖR KNAPPARNA
            const btnContainer = document.createElement("div")
            btnContainer.classList.add("btnContainer");
            songContainer.appendChild(btnContainer);

            //KNAPP FÖR ATT UPPDATERA SPELLISTAN
            const updateBtn = document.createElement("button"); 
            updateBtn.classList.add("updateBtn");
            updateBtn.innerText = "Uppdatera";
            btnContainer.appendChild(updateBtn);

            //KNAPP FÖR ATT RADERA EN LÅT FRÅN SPELLISTAN
            const delBtn = document.createElement("button"); 
            delBtn.classList.add("delBtn");
            delBtn.innerText = "Delete";
            btnContainer.appendChild(delBtn);
        };
    })
    .catch(function (err) {
        console.log(err);
    });
}

getDataWithThen();