const getMovie = function(){
  event.preventDefault();
  const search = $('#title').val();
  $.ajax('https://ghibliapi.herokuapp.com/films').done(function (data) {
    let movies = Object.values(data)
    // console.log(movies);
    for(let i = 0; i< movies.length; i++){
      let title = movies[i].title;
      let originalTitle = movies[i].original_title;
      let releaseDate = movies[i].release_date;
      let description = movies[i].description;
      // console.log(title);
        if (search === title) {

          // console.log('success');
          $(`<h3>Title: ${title}</h3>`).appendTo('#movieInfo');
          $(`<h4>Japanese Title: ${originalTitle}</h4>`).appendTo('#movieInfo');
          $(`<p>Release Date: ${releaseDate}</p>`).appendTo('#movieInfo');
          $(`<p>Summary: ${description}</p>`).appendTo('#movieInfo');
        }
    }

  });
}



$('form').on('submit', getMovie);
