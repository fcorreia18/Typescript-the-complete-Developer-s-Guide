import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analizer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analizer: Analizer, public outputTarget: OutputTarget) { }

    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        return new Summary(new WinsAnalysis(teamName), new HtmlReport);
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analizer.run(matches);
        this.outputTarget.print(output);
    }
}