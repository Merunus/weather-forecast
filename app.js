
// const API_key = "7b8af878b9bd0c3a386af0e12d3784fe";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=" + API_key + "&units=" + unit;   



const apiKey = "7b8af878b9bd0c3a386af0e12d3784fe";
const btn = document.getElementById("btn")
const checkCelcium = document.querySelector(".celcius")
const checkFarenheit = document.querySelector(".farenheit")

var unit = "metric"


let weather = {
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {

        const { name } = data;
        const { icon, description} = data.weather[0]; // Потому что это ветка weather, data - основной файл с данными, weather - ветка основого файла со своей инфой
        const {temp, humidity } = data.main;
        const { speed } = data.wind
        console.log(name,icon,description,speed,temp,humidity);
        document.getElementById("city").innerHTML = "Weather in " + name
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.getElementById("description").innerHTML = description
        document.getElementById("wind-speed").innerHTML = "Wind speed: "+ speed + "km/h"
        document.getElementById("humidity").innerHTML = "Humibity: " + humidity +"%" 
        document.getElementById("temp").innerHTML = temp + " &deg  <i class='fa-solid fa-temperature-empty'></i>"

    },
    search: function() {
    this.fetchWeather(document.querySelector(".input").value)
    }

}


btn.addEventListener("click", function() {
    weather.search();
   
})
document.querySelector(".input").addEventListener("keyup", function(event) {
    if (event.key == "Enter" ) {
        weather.search();
    }
})


