export class CharactersCollection {
    constructor(public data: string) { }

    get length(): number {
        return this.data.length;
    }

    public compare(leftIndex: number, rigthIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rigthIndex].toLocaleLowerCase();
    }
    /**
     * sort
   */
    public swap(leftIndex: number, rigthIndex: number): void {
        const characters = this.data.split('');//Vai repartir a string num array 
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rigthIndex];
        characters[rigthIndex] = leftHand;
        this.data = characters.join('');//Vai torná-lo numa string novamente
    }
}