import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const match = new CsvFileReader('football.csv');

const result = new MatchReader(match);
result.load();

let manUniteWins = 0;

for (let team of result.matches) {
    if (team[1] === "Man United" && team[5] === MatchResult.HomeWins) {
        manUniteWins++;
    } else if (team[2] === "Man United" && team[5] === MatchResult.AwayWins) {
        manUniteWins++;
    }
}
console.log(manUniteWins, result);
