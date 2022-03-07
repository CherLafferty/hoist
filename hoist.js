//1.  GIVEN
console.log(hello);
var hello = 'world';
//After Hoist
// var hello;
// console.log(hello); logs undefind
// hello = 'world'

// 2. GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// After Hoist
// var needle is a global declaration and is hoisted
// test() is called
// function test() is hoisted
// 'magnet' string assigned to var needle local in test
// console.log(needle) is local in function and returns
// local assigned value 'magnet'

// 3. GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan is globally declared variable, gets hoisted
// function print call is hoisted
// local variable brendan assigned 'only okay'
// last console.log outside function consoles 'super cool'
// note: function print never called

// 4. Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var good is a globally declared variable, gets hoisted
// eat() gets hoisted
// function eat() also is hoisted
// but food is local and assigned 'half-chicken' value
// when eat() function called, console.log consoles 'half-chicken'
// console.log(food) cosoles global variable 'chicken'

// 5. GIVEN
// mean();
// console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean() hoisted but the function mean is never defined
// food is not defined outside 'var mean = function();
// I don't think 'var mean = function()' is valid

// 6. GIVEN
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
// first console.log consoles undefined
// global var genre, rewind();, and function rewind() hoisted
// 'genre' in function' surprisingly is acceptable
// first console.log in function consoles 'rock'
// second console.log in function consoles 'r&b'
// last console.log grabs global value and consoles 'disco'

// 7. GIVEN
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
//can't believe it, but 'dojo = "san jose" is valid hoisted
// first console.log will console global var value 'san jose'
// learn function hoisted
// function learn() hoisted
// first local function console.log consoles 'seattle'
// second local function console.log consoles 'burbank'
// last console.log outside function consoles global value 'san jose'

// 8. GIVEN
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
//first console.log runs on hoisted function makeDojo
// but const, once assigned 'Chicago, 65' cannot be reassigned 
// don't quote me on that above statement, it's my guess.












