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

    async Fighting(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<void>{

        const firstPokemonToAttack = FirstToAttack(firstPokemon,secondPokemon);
        const opponent:Pokemon = firstPokemonToAttack == firstPokemon ? secondPokemon : secondPokemon;

        while (firstPokemon.isAlive() && secondPokemon.isAlive()){
            setTimeout(() => {
                firstPokemonToAttack.basicAttack(opponent);
                opponent.basicAttack(firstPokemonToAttack);
            }, 1000);
        }

    }

   async startFight(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<Promise<Pokemon> | null>{
        if(firstPokemon.health <= 0 || secondPokemon.health <= 0){
            return null;
        }
        await this.Fighting(firstPokemon, secondPokemon);

        return this.decideWinner();

    }


}





