$(document).ready(function(){

const ac = {
  checking : {
    bal : 100
  },
  savings : {
    bal : 100
  }
}

const refresh = function(){
  $(`#checking .balance`).text(commad(ac.checking.bal));
  $(`#savings .balance`).text(commad(ac.savings.bal));
}

// Add commas to a number
const commad = function(num){
  const string = num.toString();
  return string.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

// accepts account as a string, e.g. 'checking'
const deposit = function(account, amount){
  ac[account].bal += +amount;
  polipop.add({
    title: `Deposited $${commad(amount)} into ${account}`,
    type: 'success'
  });
  $(`#${account} .balance`).text(ac[account].bal);
}


const withdraw = function(account, amount){
  if (ac[account].bal < +amount){
    polipop.add({
      title: `Insufficent balance in ${account} account`,
      type: 'error'
    });
    return;
  } else {
    ac[account].bal -= +amount;
    polipop.add({
      title: `Withdrew $${commad(amount)} from ${account}`,
      type: 'success'
    });
    $(`#${account} .balance`).text(ac[account].bal);
  }

}

$(".button").click(function() {
    const account = $(this).parent().attr('id');
    const amount = $(this).siblings( ".text-field" ).val();
     if ($(this).hasClass("withdraw")) {
       withdraw(account, amount);
     } else {
       deposit(account, amount);
     }
   });


var polipop = new Polipop('screen', {
    layout: 'popups',
    insert: 'before',
    pool: 5,
    closer: false,
    life: 5000,
    progressbar: true,
    sticky: false,
});


// default, info, success, warning or error
polipop.add({
    title: 'Successfuly logged into Bank of GA.',
    type: 'success',
});

refresh();
});
