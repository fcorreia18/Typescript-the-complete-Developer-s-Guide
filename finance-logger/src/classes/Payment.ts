import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    constructor(readonly recipient: string, private details: string, public amount: number) { }
    /**
     * format
     */
    public format(): string {
        return `${this.recipient} owed  ${this.amount}kz for ${this.details}`
    }
}
