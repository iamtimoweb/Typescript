/***************************
 * The dom and type casting.
 ***************************/

import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { hasFormater } from "./interfaces/hasFormater";

// the ! means, the developer is certain that the anchor tag is available.
const anchor = document.querySelector("a")!;
//console.log(anchor?.href); you can use the ? instead of ! to denote that the variable anchor can still be nullable if you are not sure it exists.

// changed the href value of the anchor tag
anchor.href = "https://instagram.com/timoweb";
//console.log(anchor.href);

// accessing the form element for adding new items
const form = document.querySelector(".addNewItemForm") as HTMLFormElement;

// Accessing the inputs of the form.
let type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
console.log(type.value);
// Get the ul container for the financial logger lists
const ul = document.querySelector("ul")!;
let list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log("type=", type.value, typeof type.value);
    console.log("tofrom=", tofrom.value);
    console.log("details=", details.value);
    console.log("amount=", amount.value);

    let doc: hasFormater;

    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, Number(amount.value));
        form.reset();
    } else {
        doc = new Payment(tofrom.value, details.value, Number(amount.value));
        form.reset();
    }


    // render list to the DOM.
    list.render(doc, type.value, "end");
});
