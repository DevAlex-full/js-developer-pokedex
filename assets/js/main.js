const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="showPokemonDetails(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>

            <div class="stats">
                <div class="stat-item">
                    <span class="stat-label">HP</span>
                    <span class="stat-value">${pokemon.stats.hp}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">ATK</span>
                    <span class="stat-value">${pokemon.stats.attack}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">DEF</span>
                    <span class="stat-value">${pokemon.stats.defense}</span>
                </div>
            </div>

            <div class="info">
                <div class="info-item">
                    <span>Height:</span>
                    <span>${(pokemon.height / 10).toFixed(1)}m</span>
                </div>
                <div class="info-item">
                    <span>Weight:</span>
                    <span>${(pokemon.weight / 10).toFixed(1)}kg</span>
                </div>
            </div>

            <div class="abilities">
                <div class="ability-title">Abilities:</div>
                <div class="ability-list">
                    ${pokemon.abilities.map(ability => `<span class="ability">${ability}</span>`).join('')}
                </div>
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

// Função para mostrar detalhes do Pokémon em modal
function showPokemonDetails(pokemonNumber) {
    // Buscar o Pokémon específico
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(response => response.json())
        .then(pokemonDetail => {
            const modal = createPokemonModal(pokemonDetail);
            document.body.appendChild(modal);
            modal.classList.add('show');
            
            // Fechar modal ao clicar no X ou fora do modal
            modal.onclick = (e) => {
                if (e.target === modal || e.target.classList.contains('close')) {
                    modal.remove();
                }
            }
        });
}

function createPokemonModal(pokemonDetail) {
    const modal = document.createElement('div');
    modal.className = 'pokemon-modal';
    
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [primaryType] = types;
    
    modal.innerHTML = `
        <div class="modal-content pokemon ${primaryType}">
            <span class="close">&times;</span>
            <div style="text-align: center; color: white;">
                <h2>#${pokemonDetail.id} ${pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}</h2>
                <img src="${pokemonDetail.sprites.other.dream_world.front_default}" 
                     alt="${pokemonDetail.name}" style="width: 150px; height: 150px;">
                
                <div class="types" style="margin: 1rem 0; display: flex; justify-content: center; gap: 0.5rem;">
                    ${types.map(type => `<span class="type ${type}">${type}</span>`).join('')}
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div>
                        <h3>Stats</h3>
                        <div class="stats">
                            ${pokemonDetail.stats.map(stat => `
                                <div class="stat-item">
                                    <span class="stat-label">${stat.stat.name.replace('-', ' ').toUpperCase()}</span>
                                    <span class="stat-value">${stat.base_stat}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h3>Info</h3>
                        <div class="info">
                            <div class="info-item">
                                <span>Height:</span>
                                <span>${(pokemonDetail.height / 10).toFixed(1)}m</span>
                            </div>
                            <div class="info-item">
                                <span>Weight:</span>
                                <span>${(pokemonDetail.weight / 10).toFixed(1)}kg</span>
                            </div>
                        </div>
                        
                        <h3>Abilities</h3>
                        <div class="abilities">
                            <div class="ability-list">
                                ${pokemonDetail.abilities.map(ability => 
                                    `<span class="ability">${ability.ability.name}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})