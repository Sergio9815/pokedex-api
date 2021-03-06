const TYPES = [
  { name: 'normal', icon: ' ๐ฅ', color: 'white' },
  { name: 'fire', icon: ' ๐ฅ', color: 'red' },
  { name: 'water', icon: ' ๐', color: 'blue' },
  { name: 'grass', icon: ' ๐', color: 'green' },
  { name: 'electric', icon: ' โก', color: 'yellow' },
  { name: 'ice', icon: ' โ๏ธ', color: 'blue' },
  { name: 'poison', icon: ' ๐งช', color: 'purple' },
  { name: 'fighting', icon: ' ๐ฅ', color: 'purple' },
  { name: 'ground', icon: ' ๐ค', color: 'brown' },
  { name: 'flying', icon: ' ๐ฆ', color: 'brown' },
  { name: 'psychic', icon: ' ๐ฎ', color: 'pink' },
  { name: 'bug', icon: ' ๐', color: 'green' },
  { name: 'ghost', icon: ' ๐ป', color: 'gray' },
  { name: 'dragon', icon: ' ๐ฒ', color: 'pink' },
  { name: 'dark', icon: ' ๐', color: 'black' },
  { name: 'fairy', icon: ' ๐', color: 'pink' },
  { name: 'steel', icon: ' ๐ฉ', color: 'gray' },
  { name: 'rock', icon: ' ๐', color: 'gray' },
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
