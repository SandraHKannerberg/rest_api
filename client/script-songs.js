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

            //FORUMLÄR FÖR ATT UPPDATERA EN LÅT
            const updateForm = document.createElement("form")
            updateForm.classList.add("updateForm");

            const inputTitle = document.createElement("input")
            inputTitle.classList.add("inputTitle");

            const inputArtist = document.createElement("input")
            inputArtist.classList.add("inputArtist");

            const inputGenre = document.createElement("input")
            inputGenre.classList.add("inputGenre");

            updateForm.appendChild(inputTitle)
            updateForm.appendChild(inputArtist)
            updateForm.appendChild(inputGenre)

            songContainer.appendChild(updateForm);

            //CONTAINER FÖR KNAPPARNA
            const btnContainer = document.createElement("div")
            btnContainer.classList.add("btnContainer");
            songContainer.appendChild(btnContainer);

            //KNAPP FÖR ATT RADERA EN LÅT FRÅN SPELLISTAN
            const delBtn = document.createElement("button"); 
            delBtn.classList.add("delBtn");
            delBtn.innerText = "Delete";
            btnContainer.appendChild(delBtn);

            //EVENTLISTENER FÖR DELETE SOM KOPPLAS TILL DELETE METHOD
            delBtn.addEventListener("click", () => { //ADDERA NÅGON FORMA AV BEKRÄFTELSE ATT DET ÄR GENOMFÖRT

            const id = song.id;
            const url = `http://localhost:3000/songs/${id}`

            const deleteMethod = {
            method: 'DELETE', // Method itself
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            //'Content-type': 'text/html; charset=UTF-8' //FELMEDDELANDE 404 BLIR SYNTAX FEL. HUR LÖSER MAN DET?
            },
            }

            fetch(url, deleteMethod) 
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            });

            //KNAPP FÖR ATT UPPDATERA
            const updateBtn = document.createElement("button"); 
            updateBtn.classList.add("updateBtn");
            updateBtn.innerText = "Uppdatera";
            btnContainer.appendChild(updateBtn);

             //EVENTLISTENER FÖR UPPDATERING SOM KOPPLAS TILL PATCH METHOD
            updateBtn.addEventListener("click", () => { //ADDERA NÅGON FORMA AV BEKRÄFTELSE ATT DET ÄR GENOMFÖRT

            const id = song.id;
            const url = `http://localhost:3000/songs/${id}`

            const patchMethod = {
            method: 'PATCH', // Method itself
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            //'Content-type': 'text/html; charset=UTF-8' //FELMEDDELANDE 404 BLIR SYNTAX FEL. HUR LÖSER MAN DET?
            },
            body: JSON.stringify({
                title: inputTitle.value,
                artist: inputArtist.value,
                genre: inputArtist.value,
            })
            }

            fetch(url, patchMethod) 
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            });
        }
    })
}

getDataWithThen();