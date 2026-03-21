const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=801e6c86a27c06838b928d916b011a09';

const apiFetch = async () => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            displayResults(json)
        }
        else {
            throw error(response.text)
        }

    }
    catch (error) {
        console.log(error)
    }

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather.icon}.png`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather.description);
    captionDesc.textContent = `${desc}`;
}

apiFetch();