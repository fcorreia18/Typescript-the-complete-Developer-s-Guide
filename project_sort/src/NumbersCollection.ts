export class NumbersCollection {
    constructor(public data: number[]) { }

    get length(): number {
        return this.data.length;
    }

    /**
     * compare
     */
    public compare(leftIndex: number, rigthIndex: number): boolean {
        return this.data[leftIndex] > this.data[rigthIndex];
    }

    /**
     * swap
     */
    public swap(leftIndex: number, rigthIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rigthIndex];
        this.data[rigthIndex] = leftHand;
    }
}