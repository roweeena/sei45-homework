const fetchWeather = function(){

  event.preventDefault();
  const city = $('#city').val();
  const country = $('#country').val();

  $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1471cf7cf7e0597c9fe25545f5069e2f`).done(function(data){
    console.log(data);


  $(`<p> <strong>City: </strong>${data.name}</p>`).appendTo('.name')
  $(`<p><strong> Feels Like: </strong>${Math.round(data.main.feels_like-273.15)} C</p>`).appendTo('.feels')

  $(`<p><strong> Max Temp: </strong>${Math.round(data.main.temp_max-273.15)} C</p>`).appendTo('.maxtemp')
  $(`<p><strong>Min Temp: </strong>${Math.round(data.main.temp_min-273.15)} C</p>`).appendTo('.mintemp')
  $(`<p><strong>Humidity: </strong>${data.main.humidity} %</p>`).appendTo('.humidity')
  $(`<p><strong>Pressure: </strong>${data.main.pressure} hPa</p>`).appendTo('.pressure')
  $(`<p><strong>Wind-Speed: </strong>${data.wind.speed} km/h</p>`).appendTo('.wind')
  fetchAPOD();

  });
}

const fetchAPOD = function(){

  $.ajax('https://api.nasa.gov/planetary/apod?api_key=5iK3WaMbx1LZB9EPuB9NWlw7JqCtWacYwP30CoDr').done(function(data){
    console.log(data);
    $(`<h2> ${data.title} </h2>`).appendTo('.title');
    $(`<p> ${data.explanation} </p>`).appendTo('.explanation');

    $(`<p> Date: ${data.date} </p>`).appendTo('.date');
    $(`<p> Copyright: ${data.copyright} </p>`).appendTo('.copyRight');
    $('.image').attr('src', data.url);
  });
}

$('form').on('submit', fetchWeather);
