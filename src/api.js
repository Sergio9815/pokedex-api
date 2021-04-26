const API = 'https://pokeapi.co/api/v2/pokemon/id'
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

export default { getImage }
