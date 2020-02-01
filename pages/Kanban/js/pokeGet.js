/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Standards 2 (WDSII)
   
   */

const pokeAPI = {
    url: 'https://pokeapi.co/api/v2',
    type: 'pokemon'
};

const { url, type } = pokeAPI;
const pokeGetApi = `${url}/${type}/`;

const pokeSaveBtn = document.querySelector("#addPokemon");

pokeSaveBtn.onclick = function(event) {

    const pokemonChoice = document.querySelector("#inputPokemon");
    const pokemonLower = pokemonChoice.value.toLowerCase();
    localStorage.setItem(1, pokemonLower);
    window.location.reload();
};

const pokeStorage = localStorage.getItem("1");

const pokeGetApiUrl = `${pokeGetApi}${pokeStorage}`;

const updateMascot = fetch(pokeGetApiUrl)
    .then(data => data.json())
    .then(pokemon => {
        generateHTML(pokemon);
    })
    .catch(error => {});

const generateHTML = (data) => {

    const html = `
    <img src=${data.sprites.front_default}  height="175" width="175">`
    const pokemonDiv = document.querySelector('footer');
    pokemonDiv.innerHTML = html;

};

/* Modal */

const modal = document.querySelector("#mascotModal");

const newMascotBtn = document.querySelector("#mascotButton");

const closeBtn = document.querySelector("#close");

newMascotBtn.onclick = function() {
    modal.style.display = "block";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};