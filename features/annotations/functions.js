var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
;
var multiply = function (a, b) {
    return a * b;
};
var curryMultiply = function (a) { return function (b) {
    return a + b;
}; };
var multiplyByFive = curryMultiply(2);
multiplyByFive(5);
var todayWeather = {
    date: new Date,
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todayWeather);
console.log("Olá");
