class Sort {
    constructor(public colletion: number[]) { }
    public sort(): void {
        const { length } = this.colletion;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const leftHand = this.colletion[j];
                this.colletion[j] = this.colletion[j + 1];
                this.colletion[j + 1] = leftHand;

            }

        }
    }
}

const sort = new Sort([12, 93, -3, 1]);
sort.sort();
console.log(sort.colletion);//Para mostrar o array organizado de forma ascendente
