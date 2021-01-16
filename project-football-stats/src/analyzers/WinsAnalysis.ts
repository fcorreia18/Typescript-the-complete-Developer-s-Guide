import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analizer } from "../Summary";

export class WinsAnalysis implements Analizer {
    constructor(public teamName: string) { }

    run(matches: MatchData[]): string {
        let wins = 0;

        for (let team of matches) {
            if (team[1] === "Man United" && team[5] === MatchResult.HomeWins) {
                wins++;
            } else if (team[2] === "Man United" && team[5] === MatchResult.AwayWins) {
                wins++;
            }
        }
        return `${this.teamName} won ${wins} games`;
    }
}