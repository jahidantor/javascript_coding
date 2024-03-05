if (5 > 6) {
    console.log('5 is grater than 6')
} else {
    console.log('5 is less than 6')
}

if (5 < 6) {
    console.log('5 is less than 6')
} else {
    console.log('5 is greater than 6')
}

if ( 'A' === 'A' && 'b'  === ' b' ) {
    console.log('hjkhk')
} else {
    console.log('jhghjhjhj')
}

if ( 'A' !== 'A' || 'b'  !== 'b' ) {
    console.log('first one wil be printed')
} else {
    console.log('2nd block will be printed')
}

if ( 'A' !== 'A' || 'b'  !== 'b' ) {
    console.log('first one wil be printed')
} else if ('A' === 'B') { 
    console.log('2nd block will be printed')
} else if ('c' === 'c') {
    console.log('3rd block will be printed')
} else {
    console.log('only will print when none of the abvoe condition is true')
}

if(5 === 5 || 6 !== 6) {
    console.log ('first one will be printed')
} else if(7 === 7) {
    console.log ('2nd block will be printed')
} else if(8 !== 8){
    console.log('3rd block will be printed')
} else {
    console.log ('only will print when conditions are true')
}

if(5 === 5 && 6 !== 6) {
    console.log ('first one will be printed')
} else if(7 === 7) {
    console.log ('2nd block will be printed')
} else if(8 !== 8){
    console.log('3rd block will be printed')
} else {
    console.log ('only will print when conditions are true')
}

if(5 === 5 && 6 === 6) {
    console.log ('first one will be printed')
} else if(7 === 7) {
    console.log ('2nd block will be printed')
} else if(8 !== 8){
    console.log('3rd block will be printed')
} else {
    console.log ('only will print when conditions are true')
}


let day = 'Friday';

if (day === 'Monday') {
    console.log('7am')
} else if( day === 'Friday') {
    console.log('10am')
} else {
    console.log('No Alarm')
}

switch(day) {
    case 'Monday':
        console.log('7am');
        break;
    case 'Tuesday':
        console.log('8am');
        break;
    case 'Wednesday':
        console.log('5am');
        break;
    case 'Thursday':
        console.log('6am');  
        break;
    case 'Friday':
        console.log('9am'); 
        break;
    case 'Saturday':
        console.log('9am'); 
        break;
    case 'Sunday':
        console.log('11am');  
        break;
    default:
        console.log('No days found')       
}


let i = 2;

while (i <= 5) 
{
    console.log('Bangladesh')
    i++;
}
console.log(i)


 i = -1;

while (i <= 5) 
{
    console.log('Bangladesh')
    i++;
}
console.log(i)

while (i >= 2) 
{
    console.log('Bensalem')
    i--;
}
console.log(i)

let x = 2
 
do {
    console.log('do while loop')
    x++;
} while ( x <= 2);


for (let i = 1; i < 11; i++) {
    console.log(i)
}

for (let i = 1; i > 11; i++) {
    console.log(i);
}

for (let i = 7; i >= 1; i--) {

    console.log(i);
}

for (let i = 4; i >= 5; i--) {
    
    console.log(i);
}


for (let i = 0; i < 2; i++) {
    console.log('print ' + i)
    for (let x = 1; x < 3; x++) {
        console.log('******' + x)
    }
}

let numberOfStore = 10;

for (let i = 2; i < 3; i++) {
    console.log(i)
    if (numberOfStore < 9) {
        console.log(numberOfStore)
    }
}

let bio = {
    age: '29',
    Race: 'Asian',
    city: 'philadelphia',

}

console.log(bio.age);
console.log(bio.city);
console.log(bio.city.length);

let student = {
    name1: 'Ayyash',
    school: 'Stephen Decatur',
    phone: {
        capacity: '256 gb',
        brand: 'iphone'
    }
}

console.log(student.phone.brand);

const str = 'my,name,is,antor';
const split_str = str.split(',');
console.log(split_str);
console.log(split_str.length);
console.log(split_str[3]);

const strng = 'my name is antor';
const split_strng = strng.split('');
console.log(split_strng);
console.log(split_strng[2]);


const strngg = 'my name is antor';
const split_strngg = strngg.split('');
console.log(split_strngg);


function greet() {
    let x = 10
    console.log('welcome to the world');
    console.log('my favorite color is blue');
    console.log(5 + x);
}

greet();

function getName () {
    let a = 'Ayyash'
    let b = 'Hasan'
    const name = a + b
    return name;
}
console.log(getName());


