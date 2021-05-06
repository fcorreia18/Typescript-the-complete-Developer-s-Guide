export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    /**
     * format
     */
    format() {
        return `${this.recipient} owed  ${this.amount}kz for ${this.details}`;
    }
}
