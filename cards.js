window.onload = () => {
const url = 'https://rickandmortyapi.com/api/character';
fetch(url)
    .then(res => res.json())
    .then(data => {
        const rawData = data.results;
        return rawData.map(character => {
          //all needed data is listed below as an entity 
           let created = character.created;
           let species = character.species ;
           let img = character.image;
           let episodes = character.episode;
           let name = character.name;
           let location = character.location;
            //create element
            //append element
        });
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    });
};

const img = document.querySelector('[class^="character.image"]')
const episodes = document.querySelector('[class^="character.episode"]')
const name = document.querySelector('[class^="character.name"]')
const location = document.querySelector('[class^="character.location"]')