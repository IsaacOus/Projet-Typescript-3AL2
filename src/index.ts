import {Pokemon} from "./pokemon";

const Pikachu = new Pokemon({
    name: "Pikachu",
    speed: 100,
    health: 100,
    type: "Electric"
});

const Carapuce = new Pokemon({
    name: "Carapuce",
    health: 100,
    type: "Water"
});

export function FirstToAttack(pokemon: Pokemon , pokemon2: Pokemon): Pokemon{
    return pokemon.speed >= pokemon2.speed ? pokemon : pokemon2;
}

//module.exports = FirstToAttack;
//console.log(pokemon.name);
