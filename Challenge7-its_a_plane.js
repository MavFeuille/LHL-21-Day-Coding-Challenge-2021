const temperature = 32;
const condition = "Sunny with small clouds";
const windSpeed = 20;
const windDirection = "NNE";

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  this.temperature = Math.round((temperature - 32) * 5 / 9);
  this.windSpeed = Math.round(windSpeed / 2.237);
  this.windDirection = windDirection;
  this.condition = condition;

  return this;
}

storeWeatherConditions(temperature, condition, windSpeed, windDirection);