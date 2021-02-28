extract class Attribute<T> {
     constructor(private data: T) { }

    public get(atribute: string): string | number {
        return this.data[atribute];
    }

    public set(update: T): void {
        Object.assign(this.data, update);
    }
}