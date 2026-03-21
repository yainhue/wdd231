const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const weatherHigh = document.querySelector('#weather-high');
const weatherLow = document.querySelector('#weather-low');
const weatherHumi = document.querySelector('#weather-humi');
const weatherSunrise = document.querySelector('#weather-sunrise');
const weatherSunset = document.querySelector('#weather-sunset');
// 
const weatherD2name = document.querySelector('#weather-day2');
const weatherD3name = document.querySelector('#weather-day3');
const weatherD1Temp = document.querySelector('#weather-day1-temp');
const weatherD2Temp = document.querySelector('#weather-day2-temp');
const weatherD3Temp = document.querySelector('#weather-day3-temp');

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.64&lon=-58.79&appid=801e6c86a27c06838b928d916b011a09&units=metric';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.64&lon=-58.79&exclude=current,minutely,hourly,alerts&appid=801e6c86a27c06838b928d916b011a09&units=metric';


const apiFetch = async () => {
    try {
        const currentResponse = await fetch(currentUrl)
        const forecastResponse = await fetch(forecastUrl)
        if (currentResponse.ok && forecastResponse.ok) {
            const currentJson = await currentResponse.json();
            const forecastJson = await forecastResponse.json();
            console.log("=== currentJson ===")
            console.log(currentJson);
            console.log("=== forecastJson ===")
            console.log(forecastJson);
            displayCurrentResults(currentJson)
            displayForecastResults(forecastJson)
            console.log("=== weather results displayed correctly ===")
        }
        else {
            throw error(currentResponse.text)
        }

    }
    catch (error) {
        console.log(error)
    }

}

function displayCurrentResults(data) {
    let roundedTemp = Math.ceil(data.main.temp);
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = capitalizeWords(data.weather[0].description);
    let high = Math.ceil(data.main.temp_max);
    let low = Math.ceil(data.main.temp_min);
    let humidty = data.main.humidity;
    let sunrise = data.sys.sunrise
    let sunriseDate = new Date(sunrise * 1000);
    let sunset = data.sys.sunset
    let sunsetDate = new Date(sunset * 1000);
    let dateOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    };

    currentTemp.innerHTML = `${roundedTemp}&deg;C`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = `${desc}`;
    weatherHigh.innerHTML = `${high}&deg;C`;
    weatherLow.innerHTML = `${low}&deg;C`;
    weatherHumi.textContent = `${humidty}%`;
    weatherSunrise.textContent = `${sunriseDate.toLocaleTimeString("en-US", dateOptions)}`;
    weatherSunset.textContent = `${sunsetDate.toLocaleTimeString("en-US", dateOptions)}`;

}

function displayForecastResults(data) {
    let d1RoundedTemp = Math.ceil(data.list[0].main.temp);
    let d2RoundedTemp = Math.ceil(data.list[8].main.temp);
    let d3RoundedTemp = Math.ceil(data.list[16].main.temp);
    let d2Name = data.list[8].dt
    let d2NameDate = new Date(d2Name * 1000);
    let d3Name = data.list[16].dt
    let d3NameDate = new Date(d3Name * 1000);
    let dateOptions = {
        weekday: "long"
    };

    weatherD1Temp.innerHTML = `${d1RoundedTemp}&deg;C`;
    weatherD2Temp.innerHTML = `${d2RoundedTemp}&deg;C`;
    weatherD3Temp.innerHTML = `${d3RoundedTemp}&deg;C`;

    weatherD2name.textContent = `${d2NameDate.toLocaleDateString("en-US", dateOptions)}:`;
    weatherD3name.textContent = `${d3NameDate.toLocaleDateString("en-US", dateOptions)}:`;

}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

if (currentTemp != null) {
    apiFetch();
}