import { MatchResult } from "./MatchResult";
import { dateStringToDate } from './utils';
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";


interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];
    constructor(public reader: DataReader) { }

    static formCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }

    public load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
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
        })
    }

}