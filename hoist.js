// ************************************** ONE **************************************
console.log(hello);                                   
var hello = 'world';

// AFTER HOISTING BY THE INTERPRETER

var hello
console.log(hello)
hello = 'world';
// OUTPUT: undefined

// ************************************** TWO **************************************
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY THE INTERPRETER

var needle;
function test(){
 var needle;
 needle = 'magnet';
 console.log(needle)
}
needle = 'haystack';
test()
// OUTPUT: magnet

// ************************************** THREE **************************************
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER

function print(){
 brendan = 'only okay';
 console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// OUTPUT: super cool

// ************************************** FOUR **************************************
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// AFTER HOISTING BY THE INTERPRETER

var food;
function eat(){
food = 'half-chicken';
console.log(food);
food = 'gone';
}
food = 'chicken';
console.log(food);
eat()
// OUTPUT: chicken ; half-chicken

// ************************************** FIVE **************************************
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// AFTER HOISTING BY THE INTERPRETER

var mean;
var food;
mean = function() {
 food = "chicken";
 console.log(food)
 food = "fish";
 console.log(food)
} 
mean()
console.log(food)
//OUTPUT: type error

// ************************************** SIX **************************************
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// AFTER HOISTING BY THE INTERPRETER

var genre;
function rewind(){
 genre = "rock";
 console.log(genre)
 genre = "r&b";
 console.log(genre)
}
console.log(genre)
genre = "disco";
rewind()
console.log(genre)
// OUTPUT: undefined; rock; r&b; disco

// ************************************** SEVEN **************************************
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER

var dojo;
function learn() {
 dojo = "seattle";
 console.log(dojo);
 dojo = "burbank";
 console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// OUTPUT: san jose; seattle; burbank; san jose

// ************************************** EIGHT **************************************
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER

function makeDojo(name, students){
 const dojo = {};
 dojo.name = name;
 dojo.students = students;
 if(dojo.students > 50){
 dojo.hiring = true;
 }
 else if(dojo.students <= 0){
 dojo = "closed for now";
 }
 return dojo;
 }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//OUTPUT: { name: 'Chicago', students: 65, hiring: true } ; TypeError