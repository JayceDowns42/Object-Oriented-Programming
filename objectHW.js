//Aurora is Born!
let aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        console.log(`${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points `);
    }
};

//Aurora is harmed by an arrow
aurora.health -= 20;

//Aurora equips a strength necklace
aurora.strength += 10;

//Aurora learns a new skill
aurora.xp += 15;

aurora.describe();

let dog = {
    name: "Oakley",
    species: "German Short-Haired Pointer",
    size: 75,
    bark() {
        return (`Grrr! Grrr!`);
    }
};

console.log(`${dog.name} is a ${dog.species} dog, and weighs ${dog.size} lbs.!`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
console.log(``);
console.log(`**********************`);
console.log(``);
let account = {
    name: "Alex",
    balance: 0,
    credit(i) {
        return (this.balance += i);
    },
    describe() {
        console.log(`owner: ${this.name}, balance: ${this.balance}`);
    }
};

account.describe();
account.credit(250);
account.credit(-80);
// account.balance += 250;
// account.balance -= 80;

account.describe();