function getTrueOrFalse () {
    let value;
    if (1 < 2) {
        value = true
        }else{
            value = false
        }
        return value;
    }
console.log(getTrueOrFalse());

function getNetProfit() {
    let sales = 15000
    let COGS = 10000
    let tax = 2000
    let np = sales - COGS - tax
    return np;
}
console.log(getNetProfit());
let netProfit = getNetProfit();
console.log(netProfit);

function getProfit(sale, cogs) {
    let sales = sale
    let COGS = cogs
    let tax = 1000
    let np = sales - COGS - tax
    return np;
}

let nProfit = getProfit(18000, 12000)
console.log(nProfit);
console.log("Net profit:" +nProfit);

function getCars(country) {
    let cars = [['American', 'Escalade', 'Dodge', 'Ford'],
    ['Japanese', 'Toyota', 'Honda', 'Nissan'], ['Italian', 'Ferrari', 'Lambo', 'Alpha Romeo'], ['Germany', 'Bmw', 'Mercedes', 'Audi']];
    
    if (cars[1][1] === country) {
        return cars[1]
    } else if (cars[2][2] === country) {
        return cars[2]
    } else {
        return cars[3]
    }
}

console.log(getCars('Germany'));

function add(n1, n2) {
    let sum = n1 + n2;
    return sum;
}
console.log(add(40, 10));

let add1 = (n1, n2, n3) => n1 + n2 + n3;
let resulttt = add1(15, 3, 6)
console.log(resulttt);


let laptop = {
    cpu: 'i9',
    ram: '16gb',
    brand: 'Mac',
    getConfig: function() {
        let Storage = 100
        console.log(this.ram)
    }
}

console.log(laptop.cpu);
laptop.getConfig();

let num = 1;
function show() {
    if (num < 4) {
        console.log('Hello Antor');
        num++;
        show();   
    } 
}

const car1 = {
    make: 'Bmw',
    model: 'x6',
    year: '2024',
    color: 'blue',
    drive: function () {
        console.log(`You drive ${this.model}`)
        console.log('you drive' + this.model)
    }
}

car1.drive();
console.log(car1.make)

const car2 = {
    make: 'Mercedes',
    model: 'AMG',
    year: '2024',
    color: 'Black',
    drive: function () {
        console.log(`You drive ${this.year}`)
    }
}

car2.drive();
console.log(car2.make)

const car3 = {
    make: 'Mercedes',
    model: 'G-Wagon',
    year: '2024',
    color: 'White',
    drive: function () {
        console.log(`You drive ${this.color}`)
    }
}


car3.drive();
console.log(car3.make)

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function() {
        console.log(`You drive the ${this.model}`)
    }
}

const carA = new Car('BMW', 'X7', '2024', 'Blue')
console.log(typeof carA);
carA.drive();

const carB = new Car('Toyota', 'Camry', '2024', 'White')
console.log(typeof carB);
carB.drive();
console.log(carA.make)
console.log(carB.year)

//In JavaScript, a class, that defines how an object
//  should be constructed. It serves as a blueprint for creating objects
//  with specific properties and methods. 

//global variable
let abc = 'Global variable'
let courseList = [];

class User {
    constructor (name, email) {
        console.log('Hello new user')
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return {name: this.name, email: this.email}
    }

    enrollCourse (name) {
        courseList.push(name)
    }

    getCourseList () {
        return courseList;
    }
}

module.exports = User;

// import User from './learnClasses1';

//const User = requires('./learnClasses1.js')

const newUser = new User('Antor', 'aliu01373@gmail.com');
console.log(newUser.getInfo())
console.log(newUser.getInfo().name);

console.log('before adding values to array')
console.log(newUser.getCourseList());

newUser.enrollCourse('Cypress')
//courseList = ['Cypress']
newUser.enrollCourse('Python');
//courseList = ['Cypress', 'Python']
newUser.enrollCourse('Selenium')
// courseList = ['Cypress', 'Python', 'Selenium']
newUser.enrollCourse('Cyber Security')
// courseList = ['Cypress', 'Python', 'Selenium', 'Cyber Security']

console.log('after adding values to array')
console.log(newUser.getCourseList());

let getArrayLength = newUser.getCourseList().length;
for (let i = 0; i < getArrayLength; i++) {
    console.log(newUser.getCourseList()[i]);
}

console.log('Using foreach fucntion to print array');
let courses = newUser.getCourseList();
console.log(courses)
courses.forEach((cs) => console.log(cs))

