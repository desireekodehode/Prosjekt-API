const weatherUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=25cadc5e26b24175a5874453231110&q=Tonsberg&days=4&aqi=no&alerts=no";


const currentText = document.getElementById("current-text");
const current = document.getElementById("current");
const currentXinfoOne = document.getElementById("current-xinfo-One");
const currentXinfoTwo = document.getElementById("current-xinfo-Two");
const currentXinfoThree = document.getElementById("current-xinfo-Three");
const currentXinfoFour = document.getElementById("current-xinfo-Four");
const boxes = document.querySelectorAll(".box")
const forecastOne = document.getElementById("forecast-one");
const forecastTwo = document.getElementById("forecast-two");
const forecastThree = document.getElementById("forecast-three");
const forecastFour = document.getElementById("forecast-four");


const timePlace = document.getElementById(`time`);
const content = document.getElementById('content');

let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
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

if (hours <= 6 || hours >= 18){ 
  document.body.classList.add('dark-mode')
  document.body.classList.remove('light-mode')
  boxes.classList.add("box-dark-mode")
} else {
  document.body.classList.remove('dark-mode')
  document.body.classList.add('light-mode')
}

    const currentData = response.current;
    const forecastOneData = response.forecast.forecastday[0].day;
    const forecastTwoData = response.forecast.forecastday[1].day;
    const forecastThreeData = response.forecast.forecastday[2].day;
    const forecastFourData = response.forecast.forecastday[3].day;

    currentText.innerHTML =`
    <h7>${daylist[day]}</h7>
    <h1>${currentData.condition.text}</h1>
    <h8>${currentData.temp_c}°C</h8>
    `;

    current.innerHTML = `
      <img class="card-current-img" src="${currentData.condition.icon}" alt="Weather Icon" />
      <p>${response.forecast.forecastday[0].astro.sunrise}</p>
      <p>${response.forecast.forecastday[0].astro.sunset}</p>
    `;

    forecastOne.innerHTML = `
      <h5>${daylist[day]}</h5>
      <h2>${forecastOneData.condition.text}</h2>
      <img class="forecastImg" src="${forecastOneData.condition.icon}" alt="Weather Icon" />
      <p>${Math.floor(forecastOneData.maxtemp_c)}°C</p>
    `;

    forecastTwo.innerHTML = `
    <h5>${daylist[day]}</h5>
      <h2>${forecastTwoData.condition.text}</h2>
      <img class="forecastImg" src="${forecastTwoData.condition.icon}" alt="Weather Icon" />
      <p>${Math.round(forecastTwoData.maxtemp_c)}°C</p>
    `;

    forecastThree.innerHTML = `
    <h5>${daylist[day]}</h5>
      <h2>${forecastThreeData.condition.text}</h2>
      <img class="forecastImg" src="${forecastThreeData.condition.icon}" alt="Weather Icon" />
      <p>${Math.round(forecastThreeData.maxtemp_c)}°C</p>
    `;

    forecastFour.innerHTML = `
    <h5>${daylist[day]}</h5>
      <h2>${forecastFourData.condition.text}</h2>
      <img class="forecastImg" src="${forecastFourData.condition.icon}" alt="Weather Icon" />
      <p>${Math.round(forecastFourData.maxtemp_c)}°C</p>
    `;


    timePlace.innerHTML = `
    <h3>${response.location.name}</h3> 
    <h4>${hours + ":" + minutes}</h4>
    `;
  } catch (error) {
    console.error(error);
  }
}

console.log(hours);


getWeather();

{
  /* <p>Last Updated: ${response.current.last_updated}</p> */
}
{
  /* <p>Cloudiness: ${response.current.cloud}%</p> */
}
{
  /* <h2>${response.location.name}, ${response.location.country}</h2> */
}
// document.body.classList.add('dark-mode')



    // currentXinfoOne.innerHTML = `
    // <h6>Sunrise: ${forecastOneData.astro.sunrise}</h6>
    // `;

    // currentXinfoTwo.innerHTML = `
    // <h6>Sunset: ${currentData.astro.sunset}</h6>
    // `;

    // currentXinfoThree.innerHTML = `
    // <h6>Wind: ${currentData.wind_kph} km/h</h6>
    // `;

    // currentXinfoFour.innerHTML = `
    // <h6>Humidity: ${currentData.humidity}%</h6>
    // `;
