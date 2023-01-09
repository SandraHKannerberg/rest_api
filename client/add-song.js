
const titleNew = document.getElementById("titleNew");
const artistNew = document.getElementById("artistNew");
const genreNew = document.getElementById("genreNew");
const timeNew = document.getElementById("timeNew");
const releaseNew = document.getElementById("releaseNew");

const addBtn = document.getElementById("addBtn");
const goToPlaylistBtn = document.getElementById("goToPlaylistBtn");

addBtn.addEventListener("click", addANewSong)

goToPlaylistBtn.addEventListener("click", walkToPlaylist)

function walkToPlaylist() {
      window.location.href="/songs.html"
}

function addANewSong(){

    const url = `http://localhost:3000/api/songs/`;

    const postMethod = {
        method: 'POST',
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    
        },
        body: JSON.stringify({
            title: titleNew.value,
            artist: artistNew.value,
            genre: genreNew.value,
            time: timeNew.value,
            release: releaseNew.value,
        })
        }

        fetch(url, postMethod) 
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

        if(titleNew.value) {
            alert("Låten är nu tillagd i spellistan");
        } else {
            alert("Titel saknas, vänligen försök igen");
        }

    }