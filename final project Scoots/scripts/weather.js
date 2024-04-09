const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=22.41526&lon=114.08942&appid=b819e64251633b78d3925158881882f3';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  const Celsiustemp = Math.round(data.main.temp - 273.15);
  currentTemp.innerHTML = `${Celsiustemp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayResults(data) {
  const tomorrowForecast = data.list.find(entry => {
    const date = new Date(entry.dt * 1000);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.getDate() === tomorrow.getDate();
  });
  if (tomorrowForecast) {
    const Celsiustemp = Math.round(tomorrowForecast.main.temp - 273.15);
    currentTemp.innerHTML = `${Celsiustemp}&deg;C`;
    humidity.innerHTML = `${tomorrowForecast.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png`;
    let desc = tomorrowForecast.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  } else {
    console.log('not found in the response data');
  }
}