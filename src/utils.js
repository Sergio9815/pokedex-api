const TYPES = [
  { name: 'normal', icon: ' 🍥' },
  { name: 'fire', icon: ' 🔥' },
  { name: 'water', icon: ' 🌊' },
  { name: 'grass', icon: ' 🍃' },
  { name: 'electric', icon: ' ⚡' },
  { name: 'ice', icon: ' ❄️' },
  { name: 'poison', icon: ' 🧪' },
  { name: 'fighting', icon: ' 🥊' },
  { name: 'ground', icon: ' 🟤' },
  { name: 'flying', icon: ' 🦅' },
  { name: 'psychic', icon: ' 🔮' },
  { name: 'bug', icon: ' 🐛' },
  { name: 'ghost', icon: ' 👻' },
  { name: 'dragon', icon: ' 🐲' },
  { name: 'dark', icon: ' 💀' },
  { name: 'fairy', icon: ' 🎆' },
  { name: 'steel', icon: ' 🔩' },
  { name: 'rock', icon: ' 🔘' },
]

const COLORS = [
  'yellow',
  'blue',
  'white',
  'grey',
  'brown',
  'purple',
  'black',
  'red',
  'pink',
  'green',
]

function getType(name) {
  var value = TYPES.find((element) => element.name === name)
  return value.icon
}

function getColor(name) {
  var value = COLORS.find((element) => element === name)
  return value
}

export default { getType, getColor }
