interface IPokemon{
    name: string;
    speed?: number;
    health: number;
    type: string;
    attack: number;
}

export class Pokemon implements IPokemon {

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get attack(): number {
        return this._attack;
    }

    set attack(value: number) {
        this._attack = value;
    }

    private _name: string;
    private _speed: number;
    private _health: number;
    private _type: string;
    private _attack: number;

    constructor(props: IPokemon) {
        this._name = props.name;
        this._speed = props.speed || (Math.random() * 100);
        this._health = props.health;
        this._type = props.type;
        this._attack = props.attack;
    }

    basicAttack(pokemon: Pokemon): IPokemon | null {
        if(pokemon.health <= 0){
            return null;
        }
        else{
            pokemon.health -= this.attack + Math.round(Math.random() * 10) + 1;
            return pokemon;
        }
    }

    isAlive():boolean{
        return this.health > 0;
    }





}

