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