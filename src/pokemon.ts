interface IPokemon{
    name: string;
    speed?: number;
    health: number;
    type: string;
}

export class Pokemon implements IPokemon {

    name: string;
    speed: number;
    health: number;
    type: string;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.speed = props.speed || (Math.random() * 100);
        this.health = props.health;
        this.type = props.type;
    }

    attack(pokemon: Pokemon, pokemon2: Pokemon): void{

    }
}

