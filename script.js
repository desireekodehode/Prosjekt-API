

const weatherUrl ="https://api.weatherapi.com/v1/forecast.json?key=25cadc5e26b24175a5874453231110&q=Tonsberg&days=3&aqi=no&alerts=no";

const current = document.getElementById('current');
const forecastOne = document.getElementById('forecast-one');
const forecastTwo = document.getElementById('forecast-two');
const forecastThree = document.getElementById('forecast-three');
const timePlace = document.getElementById(`time`);

async function getWeather() {
  try {
    const data = await fetch(weatherUrl, {
      method: "GET"
    });

    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    
    const response = await data.json();
    console.log(response);

    const currentData = response.current;
    const forecastOneData = response.forecast.forecastday[0].day;
    const forecastTwoData = response.forecast.forecastday[1].day;
    const forecastThreeData = response.forecast.forecastday[2].day;

    current.innerHTML = `
      <h5>Today</h5>
      <h2>${currentData.condition.text}</h2>
      <img src="${currentData.condition.icon}" alt="Weather Icon" />
      <p>${currentData.temp_c}°C</p>
    `;

    forecastOne.innerHTML = `
      <h5>Tomorrow</h5>
      <h2>${forecastOneData.condition.text}</h2>
      <img src="${forecastOneData.condition.icon}" alt="Weather Icon" />
      <p>${forecastOneData.maxtemp_c}°C</p>
    `;

    forecastTwo.innerHTML = `
      <h5>Sett inn riktig dag</h5>
      <h2>${forecastTwoData.condition.text}</h2>
      <img src="${forecastTwoData.condition.icon}" alt="Weather Icon" />
      <p>${forecastTwoData.maxtemp_c}°C</p>
    `;

    forecastThree.innerHTML = `
    <h5>Sett inn riktig dag</h5>
      <h2>${forecastThreeData.condition.text}</h2>
      <img src="${forecastThreeData.condition.icon}" alt="Weather Icon" />
      <p>${forecastThreeData.maxtemp_c}°C</p>
    `;

    timePlace.innerHTML =`
    <h3>${response.location.name}</h3> 
    <h4>${response.location.localtime}</h4>
    `;

  } catch (error) {
    console.error(error);
  }
}

getWeather();








{/* <p>Last Updated: ${response.current.last_updated}</p> */}
{/* <p>Cloudiness: ${response.current.cloud}%</p> */}
{/* <h2>${response.location.name}, ${response.location.country}</h2> */}