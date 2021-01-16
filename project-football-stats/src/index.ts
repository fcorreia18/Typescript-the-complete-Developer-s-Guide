
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.formCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches)


