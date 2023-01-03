console.log("Hello World!");

const container = document.querySelector(".container");
const playlistContainer = document.createElement("div");
playlistContainer.classList.add("playlistContainer");

container.appendChild(playlistContainer);




/*const renderHeader = () => {
    //Kontrollera varför inte denna del fungerar
    const header = document.createElement("div");
    header.classList.add = ("header");
    rootElement.appendChild(header);

    const headerText = document.createElement("h1");
    headerText.classList.add = ("header-text");
    headerText.textContent = "Playlist";
    header.appendChild(headerText);
}

renderHeader();*/

/*const getSongs = () => {
    fetch("http://localhost:3000/songs").then(response => response.json()).then(data => {
        const songsContainer = createSongsContainer();


        data.foreach(song => {
            const songNode = createSong(song);
            songsContainer.appendChild(songNode);
        })
        
        rootElement.appendChild(songsContainer);
    })
}

const createSongsContainer = () => {
    const container = document.createElement("div")
    container.classList.add("songs-container")

    return container;
}

const createSong = (songData) => {
    const song = document.createElement("div")

    const title = document.createElement("h2")
    title.classList.add("song-title");
    title.textContent = songData.title;

    const artist = document.createElement("h3")
    artist.classList.add("artist");
    artist.textContent = songData.artist;

    const genre = document.createElement("p")
    genre.classList.add("genre");
    genre.textContent = songData.genre;

    const innerContainer = document.createElement("div")
    innerContainer.classList.add("song-inner-container")

    innerContainer.appendChild(title)
    innerContainer.appendChild(artist)
    innerContainer.appendChild(genre)

    song.appendChild(innerContainer)

    return song;
}


getSongs();*/

function getDataWithThen(){
    fetch("http://localhost:3000/songs")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
}

getDataWithThen();