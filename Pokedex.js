const searchButton = document.getElementById("search-button");
const userInput = document.getElementById("search-input");
const pokedexScreen = document.querySelector(".screen");
const pokemonInfo = document.getElementById("pokemon-info");
const pokemonImage = document.getElementById("pokemon-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speed = document.getElementById("speed");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");

const fetchPokemon = async () => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput.value.toLowerCase()}`); 
        const data = await res.json();
        let { name, weight, height, id, stats, sprites, types } = data;

        pokemonId.innerHTML = `#${id}`;
        pokemonImage.innerHTML = `<img id="sprite" src="${sprites.front_default}"></img>`;
        pokemonTypes.innerHTML = types.map(type => {
            return `<span>${type.type.name.toUpperCase()}</span>`;
        }).join(" ");
        pokemonName.innerHTML = name.toUpperCase();
        pokemonWeight.innerHTML = `${weight}`;
        pokemonHeight.innerHTML = `${height}`;
        hp.innerHTML = stats[0].base_stat;
        attack.innerHTML = stats[1].base_stat;
        defense.innerHTML = stats[2].base_stat;
        specialAttack.innerHTML = stats[3].base_stat;
        specialDefense.innerHTML = stats[4].base_stat;
        speed.innerHTML = stats[5].base_stat;
    } catch (err) {
        alert("Pokémon not found");
    }
};

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchButton.click();
    }
});

searchButton.addEventListener("click", fetchPokemon);
