const apiKey = "807a33fba27a73c42d855e28cd4f9349";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const error = document.querySelector(".error");
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
            error.style.display = "block";
            document.querySelector(".weather").style.display = "none"; 
         }else{
            let data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "weather-app-img/images/clouds.png"
            }else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "weather-app-img/images/clear.png"
            }else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "weather-app-img/images/rain.png"
            }else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "weather-app-img/images/drizzle.png"
            }else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "weather-app-img/images/mist.png"
            }else if (data.weather[0].main == "Snow"){
                weatherIcon.src = "weather-app-img/images/snow.png"
            }

            document.querySelector(".weather").style.display = "block";
            error.style.display = "none";
         }
        
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);

    })
    

    