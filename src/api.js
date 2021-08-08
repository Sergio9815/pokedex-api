const API = 'https://pokeapi.co/api/v2/pokemon/id'
const SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/id'
const POKEMOS = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=9'

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

function filterLanguage(element) {
  return element.language.name === 'es'
}

function filterLanguageEn(element) {
  return element.language.name === 'en'
}

function getSpecies(id) {
  let url = SPECIES.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.color.name,
      response.flavor_text_entries.find(filterLanguage)
        ? response.flavor_text_entries.find(filterLanguage)
        : response.flavor_text_entries.find(filterLanguageEn),
    ])
}

function getAssets(id) {
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.id,
      response.abilities,
      response.height,
      response.weight,
      response.types,
      SPRITES.replace('id', `${response.id}`),
    ])
}

function getCharacters(id) {
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.id,
      response.types,
      SPRITES.replace('id', `${response.id}`),
    ])
}

function getPokemos() {
  return fetch(POKEMOS)
    .then((response) => response.json())
    .then((response) => [
      response
    ])
}

export default { getImage, getAssets, getSpecies, getPokemos, getCharacters }
