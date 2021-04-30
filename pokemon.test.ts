
import {Pokemon} from "./src/pokemon";
import {FirstToAttack} from "./src";

const Pikachu = new Pokemon({
    name: "Pikachu",
    health: 100,
    speed: 100,
    type: "Electric",
    attack: 50
});

const Carapuce = new Pokemon({
    name: "Carapuce",
    health: 100,
    speed: 50,
    type: "Water",
    attack: 50
});

describe("attackFirst", () => {

    test("Return the pokemon with the most speed points to attack", function () {
        expect(FirstToAttack(Pikachu, Carapuce)).toBe(Pikachu);
    });

    test("Return the pokemon that was attacked", function () {
        expect(Pikachu.basicAttack(Carapuce)).toBe(Carapuce);
    });

});
