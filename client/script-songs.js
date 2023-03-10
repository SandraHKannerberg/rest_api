const container = document.querySelector(".container");
const playlistContainer = document.createElement("div");
playlistContainer.classList.add("playlistContainer");

container.appendChild(playlistContainer);

const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", walkToAdd)

function walkToAdd() {
      window.location.href="/add-song.html"
}
  
function getAllSongs(){
    fetch("http://localhost:3000/api/songs")
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

            //FORUMLÄR FÖR ATT UPPDATERA EN LÅT
            const updateForm = document.createElement("form")
            updateForm.classList.add("updateForm");

            const inputTitle = document.createElement("input")
            inputTitle.classList.add("inputTitle");
            inputTitle.setAttribute("placeholder", "Uppdatera Titel");
           
            const inputArtist = document.createElement("input")
            inputArtist.classList.add("inputArtist");
            inputArtist.setAttribute("placeholder", "Uppdatera Artist");

            const inputGenre = document.createElement("input")
            inputGenre.classList.add("inputGenre");
            inputGenre.setAttribute("placeholder", "Uppdatera Genre");

            updateForm.appendChild(inputTitle)
            updateForm.appendChild(inputArtist)
            updateForm.appendChild(inputGenre)

            songContainer.appendChild(updateForm);

            //CONTAINER FÖR KNAPPARNA
            const btnContainer = document.createElement("div")
            btnContainer.classList.add("btnContainer");
            songContainer.appendChild(btnContainer);

            //KNAPP FÖR MER INFO OM LÅTEN
            const infoBtn = document.createElement("button"); 
            infoBtn.classList.add("infoBtn");
            infoBtn.innerText = "Mer info";
            btnContainer.appendChild(infoBtn);

            //EVENTLISTENER FÖR MER INFO SOM KOPPLAS TILL GET METHOD MED SPECIFIKT ID
            infoBtn.addEventListener("click", () => { 

            const id = song.id;
            const url = `http://localhost:3000/api/songs/${id}`

            fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
            
                    const infoContainer = document.createElement("div");
                    infoContainer.classList.add("infoContainer");
                    songContainer.appendChild(infoContainer);

                    const time = document.createElement("p")
                    time.classList.add("time");
                    time.textContent = "Låtens längd: " + data.time;

                    const release = document.createElement("p")
                    release.classList.add("release");
                    release.textContent = "Släpptes år: " + data.release;

                    const hide = document.createElement("p")
                    hide.classList.add("hide");
                    hide.textContent = "Dölj";
                    hide.style.color = "blue";

                    hide.addEventListener("click", () => {
                        infoContainer.style.display = "none";
                    })
        
                    infoContainer.appendChild(time)
                    infoContainer.appendChild(release)
                    infoContainer.appendChild(hide)
                })
            });

            //KNAPP FÖR ATT RADERA EN LÅT FRÅN SPELLISTAN
            const delBtn = document.createElement("button"); 
            delBtn.classList.add("delBtn");
            delBtn.innerText = "Delete";
            btnContainer.appendChild(delBtn);

            //EVENTLISTENER FÖR DELETE SOM KOPPLAS TILL DELETE METHOD
            delBtn.addEventListener("click", () => {

            const id = song.id;
            const url = `http://localhost:3000/api/songs/${id}`

            const deleteMethod = {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
            }

            fetch(url, deleteMethod) 
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

            alert("Låten är nu raderad från spellistan");
            });

            //KNAPP FÖR ATT UPPDATERA
            const updateBtn = document.createElement("button"); 
            updateBtn.classList.add("updateBtn");
            updateBtn.innerText = "Uppdatera";
            btnContainer.appendChild(updateBtn);

             //EVENTLISTENER FÖR UPPDATERING SOM KOPPLAS TILL PATCH METHOD
            updateBtn.addEventListener("click", () => {

            const id = song.id;
            const url = `http://localhost:3000/api/songs/${id}`

            const patchMethod = {
            method: 'PATCH',
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: inputTitle.value,
                artist: inputArtist.value,
                genre: inputGenre.value,
            })
            }

            fetch(url, patchMethod) 
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

            if(inputTitle.value || inputArtist.value || inputGenre.value) {
                alert("Låten är nu uppdaterad");
            } else {
                alert("Finns inget att uppdatera");
            }

            });
        }
    })
    .catch(err => console.log("Sidan du försöker nå finns inte"))
}

getAllSongs();

