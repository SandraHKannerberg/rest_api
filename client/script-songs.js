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

            //KNAPP FÖR ATT RADERA EN LÅT FRÅN SPELLISTAN
            const delBtn = document.createElement("button"); 
            delBtn.classList.add("delBtn");
            delBtn.innerText = "Delete";
            btnContainer.appendChild(delBtn);

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
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

            });
        }
    })
}

getDataWithThen();

function update(id){//FUNKTIONEN FUNGERAR MEN JAG VILL KOPPLA DEN TILL EN FORM OCH ATT DETTA KÖRS VIA UPPDATERA KNAPPEN

    const url = `http://localhost:3000/songs/${id}`

    const patchMethod = {
    method: 'PATCH', // Method itself
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    //'Content-type': 'text/html; charset=UTF-8' //FELMEDDELANDE 404 BLIR SYNTAX FEL. HUR LÖSER MAN DET?
    },
    body: JSON.stringify({
        title: "Jul igen",
      }),
    }

    fetch(url, patchMethod) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

update(5);