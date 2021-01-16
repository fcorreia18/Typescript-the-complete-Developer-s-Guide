import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from './utils';
type MatchData = [Date, string, string, number, number, MatchResult, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
    public mapRow(row: string[]): MatchData {
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
    }
}