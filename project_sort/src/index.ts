class Sort {
    constructor(public colletion: number[]) { }
    public sort(): void {

    }
}

const sort = new Sort([12, 93, -3, 1]);
sort.sort();
console.log(sort.colletion);//Para mostrar o array organizado de forma ascendente
