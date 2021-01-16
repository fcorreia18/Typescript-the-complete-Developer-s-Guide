import { MatchData } from "./MatchData";

export interface Analizer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analizer: Analizer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analizer.run(matches);
        this.outputTarget.print(output);
    }
}