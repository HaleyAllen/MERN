

class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log("Name: "+ this.name +",", "Strength: "+ this.strength +",", "Speed: "+this.speed +",","Health: "+this.health +",")
    }

    drinkSake(){
        this.health += 10
    }
}

const ninja1 = new Ninja("Hyabusa", 20);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake()
        if(this.wisdom < 50){
            console.log("The fool thinks he is wise, but the wise man knows himself to be a fool.")
        }
        else{
            console.log("Whenever you find yourself on the side of the majority, it is time to pause and reflect")
        }
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();