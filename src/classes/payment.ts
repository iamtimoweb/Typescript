import { hasFormater } from "../interfaces/hasFormater";

export class Payment implements hasFormater {
    constructor(private recipient: string, private details: string, readonly amount: number) {}

    format = () => {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    };
}
