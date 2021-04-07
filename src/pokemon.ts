interface IPokemon{
    name: string;
    speed: number;
    health: number;

}

export class Pokemon implements IPokemon {

    name: string;
    speed: number;
    health: number;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.speed = props.speed;
        this.health = props.health;
    }


}

