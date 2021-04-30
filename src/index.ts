import {Pokemon} from "./pokemon";

const Pikachu = new Pokemon({
    name: "Pikachu",
    speed: 100,
    health: 100,
    type: "Electric",
    attack: 50
});

const Carapuce = new Pokemon({
    name: "Carapuce",
    health: 100,
    type: "Water",
    attack: 50
});

export function FirstToAttack(pokemon: Pokemon , pokemon2: Pokemon): Pokemon{
    return pokemon.speed >= pokemon2.speed ? pokemon : pokemon2;
}

