const apiKey = `f3fd1715206e8ed0a383afeb0ccd3668`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  const weatherIcon = document.getElementById("weather-icon");
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("src", url);
};
