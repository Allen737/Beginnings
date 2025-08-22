const apiKey = "8535526b7d72dd5ba628f23ef8edfd97";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city");
    return;
  }
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
        return;
      }
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      document.getElementById("weatherResult").innerHTML = `
        <h3>${city}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Weather: ${weather}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Something went wrong!</p>`;
    });
});
