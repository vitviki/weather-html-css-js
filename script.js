const API_KEY = "9673304479099ebb4eddb48b43f8dc28";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=new+delhi";

const temp = document.getElementsByClassName("temp")[0];
const city = document.getElementsByClassName("city")[0];
const humidity = document.getElementsByClassName("humidity")[0];
const wind = document.getElementsByClassName("wind")[0];

const getWeather = async () => {
    try {
        const response = await fetch(
            API_URL + `&appid=${API_KEY}`
        );
    
        const data = await response.json();
        
        // Update the front page
        temp.innerHTML = data.main.temp + "°c";
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity;
        wind.innerHTML = data.wind.speed + " km/h"
        
        console.log(data);
    } catch (error) {

    }
}

// Fetch the weather
getWeather();

// Update 