const weatherApiKey = "GHTDEJZBQ4TUTM2CZH5U4WS9J";
const weatherUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tønsberg?unitGroup=metric&include=alerts%2Cdays%2Chours&key=GHTDEJZBQ4TUTM2CZH5U4WS9J&contentType=json";

async function getWeather() {
  try {
    const data = await fetch(weatherUrl, {
      method: "GET",
      headers: {},
    });

    if (!data.ok) {
      throw new Error("Network response was not ok");
    }

    const response = await data.json();
    console.log(response);
    console.log(response.longitude);
    console.log(response.resolvedAddress);

  } catch (err) {
    console.error(err);
  }
}

getWeather();