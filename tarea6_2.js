

let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

console.log(pokemon);

let pokemonMayuscula = pokemon.map(function(nombre) {
  return nombre.toUpperCase();
});

console.log(pokemonMayuscula);