const weatherUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=25cadc5e26b24175a5874453231110&q=Tonsberg&days=4&aqi=no&alerts=no";

const currentText = document.getElementById("current-text");
const current = document.getElementById("current");
const currentXinfoOne = document.getElementById("current-xinfo-One");
const currentXinfoTwo = document.getElementById("current-xinfo-Two");
const currentXinfoThree = document.getElementById("current-xinfo-Three");
const currentXinfoFour = document.getElementById("current-xinfo-Four");
const boxes = document.querySelectorAll(".box");
const forecastOne = document.getElementById("forecast-one");
const forecastTwo = document.getElementById("forecast-two");
const forecastThree = document.getElementById("forecast-three");
const forecastFour = document.getElementById("forecast-four");

const timePlace = document.getElementById(`time`);
const content = document.getElementById("content");


let today = new Date();
let hours = today.getHours();

let minutes = today.getMinutes();
if(minutes < 10){
  minutes = "0" + minutes;
}

console.log(hours + ":" + minutes);

let day = today.getDay();
let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(daylist[day]);

async function getWeather() {
  try {
    const data = await fetch(weatherUrl, {
      method: "GET",
    });
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    const response = await data.json();
    console.log(response);

    if (hours <= 6 || hours >= 18) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      // boxes.classList.add("box-dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }

    const currentData = response.current;
    const forecastOneData = response.forecast.forecastday[0].day;
    const forecastTwoData = response.forecast.forecastday[1].day;
    const forecastThreeData = response.forecast.forecastday[2].day;
    const forecastFourData = response.forecast.forecastday[3].day;

    const sunrise = (response.forecast.forecastday[0].astro.sunrise).substring(0,5);
   
    const sunset = response.forecast.forecastday[0].astro.sunset

    function convertTo24HourFormat(sunset) {
      const [h, m, a] = sunset.split(/:| /);
      return (h % 12 + (a === "PM" ? 12 : 0)).toString().padStart(2, "0") + ":" + m;
    }
    const time24h = convertTo24HourFormat(sunset);
    console.log(time24h); 

    currentText.innerHTML = `
    <div class="card-current-text">
    <h7>${"Now"}</h7>
    <h1>${currentData.condition.text}</h1>
    <p class="text-grader-two">${currentData.temp_c}°C</p></div>
    `;

    current.innerHTML = `
      <img class="card-current-img" src="${currentData.condition.icon}" alt="Weather Icon" />
    `;

    currentXinfoOne.innerHTML = `
    <div class="currentXinfoOne">
    <p class="header-litle-text">Sunrise</p>
    <p class="header-bold-text">${sunrise}</p></div>`;

    currentXinfoTwo.innerHTML = `
    <div class="currentXinfoTwo">
    <p class="header-litle-text">Sunset</p>
    <p class="header-bold-text">${time24h}</p></div>
    `;

    currentXinfoThree.innerHTML = `
    <div class="currentXinfoThree">
    <p class="header-litle-text">Wind</p>
    <p class="header-bold-text">${currentData.wind_degree}</p></div>`;

    // currentXinfoFour.innerHTML = `
    // <div class="currentXinfoFour">
    // <p class="header-litle-text">Humidity</p>
    // <p class="header-bold-text">${currentData.humidity}</p></div>
    // `;

    forecastOne.innerHTML = `
      <p class="header-litle-text">${daylist[2]}</p>
      <p class="header-bold-text">${forecastOneData.condition.text}</p>
      <img class="forecastImg" src="${
        forecastOneData.condition.icon
      }" alt="Weather Icon" />
      <p class="text-grader">${Math.floor(forecastOneData.maxtemp_c)}°C</p>
    `;

    forecastTwo.innerHTML = `
    <p class="header-litle-text">${daylist[3]}</p>
    <p class="header-bold-text">${forecastTwoData.condition.text}</p>
      <img class="forecastImg" src="${
        forecastTwoData.condition.icon
      }" alt="Weather Icon" />
      <p class="text-grader">${Math.round(forecastTwoData.maxtemp_c)}°C</p>
    `;

    forecastThree.innerHTML = `
    <p class="header-litle-text">${daylist[4]}</p>
    <p class="header-bold-text">${forecastThreeData.condition.text}</p>
      <img class="forecastImg" src="${
        forecastThreeData.condition.icon
      }" alt="Weather Icon" />
      <p class="text-grader">${Math.round(forecastThreeData.maxtemp_c)}°C</p>
    `;

    forecastFour.innerHTML = `
    <p class="header-litle-text">${daylist[5]}</p>
    <p class="header-bold-text">${forecastFourData.condition.text}</p>
      <img class="forecastImg" src="${
        forecastFourData.condition.icon
      }" alt="Weather Icon" />
   <p class="text-grader">${Math.round(forecastFourData.maxtemp_c)}°C</p>
    `;

    timePlace.innerHTML = `
    <h3>${response.location.name}</h3> 
    <h3>${hours + ":" + minutes}</h3>
    `;
  } catch (error) {
    console.error(error);
  }
}

console.log(hours);

getWeather();

