const add = (a: number, b: number): number => {
    return a + b;
}

function subtract (a: number, b: number): number {
    return a - b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: "sunny"
}

interface WeatherAndDate {
 date: Date, weather: string
}

const logWeather = (forecast:WeatherAndDate): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

const destructuredLogWeather = ({ date, weather }:WeatherAndDate): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);