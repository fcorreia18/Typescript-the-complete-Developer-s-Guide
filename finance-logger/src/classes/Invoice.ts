import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
    constructor(readonly client: string, private details: string, public amount: number) { }
    /**
     * format
     */
    public format(): string {
        return `${this.client} owes ${this.amount}kz for ${this.details}`
    }
}