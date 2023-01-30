/*************************
 * classes in typescript
 ************************/
class Invoice {
    /*
    private client: string;
    private details: string;
    readonly amount: number; // this cannot be changed either inside or outside the class.

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    */
    // if you are using access modifies on the variable, this is the shorthand for the above codde
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // methods
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
export default Invoice;
