const fetchWeather = function(){

  event.preventDefault();
  const city = $('#city').val();
  const country = $('#country').val();

  $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1471cf7cf7e0597c9fe25545f5069e2f`).done(function(data){
    console.log(data);

  $('.name').html(`<strong>City: </strong>${data.name}`)
  $('.feels').html(`<strong> Feels Like: </strong>${Math.round(data.main.feels_like-273.15)} C`)
  $('.maxtemp').html(`<strong> Max Temp: </strong>${Math.round(data.main.temp_max-273.15)} C`)
  $('.mintemp').html(`<strong>Min Temp: </strong>${Math.round(data.main.temp_min-273.15)} C `)
  $('.humidity').html(`<strong>Humidity: </strong>${data.main.humidity} %`)
  $('.pressure').html(`<strong>Pressure: </strong>${data.main.pressure} hPa`)
  $('.wind').html(`<strong>Wind-Speed: </strong>${data.wind.speed} km/h`)
  fetchAPOD();

  });
}

const fetchAPOD = function(){

  $.ajax('https://api.nasa.gov/planetary/apod?api_key=5iK3WaMbx1LZB9EPuB9NWlw7JqCtWacYwP30CoDr').done(function(data){
    console.log(data);

    $('.title').html(`${data.title}`)
    $('.explanation').html(`${data.explanation}`)
    $('.date').html(`Date: ${data.date}`)
    $('.copyRight').html(`Copyright: ${data.copyright}`)
    $('.image').attr('src', data.url);
  });
}

$('form').on('submit', fetchWeather);
