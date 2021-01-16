import fs from 'fs';
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, MatchResult, string];
export abstract class CsvFileReader {
    data: MatchData[] = [];
    abstract mapRow(row: string[]): MatchData;
    constructor(public filename: string) { }

    public read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((result: string): string[] => result.split(',')).map((this.mapRow));
    }


}