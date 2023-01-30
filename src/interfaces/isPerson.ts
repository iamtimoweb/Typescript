interface isPerson {
    name: string;
    age: number;

    // methods for the isPerson interface
    speak: (a: string) => void; // using arrow function
    spend(a: number): number; // normal method declaration
}

// Declaring a variable of type isPerson and has to implement the signature of the interface.
let me: isPerson = {
    name: "Timo Web",
    age: 40,
    speak: (text: string) => {
        console.log(text);
    },
    spend: (amount: number) => {
        console.log("I spend", amount);
        return amount;
    },
};

// Declaring the function that accepts a parameter of type isPerson

const greetPerson = (person: isPerson) => {
    console.log(`Hi ${person.name}`);
};

export { isPerson, me, greetPerson };
