export const parsePokemonData = (data: any) => {
  const rowData = data.data;
  const pokemon = {
    name: rowData.name,
    img: rowData.sprites.other.dream_world.front_default,
    height: rowData.height,
    weight: rowData.weight,
    type: rowData.types[0].type.name,
    hp: rowData.stats[0].base_stat
  }
  return pokemon;
}