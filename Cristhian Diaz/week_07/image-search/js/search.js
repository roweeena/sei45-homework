let request_pending = false;
let page;
let last_page;

const searchFlickr = function (keywords, page) {
  console.info('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: page
  }).done(showImages).done(function (info) {
    console.log(info);
    request_pending = false;
  });
};

const showImages = function (results) {
  last_page = results.photos.pages;
  console.log(last_page);
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'
  ].join('');
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    console.log('submit');

    const searchTerms = $('#query').val();
    page = 1;
    $('#images').empty();
    searchFlickr( searchTerms );
  });

  $(window).on('scroll', function () {
    if ((request_pending) || (page === last_page)){
      return;
    };
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      request_pending = true;
      const searchTerms = $('#query').val();
      page ++;
      searchFlickr( searchTerms, page );
    }
  });
});
