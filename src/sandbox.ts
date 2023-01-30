import { tup } from './Tuples/tuples.js';
import Invoice from "./classes/Invoice.js";
import { ResouceType } from "./Enums/enums.js";
import { addUID, add_with_name_property, Resource } from "./generics/generics.js";
import { greetPerson, isPerson } from "./interfaces/isPerson.js";

const myName = "Mario";
console.log(myName);

const inputs = document.querySelectorAll("input");
console.log(inputs);

// loop througth the inputs
inputs.forEach((input) => console.log(input));

/********************************************************************************
 * Typescript basics: The main difference between javascript and typescript is that typescript uses strict types and javascript doesnot.
 ********************************************************************************/

// variables
let first_name = "Jimmy"; // cannot reassign this variable to any other type apart form a string type.

let age = 45; // cannot reassign this variable to any other type apart form a number type.

let married = true; // cannot reassign this variable to any other type apart form a boolean type.

// type checking during development.
const sumation = (num1: number, num2: number, num3: number) => {
    const sum = num1 + num2 + num3;
    return `The sum of the numbers is ${sum}`;
};
console.log(sumation(4, 9, 8));

/******************
 * Object & Arrays
 ******************/

// arrays
let names = ["Timo", "Web", "Jonathan", "Mark"]; // This array can only contain elements of only string types, you cannot push or add to it other elements of different types ie: names.push(3) or names[2]=true

let numbers = [10, 20, 30, 40, 50]; // This array can only contain elements of only number types, you cannot push or add to it other elements of different types ie: names.push('Timo') or names[2]=true

let mixed = [10, "Timo", true, 60.5, false, "Richy"]; // This array can contain elements of mixed types, you cannot push or add to it other elements of different types ie: names.push('Timo') or names[2]=true

// objects
let ninja = {
    name: "Jetli",
    belt: "black",
    age: 60,
};

ninja.name = "Jackie chan"; // only accepts string type assignment
ninja.belt = "green"; // only accepts string type assignment
ninja.age = 65; // only accepts number type assignment

// NB: Incase the ninja object variable is reassigned, it has to be the same structure and properties.

/******************************
 * Explicit Types
 ******************************/
let character: string; // will contain only string type
let experience: number; // will contain only numbers
let isDisabled: boolean; // will contain only boolean types

// arrays
const cities: string[] = [];
cities.push("kampala");

// union types
const uid: string | number = 0;
const mixed_types: (string | number | boolean)[] = []; // can contain string, number, boolean types
mixed_types.push("I love Jesus", 100, true);
console.log(mixed_types);

// objects
let students: object;
students = ["Peter", "Ronald", "Warren"];
console.log(students);

students = { name: "Zziwa", class: "Senior One", marks: 90 };
console.table(students);

/*******************************
 * Dynamic types or (any) types
 *******************************/

let animal: any; // can take up any type of value ie strings, numbers, objects etc
animal = "lion";
animal = 56;

// arrays
let hotels: any[] = []; // different value types can be pushed to the array after it has been declared.
hotels.push("Africana");
hotels.push("Sheraton");
hotels.push({ name: "Silversprings", fiveStar: true });
hotels.push(false);
console.log("The hotels are: ", hotels);

// object:
let countries: { name: any; independenceDay: any; president: string }; // the first two keys can take up any value types and the last key takes up strictly a value of string type.

countries = { name: "Uganda", independenceDay: "9th october, 1962", president: "General Yoweri Kaguta Museveni" };

/************************************
 * Functions in typescript
 ************************************/

let greetings = () => console.log("Good Morning friends"); // Note: By default, typescript, will infer the variable of greetings as of type of function and will throw errors incase you try to change its type.

// Declaring a variable of function type by default
let greet: Function;
greet = () => console.log("Good Evening friends");

// function parameters declared explicitly
const sum = (a: number, b: number) => a + b;
console.log(`The sum of the numbers is ${sum(40, 30)}`);

//passing a default function parameter
const difference = (a: number, b: number, c: number = 0) => console.log(`The difference is ${a + b - c}`);
difference(20, 50, 15);

//passing a nullable function parameter
const total = (a: number, b: number, c?: number) => {
    c ? console.log(`The total of the numbers is ${a + b + c}`) : console.log(`The total of the numbers is now ${a + b}`);
};
total(20, 10);

/********************************
 * Type Aliases in typescript
 ********************************/

// The type specification of variables or function parameters can get long winded especially for those can store different types, it is a better idea to alias them.
type StringOrNum = string | number;

const logDetails = (uuid: StringOrNum, password: string) => console.log(`The password has a uuid of ${uuid}`);
logDetails("2023ydldidn", "learncode");

(function (last_name: StringOrNum) {
    console.log("My last name is ", last_name);
})("Kasajja Mark");

/****************************************************************************************
 * Function Signatures: These allow you to declare a function and must be implements with the exact signatues
 *****************************************************************************************/
let sayHello: (name: string | number, greet: string) => void; // ---1
let calculator: (a: number, b: number, c: string) => number;

// implementing the functions
sayHello = (full_name: string | number, time: string) => {
    console.log(`Good ${time} ${full_name}`);
};
sayHello("Timo", "Night");

calculator = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") return numOne + numTwo;
    else if (action == "subtract") return numOne - numTwo;
    else if (action == "divide") return numOne / numTwo;
    else if (action == "multiply") return numOne * numTwo;
    else return 0;
};

const ans = calculator(60, 80, "add");
console.log("The answer is", ans);

/*************************
 * classes in typescript
 ************************/

// instantiating the class
const InvoiceObj1 = new Invoice("Timo", "work on the nafau website", 500);
const InvoiceObj2 = new Invoice("Web", "work on the nafau website", 500);

// creating an array thai is restricted to only the objects of the Invoice class.
let invoices: Invoice[] = [];

invoices.push(InvoiceObj1, InvoiceObj2);

// using the foreach loop to loop through the  objects invoices variable
invoices.forEach((Invoice) => {
    console.log(Invoice.format());
});

/*************************
 * Interfaces in typescript
 ************************/
const person1: isPerson = {
    name: "Mark Bugembe",
    age: 50,
    speak: (language: string) => console.log(`I speak ${language}`),
    spend: (amount: number) => amount,
};
greetPerson(person1);

/*************************
 * Generics in typescript
 ************************/
//call the function from the generics folder
const gen_uid1 = addUID({ name: "James", age: 45 });
const gen_uid2 = add_with_name_property(gen_uid1);
console.log(gen_uid2);

// calling the interface Resource of generic Type and enums
const doc1: Resource<object> = {
    uid: 90,
    resourceType: ResouceType.AUTHOR,
    data: { name: "Paul Merson", age: 75 },
};
const doc2: Resource<string[]> = {
    uid: 90,
    resourceType: ResouceType.BOOK,
    data: ["Badang", "Oliver Twist", "Once a upon a time in china", "The forbidden kingdom"],
};
console.log(`doc1= ${doc1} and is of type ${typeof doc1}`, doc1);
console.log(`doc2= ${doc2} and is of type ${typeof doc2}`, doc2);


/***********************
 * Tuples in Typescript
 **********************/

console.log("Tuple is ", tup, ' and is of type ', typeof(tup))