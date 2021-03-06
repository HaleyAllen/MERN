class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor (name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res; 
    }

    attack (target) {
        target.res -= this.power;
        console.log(`${this.name} attacks! ${target.name} takes ${this.power} damage! Their resilience is now at ${target.res}`);
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

play(target); {
    if( target instanceof Unit ) {
        if (this.stat === "res"){
            target.res += this.magnitude;
            console.log(`${this.name} was played! ${target.name} now has ${target.res} resilience`);
        }
        if(this.stat === "power"){
            target.power += this.magnitude
            console.log(`${this.name} was played! ${target.name} now has ${target.power} power`);
        }
    } else {
        throw new Error( "Target must be a unit!" );
    }
}

const RedBeltNinja = new Unit ("Red Belt Ninja", 3, 3, 4);

const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
HardAlgorithm.play(RedBeltNinja);

const BlackBeltNinja = new Unit ("Black Belt Ninja", 4, 5, 4);

const Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
Rejection.play(RedBeltNinja);

const PP = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
PP.play(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);