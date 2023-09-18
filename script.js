const API_KEY = "9673304479099ebb4eddb48b43f8dc28";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_card = document.getElementsByClassName("weather")[0];
const error_code = document.querySelector(".error");
const temp = document.getElementsByClassName("temp")[0];
const city = document.getElementsByClassName("city")[0];
const humidity = document.getElementsByClassName("humidity")[0];
const wind = document.getElementsByClassName("wind")[0];
const weatherIcon = document.getElementsByClassName("weather-icon")[0];
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const getWeather = async (search_city) => {
    try {
        const response = await fetch(
            API_URL + search_city + `&appid=${API_KEY}`
        );

        if (response.status === 404) {
            error_code.style.display = "block";
        } else {
            error_code.style.display = "none";
            const data = await response.json();
            
            // Update the front page
            temp.innerHTML = Math.round(data.main.temp) + "°c";
            city.innerHTML = data.name;
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + " km/h";
            updateImage(data.weather[0].main);
            weather_card.style.display = "block";     
        }
    
    } catch (error) {
        
    }
}


// Fetch the weather
searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
    searchBox.value = '';
});

const updateImage = (weather) => {
    const lowerCase = weather[0].toLowerCase() + weather.substring(1);
    weatherIcon.setAttribute("src", `./images/${lowerCase}.png`);
}
