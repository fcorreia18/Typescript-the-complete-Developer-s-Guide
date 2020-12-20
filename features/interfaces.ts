interface Reportable {
    summary(): string
}
const oldCivic = {
    novoDado: 2,//Não tem problema nenhum que esse objecto tenha propriedades a mais em relação a interface, desde que ele satisfaça a estrutura e os dados da interface está tudo bem.
    name: 'civic',
    year: new Date,
    isBroken: true,
    summary(): string {
        return `${this.name} is the name of the car`;
    }
}

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printReport = (report: Reportable): void => {
    console.log(report.summary())
}
printReport(oldCivic);
printReport(drinks);