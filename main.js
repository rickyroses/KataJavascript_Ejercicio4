// 1. Crea un programa que imprima en consola los números impares del 1 al 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { // Verificamos si el número es impar
        console.log(i); 
    }
}

// 2.  Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6

// El arreglo 'pokemons' 
var pokemons =
    ['bulbasaur',
        'ivysaur',
        'venusaur',
        'charmander',
        'charmeleon',
        'charizard',
        'squirtle',
        'wartortle',
        'blastoise',
        'caterpie',
        'metapod',
        'butterfree',
        'weedle',
        'kakuna',
        'beedrill',
        'pidgey',
        'pidgeotto',
        'pidgeot',
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'pikachu',
        'raichu',
        'sandshrew',
        'sandslash',
        'nidoran-f',
        'nidorina',
        'nidoqueen',
        'nidoran-m',
        'nidorino',
        'nidoking',
        'clefairy',
        'clefable',
        'vulpix',
        'ninetales',
        'jigglypuff',
        'wigglytuff',
        'zubat',
        'golbat',
        'oddish',
        'gloom',
        'vileplume',
        'paras',
        'parasect',
        'venonat',
        'venomoth',
        'diglett',
        'dugtrio',
        'meowth',
        'persian',
        'psyduck',
        'golduck',
        'mankey',
        'primeape',
        'growlithe',
        'arcanine',
        'poliwag',
        'poliwhirl',
        'poliwrath',
        'abra',
        'kadabra',
        'alakazam',
        'machop',
        'machoke',
        'machamp',
        'bellsprout',
        'weepinbell',
        'victreebel',
        'tentacool',
        'tentacruel',
        'geodude',
        'graveler',
        'golem',
        'ponyta',
        'rapidash',
        'slowpoke',
        'slowbro',
        'magnemite',
        'magneton',
        'farfetchd',
        'doduo',
        'dodrio',
        'seel',
        'dewgong',
        'grimer',
        'muk',
        'shellder',
        'cloyster',
        'gastly',
        'haunter',
        'gengar',
        'onix',
        'drowzee',
        'hypno',
        'krabby',
        'kingler',
        'voltorb']
// Obtener el número del usuario
const numeroUsuario = parseInt(prompt("Introduce un número:"));

// Iterar sobre los Pokémon usando un bucle for
for (let i = 0; i < pokemons.length; i++) {
    // Verificar si el índice + 1 es múltiplo de 5 y menor o igual al número del usuario
    if ((i + 1) % 5 === 0 && (i + 1) <= numeroUsuario) {
        //console.log(pokemons[i]); 
        console.log(`Indice: ${i + 1}, Pokémon: ${pokemons[i]}`);
    }
}

// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let elemento of arreglo) {
    if (typeof elemento === 'number') {
    console.log(elemento);
    }
}