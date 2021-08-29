// const checkForZero = function() {
//   $('.zero').removeClass('zero');
//   const checkingBalance = $('#checking-balance').text().slice(1);
//   if (checkingBalance <=0) {
//     $('#checking-balance').addClass('zero');
//   }
//   const savingsBalance = $('#savings-balance').text().slice(1);
//   if (savingsBalance <=0) {
//     $('#savings-balance').addClass('zero');
//   }
// }
//
// $( document ).ready(function() {
//   checkForZero();
// $('#checking-deposit').on('click', function (){
//   //get the deposit amount
//   const depositAmount = +$('#checking-amount').val();
//
// //current balance
// const currentBalance = +$('#checking-amount').text().slice(1); // getter
//
//   const newBalance = currentBalance + depositAmount
//
//   //update the screen
//
//   $('#checking-balance').text('$'+newBalance); //setter
// checkForZero();
// });
//
// $('#checking-withdraw').on('click', function(){
// const withdrawAmount = +$('#checking-amount').val();
//   const currentBalance = +$('#checking-amount').text().slice(1); //trims off '$'
//   const otherBalance = +$('#savings-amount').text().slice(1);
//   const totalBalance = currentBalance + otherBalance;
//   const newBalance = currentBalance - withdrawAmount;
//   if(newBalance >= 0) {
//   $('#checking-balance').text('$'+newBalance);
// } else if (withdrawAmount <= totalBalance) {
//   $('#checking-balance').text('$0');
//   //newBalance is the negative amount that we didn't have in this account
//   $('#savings-balance').text('$'+ (otherBalance + newBalance));
// }
// checkForZero();
// });
//
// $('#savings-deposit').on('click', function (){
//   //get the deposit amount
//   const depositAmount = +$('#savings-amount').val();
//
// //current balance
// const currentBalance = +$('#savings-amount').text().slice(1); // getter
//
//   const newBalance = currentBalance + depositAmount
//
//   //update the screen
//
//   $('#savings-balance').text('$'+newBalance); //setter
// checkForZero();
// });
//
//
// $('#savings-withdraw').on('click', function(){
// const withdrawAmount = +$('#savings-amount').val();
//   const currentBalance = +$('#savings-amount').text().slice(1); //trims off '$'
//   const otherBalance = +$('#checking-amount').text().slice(1);
//   const totalBalance = currentBalance + otherBalance;
//   const newBalance = currentBalance - withdrawAmount;
//   if(newBalance >= 0) {
//   $('#savings-balance').text('$'+newBalance);
// } else if (withdrawAmount <= totalBalance) {
//   $('#savings-balance').text('$0');
//   //newBalance is the negative amount that we didn't have in this account
//   $('#checking-balance').text('$'+ (otherBalance + newBalance));
// }
// checkForZero();
// });
// });

const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

total: function (){
  return this.checkingBalance + this.savingsBalance;
},

  checkingDeposit: function(amount) {
    amount = Number(amount);
    this.checkingBalance += amount;
  },

checkingWithdraw: function (amount) {
  amount = Number(amount);
  if(amount <= this.checkingBalance){
  this.checkingBalance -= amount;
} else if (amount < = this.total()){
  const difference = amount - this.checkingBalance;
  this.checkingBalance = 0;
  this.savingsBalance -= difference;
}
},

  savingsDeposit: function(amount) {
    amount = Number(amount);
    this.savingsBalance += amount;
  },

  savingsWithdraw: function (amount) {
    amount = Number(amount);
    if(amount <= this.savingsBalance){
    this.savingsBalance -= amount;
  }else if (amount < = this.total()){
    const difference = amount - this.savingsBalance;
    this.savingsBalance = 0;
    this.checkingBalance -= difference;
  }
}
