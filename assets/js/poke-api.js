const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    // Adicionando altura e peso
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    // Adicionando stats
    pokemon.stats.hp = pokeDetail.stats.find(stat => stat.stat.name === 'hp').base_stat
    pokemon.stats.attack = pokeDetail.stats.find(stat => stat.stat.name === 'attack').base_stat
    pokemon.stats.defense = pokeDetail.stats.find(stat => stat.stat.name === 'defense').base_stat
    pokemon.stats.specialAttack = pokeDetail.stats.find(stat => stat.stat.name === 'special-attack').base_stat
    pokemon.stats.specialDefense = pokeDetail.stats.find(stat => stat.stat.name === 'special-defense').base_stat
    pokemon.stats.speed = pokeDetail.stats.find(stat => stat.stat.name === 'speed').base_stat

    // Adicionando habilidades
    pokemon.abilities = pokeDetail.abilities.map(ability => ability.ability.name)

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}