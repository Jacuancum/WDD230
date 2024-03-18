const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.41526&lon=114.08942&appid=b819e64251633b78d3925158881882f3';

  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  function displayResults(data) {
    const forecasts = data.list.slice(0,3);
    forecasts.foreach((forecast, index)=> {
      const Celsiustemp = Math.round(forecast.main.temp - 273.15);
      const date =new Date(forecasts.dt * 1000);
      const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][date.getDay()];
      const tempElement = document.createElement('p');

      
      currentTemp.innerHTML = `${day}: ${Celsiustemp}&deg;C`;
      const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      let desc = data.weather[0].description;
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      captionDesc.textContent = `${desc}`;

      document.body.appendChild(tempElement);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Show the banner only on Monday, Tuesday, and Wednesday
        const banner = document.getElementById('meeting-banner');
        banner.style.display = 'block';

        const closeBtn = document.getElementById('close-banner');
        closeBtn.addEventListener('click', function() {
            banner.style.display = 'none';
        });
    }
});