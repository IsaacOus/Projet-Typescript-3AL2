
import {Pokemon} from "./src/pokemon";
import {FirstToAttack} from "./src";

const Pikachu = new Pokemon({
    name: "Pikachu",
    speed: 100,
    health: 100
});
const Salameche = new Pokemon({
    name: "Salameche",
    speed: 100,
    health: 100
});

describe("attackFirst", () => {

    test("Return the pokemon with the most hit points to attack", function () {
        expect(FirstToAttack(Pikachu, Salameche)).toBe(Pikachu);
    })

});
