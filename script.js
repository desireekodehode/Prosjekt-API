const weatherUrl ="https://api.weatherapi.com/v1/forecast.json?key=25cadc5e26b24175a5874453231110&q=Tonsberg&days=3&aqi=no&alerts=no";

// Hent referanse til HTML-elementet du ønsker å oppdatere
const current = document.getElementById('current'); // Erstatt 'weather-info' med ID-en til det aktuelle HTML-elementet

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
    console.log(response.current.temp_c);
    console.log(response.current.last_updated);
    console.log(response.current.cloud);
    console.log(response.current.condition.icon);

    current.innerHTML = `
      <h2>${response.location.name}, ${response.location.country}</h2>
      <img src="${response.current.condition.icon}" alt="Weather Icon" />
      <p>${response.current.temp_c}°C</p>
      <p>Cloudiness: ${response.current.cloud}%</p>
      <p>Last Updated: ${response.current.last_updated}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

getWeather();



// const weatherUrl ="https://api.weatherapi.com/v1/forecast.json?key=25cadc5e26b24175a5874453231110&q=Tonsberg&days=3&aqi=no&alerts=no"

  

// async function getWeather() {   
 
  
//     const data = await fetch(weatherUrl, {
//       method: "GET",
//       headers: {
//         "Transfer-Encoding": "chunked",
//         "Connection": "keep-alive",
//         "Vary": "Accept-Encoding",
//         "CDN-PullZone": "93447",
//         "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
//         "CDN-RequestCountryCode": "GB",
//         "Age": "0",
//         "x-weatherapi-qpm-left": "4999998",
//         "CDN-ProxyVer": "1.04",
//         "CDN-RequestPullSuccess": "True",
//         "CDN-RequestPullCode": "200",
//         "CDN-CachedAt": "10/11/2023 08:08:11",
//         "CDN-EdgeStorageId": "1075",
//         "CDN-Status": "200",
//         "CDN-RequestId": "8d3c9206726b8417ce47a2d9c5ea65e8",
//         "CDN-Cache": "HIT",
//         "Cache-Control": "public, max-age=180",
//         "Content-Type": "application/json",
//         "Date": "Wed, 11 Oct 2023 08:09:14 GMT",
//         "Server": "BunnyCDN-DE1-863",
//         "Via": "1.1 haproxy-api-1 (Varnish/7.3)"
//       },
//     });

//     if (!data.ok) {
//       throw new Error("Network response was not ok");
//     }
    
//     const response = await data.json();
//     console.log(response);
//     console.log(response.current.temp_c);
//     console.log(response.current.last_updated);
//     console.log(response.current.cloud);
//    console.log(response.current.condition.icon);

//    current.innerHTML = `
//    <h2 class="">${}</h2>
//    <p>Somthing:  ${}</p>
//    <img src="${}" />
//    <p>Something else: ${}</p>
//    <p>Something else also ${}</p>`
//   }
  


// getWeather()