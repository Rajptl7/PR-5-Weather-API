const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');
const city = document.querySelector('#city');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const feelsLike = document.querySelector('#feelsLike');

searchBtn.addEventListener('click', () => {
    console.log(cityInput.value);
    
    cityName = cityInput.value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=df91e61d0afdc9f04c197ea5aae1f0e3`

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if(data.cod!==200){
                alert("City Not Found");
                return;
            }

            const { name, main, weather, wind: windData } = data;

            const { temp, humidity: humidityData, feels_like: feelsLikeData } = main;

            const { speed } = windData;

            const { description: descriptionData } = weather[0];

            city.textContent = name;
            temperature.textContent = (temp - 273.15).toFixed(1) + '°C';;
            description.textContent = descriptionData;
            humidity.textContent = humidityData + '%';
            wind.textContent = (speed * 3.6).toFixed(1) + ' km/h';
            feelsLike.textContent = (feelsLikeData - 273.15).toFixed(1) + '°C';
        })

})

