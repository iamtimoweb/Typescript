// Declaring a variable of type isPerson and has to implement the signature of the interface.
let me = {
    name: "Timo Web",
    age: 40,
    speak: (text) => {
        console.log(text);
    },
    spend: (amount) => {
        console.log("I spend", amount);
        return amount;
    },
};
// Declaring the function that accepts a parameter of type isPerson
const greetPerson = (person) => {
    console.log(`Hi ${person.name}`);
};
export { me, greetPerson };
