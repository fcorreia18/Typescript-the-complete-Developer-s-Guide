import fs from 'fs';
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
    data: T[] = [];
    abstract mapRow(row: string[]): T;
    constructor(public filename: string) { }

    public read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((result: string): string[] => result.split(',')).map((this.mapRow));
    }


}