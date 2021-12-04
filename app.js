let sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "mustard"],
};

const { bread, meat } = sandwich;

console.log(bread, meat);

// ------------------------------------------------

const regularPerson = {
	firstname: "bill",
	lastname: "wilson",
	spouse: {
		firstname: "lisa",
		lastname: "wilson",
	},
};

const lordify = ({ firstname }) => {
	console.log(`${firstname} of Conterbury`);
};

const lordifySpouse = ({ spouse: { firstname } }) => {
	console.log(`${firstname} of Conterbury`);
};

lordify(regularPerson);
lordifySpouse(regularPerson);

// --------------------------------------------

const [firstAnimal] = ["Horse", "Cat", "Dog"];

console.log(firstAnimal);

// -------------------------------------------
// Object literal enhancement

const firstname = "Bill";
const elevation = "9785";
const print = function () {
	console.log(`Mt. ${this.firstname} is ${this.elevation} feet.`);
};

const funHike = { firstname, elevation, print };

console.log(funHike);

funHike.print();

// ------------------------------------------

const peaks = ["Tallac", "Ralston", "Rose"];

// const [first] = peaks.reverse();

// Copy array to a new array
// const [first] = Array.from(peaks).reverse();
const [first] = [...peaks].reverse();

console.log(first);
console.log(peaks.join(", "));

const [one, ...others] = peaks;
console.log(one, others.join());

// --------------------------------------
// Rest parameter

