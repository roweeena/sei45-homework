/*
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = function(cart){
  let total = 0;
  for ( item in cart){
    total += parseFloat(cart[item]);
  }
  return total;
}


/*

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

*/
const dBank = {
  accounts: [
    { acctId: 0, name: "Tom Clancy",  balance: 100.00 },
    { acctId: 1, name: "Boris Yapper", balance: 199.00 },
    { acctId: 2, name: "Sou Gyfted",  balance: 1200.00 }
  ],
  getBalance: function (oAcct) {
    return (oAcct.balance);
  },
  deposit: function (oAcct, amount) {
    return (oAcct.balance += amount);
  },
  withdraw: function (oAcct, amount) {
    let success = false;
    if( amount <= oAcct.balance) {
      oAcct.balance -= amount
      success = true;
    }
    return success;
  },
  transfer: function (oSource, oTarget, amount){
    let success = false;
    if(this.withdraw(oSource,amount)) {
        this.deposit(oTarget,amount);
        success = true;
    }
    return success;
  },
  totalBankBalance: function (){
    let total = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].balance;
    }
    return total;
  }
}

console.log(`The Bank's total account balance is: $ ${dBank.totalBankBalance().toFixed(2)}`);
console.log(`${dBank.accounts[2].name}'s current balance: $ ${dBank.getBalance(dBank.accounts[2]).toFixed(2)}`);
console.log(`Deposit $340 into ${dBank.accounts[2].name}'s account: $ ${dBank.deposit(dBank.accounts[2],340).toFixed(2)}`);
console.log(`Withdraw $99.95 from ${dBank.accounts[2].name}'s account: $ ${dBank.withdraw(dBank.accounts[2],99.95)?'Balance left:':'Insufficient fund'} ${dBank.accounts[2].balance}`);
