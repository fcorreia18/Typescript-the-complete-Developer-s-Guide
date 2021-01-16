import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const match = new MatchReader('football.csv');
match.read();


let manUniteWins = 0;

for (let team of match.data) {
    if (team[1] === "Man United" && team[5] === MatchResult.HomeWins) {
        manUniteWins++;
    } else if (team[2] === "Man United" && team[5] === MatchResult.AwayWins) {
        manUniteWins++;
    }
}
console.log(manUniteWins, match);
