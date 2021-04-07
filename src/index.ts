import {Pokemon} from "./pokemon";

const Pikachu = new Pokemon({
    name: "Pikachu",
    speed: 100,
    health: 100
});


export function FirstToAttack(pokemon: Pokemon , pokemon2: Pokemon): Pokemon{

    return pokemon;
}

//module.exports = FirstToAttack;
//console.log(pokemon.name);
