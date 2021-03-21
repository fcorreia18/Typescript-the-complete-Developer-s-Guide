export class Attributes<T> {
    constructor(private data: T) { }

    public get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    public set(update: T): void {
        Object.assign(this.data, update);
    }

    public getAll(): T {
        return this.data
    }
}
