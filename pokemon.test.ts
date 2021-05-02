
import {Pokemon} from "./src/pokemon";
import {FirstToAttack} from "./src";
import {Fight} from "./src/Fight";

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

const Bulbizarre = new Pokemon({
    name: "Bulbizarre",
    health: 0,
    speed: 50,
    type: "Water",
    attack: 0
});


const fight = new Fight(Pikachu, Carapuce);

describe("attackFirst", () => {

    test("Return the pokemon with the most speed points to attack", function () {
        expect(FirstToAttack(Pikachu, Carapuce)).toBe(Pikachu);
    });

    test("Return the pokemon that was attacked", function () {
        expect(Pikachu.basicAttack(Carapuce)).toBe(Carapuce);
    });

    test("Test the basic attack on a pokemon with 0 health point", function () {
        let a = Carapuce.health;
        expect(Carapuce.basicAttack(Bulbizarre)).toBe(null);
    });

    test("Verify if a pokemon is alive", function () {
        expect(Pikachu.isAlive()).toBeTruthy();
    });

    test("Verify if Bulbizarre is not alive", function () {
        expect(Bulbizarre.isAlive()).toBeFalsy();
    });

    test("Start a fight with one of the two pokemon already dead", function () {
        expect(fight.startFight(Pikachu,Bulbizarre)).resolves.toBe(null);
    });

    test("Return the winner of the combat", function () {
        expect(fight.startFight(Pikachu,Carapuce)).toBe(Pikachu);
    });


});
