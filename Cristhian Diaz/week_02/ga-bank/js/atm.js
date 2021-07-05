$(document).ready(function() {

let checkingBalance = 0;
let savingsBalance = 0;

const changeChecking = function() {
  if (checkingBalance === 0) {
    $('#checking-balance').addClass('red');
  } else {
    $('#checking-balance').removeClass('red');
  }
};
const changeSavings = function() {
  if (savingsBalance === 0) {
    $('#savings-balance').addClass('red');
  } else {
    $('#savings-balance').removeClass('red');
  }
};

changeChecking();
changeSavings();

$('#checking-deposit').on('click', function () {
  checkingBalance += Number($('#checking-amount').val());
  $('#checking-balance').text('$' + checkingBalance);
  changeChecking();
});

$('#checking-withdraw').on('click', function () {
  if (checkingBalance - Number($('#checking-amount').val()) >= 0) {
    checkingBalance -= Number($('#checking-amount').val());
    $('#checking-balance').text('$' + checkingBalance);
    changeChecking();
  }
});

$('#savings-deposit').on('click', function () {
  savingsBalance += Number($('#savings-amount').val());
  $('#savings-balance').text('$' + savingsBalance);
  changeSavings();
});

$('#savings-withdraw').on('click', function () {
  if (savingsBalance - Number($('#savings-amount').val()) >= 0) {
    savingsBalance -= Number($('#savings-amount').val());
    $('#savings-balance').text('$' + savingsBalance);
    changeSavings();
  }
});

});
