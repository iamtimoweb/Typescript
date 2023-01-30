import { hasFormater } from "../interfaces/hasFormater";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    // render method to render the li elements to the DOM
    render(item: hasFormater, heading: string, position: "start" | "end") {
        // create the li tag
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item");

        //create the h4 tag
        const h4 = document.createElement("h4");
        console.log("The heading is ",heading)
        h4.innerText = heading;

        // Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
        li.append(h4);

        // create the p tag
        const p = document.createElement("p");
        p.innerText = item.format();

        // Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
        li.append(p);

        // finally append the list to the dom
        if (position === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}
