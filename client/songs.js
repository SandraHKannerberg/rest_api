console.log("Hello World!");

const rootElement = document.getElementById("root");

const renderHeader = () => {
    const header = document.createElement("div");
    header.classList.add = ("header");

    const headerText = document.createElement("h1");
    headerText.classList.add = ("header-text");
    headerText.textContent = "Playlist";

    header.appendChild(headerText);
    rootElement.appendChild(header);
}



function getDataWithThen() {
    fetch('http://localhost:3000/songs')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });
}

renderHeader();
getDataWithThen();

/*async function getDataWithAsync() {
    try {
        const response = await fetch("http://localhost:3000/songs", {mode: 'no-cors'});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getDataWithAsync();*/