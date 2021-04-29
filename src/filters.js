const types = [
  { name: 'fire', tr: 'Fuego' },
  { name: 'normal', tr: 'Normal' },
  { name: 'water', tr: 'Agua' },
  { name: 'electric', tr: 'Eléctrico' },
  { name: 'grass', tr: 'Planta' },
  { name: 'ground', tr: 'Tierra' },
  { name: 'ice', tr: 'Hielo' },
  { name: 'poison', tr: 'Veneno' },
  { name: 'fighting', tr: 'Lucha' },
  { name: 'flying', tr: 'Volador' },
  { name: 'psychic', tr: 'Psíquico' },
  { name: 'bug', tr: 'Bicho' },
  { name: 'ghost', tr: 'Fantasma' },
  { name: 'dragon', tr: 'Dragón' },
  { name: 'dark', tr: 'Siniestro' },
  { name: 'fairy', tr: 'Hada' },
  { name: 'steel', tr: 'Acero' },
  { name: 'rock', tr: 'Roca' },
]

const translate = function (value) {
  var newValue = types.find((element) => element.name === value)
  return newValue.tr
}

const heightFilter = function (value) {
  var height = value / 10
  return `${height} m`
}

const weightFilter = function (value) {
  var weight = value / 10
  return `${weight} kg`
}

export { heightFilter, weightFilter, translate }
