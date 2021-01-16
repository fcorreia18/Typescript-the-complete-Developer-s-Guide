import fs from 'fs';
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from './utils';
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
            .map((result: string): string[] => result.split(',')).map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6] as MatchResult,
                    row[7]
                ]
            });
    }


}