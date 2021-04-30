import {Pokemon} from "./pokemon";
import {FirstToAttack} from "./index";

export class Fight{
    async fightOfTwoPokemons(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon | null {

    if(pokemon1.health <= 0 || pokemon2.health <= 0){
        return null;
    }else{
        const firstToAttack = FirstToAttack(pokemon1,pokemon2);
        while (pokemon1.isAlive() && pokemon2.isAlive()){
            setTimeout(() => {
                
            }, 1000);
        }

    }

    }
}





