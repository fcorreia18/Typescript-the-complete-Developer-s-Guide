const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function (a: number, b: number): number {
    return a * b;
};

const curryMultiply = (a: number) => (b: number): number => {
    return a + b
};

const multiplyByFive = curryMultiply(2);
multiplyByFive(5)

const todayWeather = {
    date: new Date,
    weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todayWeather)