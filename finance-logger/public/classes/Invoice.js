export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    /**
     * format
     */
    format() {
        return `${this.client} owes ${this.amount}kz for ${this.details}`;
    }
}
