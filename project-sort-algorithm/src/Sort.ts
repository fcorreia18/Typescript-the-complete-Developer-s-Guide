export abstract class Sort {
    abstract compare(leftIndex: number, rigthIndex: number): boolean;
    abstract swap(leftIndex: number, rigthIndex: number): void;
    abstract length: number;

    public sort(): void {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }

        }
    }
}
