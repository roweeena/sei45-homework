const fetchPrice = function (event) {
  event.preventDefault();
  const crypto = $('#crypto').val();
  const currency = $('#currency').val();

  $.ajax(`https://api.coingecko.com/api/v3/simple/price?ids=${ crypto }&vs_currencies=${ currency }`).done(function (data) {
    const price = data[crypto][currency];
    console.log(price);
    $('#result').text(`The price of ${ crypto.toUpperCase() } in ${ currency.toUpperCase() } is ${price}`);
  });
};

$('form').on('submit', fetchPrice);