function directions(...arg) {
	let [start, ...remain] = arg;
	let [finish, ...stops] = remain.reverse();

	console.log(start, stops, finish);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

// ------------------------------------
// Spread with objects

const morning = {
	breakfast: "omlet",
	lunch: "chicken",
};

const dinner = "salat";

const backpackMeal = {
	...morning,
	dinner,
};

console.log(backpackMeal);

// ---------------------------------
// Asynchronous

fetch("https://api.randomuser.me/?nat=US&results=1")
	.then((response) => response.json())
	.then((data) => data.results)
	.then(console.log)
	.catch(console.error);

async function getFakeUser() {
	try {
		let response = await fetch("https://api.randomuser.me/?nat=US&results=1");
		let { results } = await response.json();
		console.log(results);
	} catch (error) {
		console.error(error);
	}
}

getFakeUser();

// ----------------------------------

function Vacation(destination, lenght) {
	this.destination = destination;
	this.lenghth = length;
}
Vacation.prototype.print = function () {
	console.log(`${this.destination} | ${this.lenght} days`);
};

const maui = new Vacation("Maui", 7);

// ------------------------------------
// immutable objects

let color = {
	title: "lawn",
	color: "red",
	rating: 0,
};

function rateColor(color, rating) {
	return Object.assign({}, color, { rating: rating });
}

const rateColor2 = (color, rating) => ({
	...color,
	rating,
});

console.log(rateColor2(color, 10).rating);
console.log(color.rating);

let colors = [{ title: "red" }, { title: "green" }, { title: "blue" }];

//const addColor = (title, array) => array.concat({ title });
//
//console.log(addColor("yellow", color));
console.log(colors);

const addColor2 = (title, array) => [...array, { title }];
console.log(addColor2("yellow", colors));

let person = {
	firatname: "Fredrick",
	canRead: false,
	canWrite: false,
};

// Pure function
// It takes argument
// Calculates based on arguments
// Immutates its argument has no side effect
// Returns value
const selfEducvate = (person) => ({
	...person,
	canRead: true,
	canWrite: true,
});

console.log(selfEducvate(person));
console.log(person);

let arr = [1, 2, 3];
console.log(arr.join());

// -----------------------------------

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const cutSchool = (cut, list) => list.filter((school) => school != cut);

console.log(cutSchool("Washington & Liberty", schools));
console.log(schools.join("\n"));

const highSchools = schools.map((school) => `${school} High school`);

console.log(highSchools.join("\n"));
console.log(schools.join("\n"));

const highSchoolsObj = schools.map((school) => ({ schoolname: school }));
console.log(highSchoolsObj);

let schoolNames = [
	{
		nameS: "Yorktown",
	},
	{
		nameS: "Stratford",
	},
	{
		nameS: "Wakefield",
	},
];

const updateName = (oldName, nameS, arr) => {
	return arr.map((item) => {
		if (item.nameS === oldName) {
			return {
				...item,
				nameS,
			};
		} else {
			return item;
		}
	});
};

// Same update function in one line
const updateName2 = (oldName, nameS, arr) =>
	arr.map((item) => (item.nameS === oldName ? { ...item, nameS } : item));

let updatedSchool = updateName2("Stratford", "Woodlawn", schoolNames);
console.log("updated: ", updatedSchool);
console.log("original", schoolNames);

// -------------------------------------
// Transform an object to array of objects

const schoolsObject = {
	Stratford: 2,
	Yorktown: 5,
	Wakefield: 3,
};

const schoolArray = Object.keys(schoolsObject).map((key) => ({
	name: key,
	wins: schoolsObject[key],
}));

console.log(schoolArray);

// ---------------------------------
// array.reduce((Calc,value,index,array)=>{}, initialValue)
const ages = [20, 10, 8, 23, 43, 29, 35, 40];

const maxAge = ages.reduce((max, age) => {
	console.log(`${age}>${max}=${age > max}`);
	if (age > max) {
		return age;
	} else {
		return max;
	}
}, 0);

const maxAge2 = ages.reduce((max, age) => (age > max ? age : max), 0);
console.log(maxAge2);

console.log(maxAge);
console.log(ages);

// -----------------------------------
// Convert array to an object
const colorsArray = [
	{
		id: "JKL",
		title: "Red",
		rating: 3,
	},
	{
		id: "LMN",
		title: "Green",
		rating: 3,
	},
	{
		id: "OPQ",
		title: "Blue",
		rating: 3,
	},
];

const hashColors = colorsArray.reduce((hash, item) => {
	hash[item.id] = {
		title: item.title,
		rating: item.rating,
	};
	return hash;
}, {});

console.log(hashColors);

const colorsDouble = ["red", "green", "red", "green", "blue"];

// 1
console.log([...new Set(colorsDouble)]);

// 2
const uniqueColors = colorsDouble.reduce(
	(unique, item) => (unique.indexOf(item) !== -1 ? unique : [...unique, item]),
	[]
);

console.log(uniqueColors);

//-----------------------------------
// HIgher order functions
const invokeIf = (condition, fnTrue, fnFalse) =>
	condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!");

const showUnauthorized = () => console.log("Unathorized!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

//----------------------------------
// currying technique
const userLog = (userName) => {
	return function (message) {
		console.log(`${userName} -> ${message}`);
	};
};

const log = userLog("mikaeil");

log("called inner function ...");

for (let i = 0; i < 5; i++) {
	log(`called ${i}`);
}

//------------------------------
// Recursion
const countDown = (value, fn) => {
	fn(value);
	return value > 0 ? countDown(value - 1, fn) : value;
};
countDown(10, (value) => console.log(value));

//-----------------------------
// Composition
const template = "hh:mm:ss tt";
const clockTime = template
	.replace("hh", "03")
	.replace("mm", "33")
	.replace("ss", "33")
	.replace("tt", "PM");

console.log(clockTime);
console.log(template);

const compose = (...fns) => {
	return function (arg) {
		return fns.reduce((composed, fn) => fn(composed), arg);
	};
};

const inc = (a) => a + 1;
const inc2 = (a) => a + 2;
const inc3 = (a) => a + 3;

const composedFunctions = compose(inc, inc2, inc3);
console.log(composedFunctions(1));

//----------------------------------
// Put it all together
// Clock app with functional programming
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log2 = (message) => console.log(message);

const serializeClockTime = (date) => ({
	hours: date.getHours(),
	minutes: date.getMinutes(),
	seconds: date.getSeconds(),
});

const civilianHours = (clockTime) => ({
	...clockTime,
	hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
	...clockTime,
	ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

log2(civilianHours(appendAMPM({ hours: 13, minutes: 25, seconds: 33 })));

const display = (target) => {
	return function (time) {
		target(time);
	};
};

display(console.log)("time to display");

const formatClock = (format) => (time) =>
	format
		.replace("hh", time.hours)
		.replace("mm", time.minutes)
		.replace("ss", time.seconds)
		.replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
	...clockTime,
	key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});
log2(prependZero("hours")({ hours: 2, minutes: 25, seconds: 5 }));
