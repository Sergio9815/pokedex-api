const API = 'https://pokeapi.co/api/v2/pokemon/id'
const SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/id'

const SPRITES =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/id.png'

function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

function getImage() {
  let id = Math.round(getRandom(1, 898))
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.sprites.other.dream_world.front_default
        ? response.sprites.other.dream_world.front_default
        : SPRITES.replace('id', `${id}`),
    ])
}

function getSpecies(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [response.flavor_text_entries[28].flavor_text])
}

function getAssets(id) {
  let url = API.replace('id', `${id}`)
  let species = getSpecies(SPECIES.replace('id', `${id}`))
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.abilities,
      response.height,
      response.weight,
      response.types,
      species,
      SPRITES.replace('id', `${response.id}`),
    ])
}

export default { getImage, getAssets }
