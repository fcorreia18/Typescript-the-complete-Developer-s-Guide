import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

//Create an object that satisfies the 'DataReader' interface
const match = new CsvFileReader('football.csv');

//Create an instance of 'MatchReader' and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(match);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport)
summary.buildAndPrintReport(matchReader.matches)


