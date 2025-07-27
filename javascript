$(document).ready(function () {
  $('#getWeatherBtn').click(function () {
    const city = $('#cityInput').val();
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
      alert('Please enter a city name.');
      return;
    }

    $.getJSON(url, function (data) {
      $('#cityName').text(data.name);
      $('#temperature').text(data.main.temp);
      $('#humidity').text(data.main.humidity);
      $('#windSpeed').text(data.wind.speed);
      $('#weatherCondition').text(data.weather[0].main);
      $('#weatherBox').removeClass('d-none');
    }).fail(function () {
      alert('City not found. Please try again.');
      $('#weatherBox').addClass('d-none');
    });
  });
});
