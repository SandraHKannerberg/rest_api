
const titleNew = document.getElementById("titleNew");
const artistNew = document.getElementById("artistNew");
const genreNew = document.getElementById("genreNew");
const timeNew = document.getElementById("timeNew");
const releaseNew = document.getElementById("releaseNew");

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addANewSong)


function addANewSong(){

    const url = `http://localhost:3000/songs/`;

    const postMethod = {
        method: 'POST', // Method itself
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        //'Content-type': 'text/html; charset=UTF-8' //FELMEDDELANDE 404 BLIR SYNTAX FEL. HUR LÖSER MAN DET?
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

    }