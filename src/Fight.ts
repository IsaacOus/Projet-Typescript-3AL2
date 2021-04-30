import {Pokemon} from "./pokemon";
import {FirstToAttack} from "./index";

export class Fight{

    firstPokemon: Pokemon;
    secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    decideWinner(): Pokemon{
        return !this.firstPokemon.isAlive() ? this.firstPokemon : this.secondPokemon;
    }

    async Fighting(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<Promise<Pokemon> | null> {


        const firstPokemonToAttack = FirstToAttack(firstPokemon,secondPokemon);
        const opponent:Pokemon = firstPokemonToAttack == firstPokemon ? secondPokemon : secondPokemon;

        while (firstPokemon.isAlive() && secondPokemon.isAlive()){
            setTimeout(() => {
                firstPokemonToAttack.basicAttack(opponent);
            }, 1000);
            setTimeout(() => {
                opponent.basicAttack(firstPokemonToAttack);
            }, 1000);
        }

        return null;


    }

   /* async startFight(): Promise<Pokemon> | null{
        if(
        Fight();
    }*/


}





