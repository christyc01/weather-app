const cityForm = document.getElementById("city-input");
also define: card, details, time, icon

function updateUI, take in data
  create object data.cityDets, data.weather
  update innerHTML - EnglishName, WeatherRext, Temperature.Metric.Value

  make var iconSrc with weather icon template literal
    add this as src

  make var timeSrc - check IsDayTime - if SourceBuffer, day.svg
    add this as src

  check if card contains .d-none, if yes then remove

async function (updateCity) - takes in (city)
  define cityDets (await) from getCity(city)
  define weather (await) from getWeather(cityDets.Key)
  return an object with both

add submit EL to cityForm
  stop it from reloading
  define city from the trimmed value
    reset the field

  updateCity(city) function, with then (updateUi with data) & catch (err)