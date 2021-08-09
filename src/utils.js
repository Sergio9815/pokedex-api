const TYPES = [
  { name: 'normal', icon: ' 🍥', color: 'gray' },
  { name: 'fire', icon: ' 🔥', color: 'red' },
  { name: 'water', icon: ' 🌊', color: 'blue' },
  { name: 'grass', icon: ' 🍃', color: 'green' },
  { name: 'electric', icon: ' ⚡', color: 'yellow' },
  { name: 'ice', icon: ' ❄️', color: 'blue' },
  { name: 'poison', icon: ' 🧪', color: 'purple' },
  { name: 'fighting', icon: ' 🥊', color: 'red' },
  { name: 'ground', icon: ' 🟤', color: 'brown' },
  { name: 'flying', icon: ' 🦅', color: 'brown' },
  { name: 'psychic', icon: ' 🔮', color: 'purple' },
  { name: 'bug', icon: ' 🐛', color: 'green' },
  { name: 'ghost', icon: ' 👻', color: 'gray' },
  { name: 'dragon', icon: ' 🐲', color: 'pink' },
  { name: 'dark', icon: ' 💀', color: 'gray' },
  { name: 'fairy', icon: ' 🎆', color: 'pink' },
  { name: 'steel', icon: ' 🔩', color: 'gray' },
  { name: 'rock', icon: ' 🔘', color: 'gray' },
]

const COLORS = [
  'yellow',
  'blue',
  'white',
  'gray',
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

function getTypeColor(name) {
  var value = TYPES.find((element) => element.name === name)
  return value.color
}

export default { getType, getColor, getTypeColor }
