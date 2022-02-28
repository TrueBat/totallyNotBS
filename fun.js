var myfun = {
    name: "bat",
    age: 18,
    dickSize: 117,
}

function info(name, age, dickSize) {
    this.name = name;
    this.age = age;
    this.dickSize = dickSize;
}

var bat = new info("bat", 18, 17);

//console.log(bat.age);

function plus(x, y) {
    console.log(x + "+" + y + "=" + (x + y));
}

function veryfun() {
    console.log("veryfun");
}

//veryfun();
//plus(5,6);

function hello(name) {
    console.log('hello ' + name);
}

//hello("bat");

var items = ["Bottle", 5, true];

//console.log(items.join(" and "));

const greet = () => 'hello, world';

//console.log(greet());

const bill = (products, tax) => {
    let total =0;
    for(let i =0; i < products.length; i++) {
        total += products[i] + products[i]*tax;
    }
    return total;
}

let people = ['bat','bob','fred','frod'];

const helloppl = person => {
    console.log(`hello ${person}`);
}

//people.forEach(helloppl);

let user ={
name: 'bat',
age: 18,
email: 'truebat77@gmail.com',
location: 'jadra',
uni: 'BAU',
major: 'computer science',
skills: ['coding','stfu','cubing','chess'],
login(){
    console.log('u logged in bish');
},

logSkills() {
    console.log('hello ');
    this.skills.forEach(skill => console.log(skill));
    
}
};

//user.login();

//user.logSkills();

let array = ['one', 'two', 'three', 'four', 'five'];

//array.forEach(item => console.log(item));

//console.log(user.skills);

user.age = 19;

//console.log(user.age);

//bracket notation succ so i did'nt learn it its used for variables

const key = 'name';

//console.log(user[key]);

//maththhhhhhhhhhthththththththth

let random = Math.random() * 100;

console.log(Math.round(random));