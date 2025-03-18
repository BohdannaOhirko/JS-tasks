const weatherBtn = document.querySelector(".weather-btn");
weatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather();
  setInterval(fetchWeather, 10000);
});
const API_KEY = "02c2afb60ef4834aaa697a2fba012372";
const city = "Львів";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uk&appid=${API_KEY}`;

async function fetchWeather() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (response.ok) {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;

      WeatherStation.updateWeatherData(temperature, humidity, pressure);

      WeatherStation.getCurrentWeather();
    } else {
      throw new Error("Не вдалося отримати дані про погоду");
    }
  } catch (error) {
    document.getElementById("weather").innerHTML = `
      <p style="color:red;">${error.message}</p>
    `;
  }
}

const WeatherStation = {
  temperature: 24,
  humidity: 60,
  pressure: 760,
  history: [],
  updateWeatherData(temperature, humidity, pressure) {
    const timestamp = new Date().toLocaleString();
    this.temperature = Math.round(temperature);
    this.humidity = humidity;
    this.pressure = pressure;
    this.history.push({
      timestamp,
      temperature,
      humidity,
      pressure,
    });
    console.log(`Оновлено: ${timestamp}. Температура: ${this.temperature}°C`);
  },
  getHistory() {
    console.log(
      `Дані оновлено: температура: ${this.temperature}°C, вологість: ${this.humidity}%, тиск: ${this.pressure} мм.рт.ст.`
    );
  },
  displayWeatherForecast() {
    if (this.temperature > 25) {
      return `Жарко, температура ${this.temperature}°C. Рекомендується легкий одяг та вода.`;
    } else if (this.temperature > 10) {
      return `Комфортна погода (${this.temperature}°C).`;
    } else {
      return `Холодно. Одягайтесь тепліше.`;
    }
  },
  getCurrentWeather() {
    const weatherDiv = document.getElementById("weather-current");
    if (this.temperature > 22) {
      weatherDiv.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" class="weather-icon" alt="Сонячно">
            <p У місті ${city} cонячно, температура: ${this.temperature}°C, вологість: ${this.humidity}%, тиск: ${this.pressure} мм.рт.ст. </p>
        `;
    } else if (this.temperature < 22) {
      weatherDiv.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="weather-icon" alt="Хмарно">
            <p> У місті ${city} температура: ${this.temperature}°C, вологість: ${this.humidity}%, тиск: ${this.pressure} мм.рт.ст.</p>
        `;
    }
    //  else if (this.temperature) {
    //   weatherDiv.innerHTML = `
    //         <img src="https://cdn-icons-png.flaticon.com/512/1163/1163657.png" class="weather-icon" alt="Дощить">
    //         <p>Дощить, температура: 15°C</p>
    //     `;
    // }
    else {
      weatherDiv.innerHTML = `<p>Невідомий стан погоди</p>`;
    }
  },
};

WeatherStation.getHistory();
WeatherStation.updateWeatherData(16, 40, 700);
// WeatherStation.getCurrentWeather();
console.log(WeatherStation.displayWeatherForecast());
