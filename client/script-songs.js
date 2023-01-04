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

        console.log(data);

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

            delBtn.addEventListener("click", deleteData)

        };
    })
    .catch(function (err) {
        console.log(err);
    });
}

getDataWithThen();


function deleteData() {
//RADERAR EN LÅT. TESTAT MED LÅT ID 2
const url = "http://localhost:3000/songs/2"

const deleteMethod = {
    method: 'DELETE', // Method itself
    headers: {
     'Content-type': 'application/json; charset=UTF-8',
     'Content-type': 'text/html; charset=UTF-8'  // Indicates the content 
    },
    // No need to have body, because we don't send nothing to the server.
   }
   // Make the HTTP Delete call using fetch api
   fetch(url, deleteMethod) 
   .then(response => response.json())
   .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
   .catch(err => console.log(err)) // Do something with the error
}