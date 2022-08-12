const inicio = document.querySelector("#celsius");

let valorFahrenheit = document.querySelector("#temp-fahrenheit");
let valorKelvin = document.querySelector("#temp-kelvin");

const obterFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};
const obterKelvin = (celsius) => {
  return parseFloat(celsius) + 273.15;
};

inicio.addEventListener("keyup", (event) => {
  valorFahrenheit.textContent = obterFahrenheit(inicio.value);
  valorKelvin.textContent = obterKelvin(inicio.value);
});