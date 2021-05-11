const API = 'https://pokeapi.co/api/v2/pokemon/id'
const SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/id'
let abilitiesArray = Array()

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

function ability(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.names.find(filterLanguage)
        ? response.names.find(filterLanguage)
        : response.names.find(filterLanguageEn),
    ])
}

async function getAbilities(element) {
  let results = Array()
  for (let i = 0; i < element.length; i++) {
    results[i] = await ability(element[i].ability.url)
  }

  for (let i = 0; i < results.length; i++) {
    abilitiesArray[i] = results[i][0].name
  }

  return abilitiesArray
}

function getAssets(id) {
  let url = API.replace('id', `${id}`)
  return fetch(url)
    .then((response) => response.json())
    .then((response) => [
      response.name,
      response.id,
      getAbilities(response.abilities),
      response.height,
      response.weight,
      response.types,
      SPRITES.replace('id', `${response.id}`),
      abilitiesArray,
    ])
}

export default { getImage, getAssets, getSpecies }
