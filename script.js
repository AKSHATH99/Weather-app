const apikey = "5b163736eb458e799fa69ca7b43ecbba";
const apiURL = " https://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherIcon = document.getElementById("weathericon")


// Function to fetch API and display information along with changing the image correspondig to the weather
async function checkWeather() {

    // Taking search input
    var search_input = document.getElementById("search");
    var input = search_input.value;

    // Fetching API
    const response = await fetch(apiURL + `&q=${input}` + `&appid=${apikey}`);

    // Edge case -> Wrong city name
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        search_input.value = " ";
    }

    else {
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

        // Changing the weather image according to the weather fetched
        // data.weather[0].main holds the  required info in the fetched data
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear sky") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else {
            weatherIcon.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        search_input.value = " ";
    }

}


// checkWeather();