/*
#Title: ATM App

###Type:
- Lab

###Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

###Objectives:
- DOM selection, appending, removal, updating

###Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?

*/

const gaChecking = {
  type: 'checking',
  amount: 777
}

const gaSavings = {
  type: 'savings',
  amount: 77
}

const deposit =function (account, amt){
  account.amount += amt
  return
}

const withdraw = function (account, amt){
  if (amt >(gaSavings.amount + gaChecking.amount)) {
    return false
  } else {
      if(amt > account.amount ) {
        const diffAmt = amt - account.amount

        if(account.type === 'savings'){
          account.amount -= account.amount
          gaChecking.amount -= diffAmt;
        } else {
          account.amount -= account.amount
          gaSavings.amount -= diffAmt
        }
      } else {
          account.amount -= amt
      }
      return true;
  }
}


$(document).ready(function() {
    console.log('💵 💰  GA Bank is open for business 💰 💵');

    const $chkBal = $('#checking-balance')
    const $savBal = $('#savings-balance')

    const $chkAmt = $('#checking-amount')
    const $savAmt = $('#savings-amount')

    let $account = undefined,
        $amount  = undefined,
        gaAcct   = undefined

    refreshBank();

    $('#savings-deposit,#checking-deposit,#checking-withdraw,#savings-withdraw').on('click',function (e) {
      const evtID = $(e.target).attr('id')

      switch (evtID) {
        case 'checking-deposit' :
        case 'checking-withdraw':
            setChecking()
          break
        case 'savings-deposit'  :
        case 'savings-withdraw' :
            setSavings()
          break
        default:
          console.log('no events handled')
      }

      const amount = parseInt($amount.val())

      if (Number.isNaN(amount)) {
        alert('Please enter a valid amount')
        $amount.val('');
      } else {
        if((evtID == 'checking-withdraw') || (evtID == 'savings-withdraw'))
        {
          if (withdraw(gaAcct, amount)) {
            if (gaSavings.amount == 0) {
                $savBal.css('background-color', '#FF4500')
            }
            if(gaChecking.amount == 0){
                $chkBal.css('background-color', '#FF4500')
            }
          } else {
            alert('Account(s) does not have sufficient funds.')
          }
        }
        else if((evtID == 'savings-deposit') || (evtID == 'checking-deposit')) {
          deposit(gaAcct, amount)
          $account.css('background-color', '#E3E3E3')
        } else {
          console.log('no processing executed')
        }
        refreshBank()
        $amount.val('')
      }
    });

    function refreshBank() {
      $chkBal.text(`$${gaChecking.amount}`)
      $savBal.text(`$${gaSavings.amount}`)
    }

    function setSavings(){
      $account = $savBal
      $amount  = $savAmt
      gaAcct   = gaSavings
    }

    function setChecking(){
      $account = $chkBal
      $amount  = $chkAmt
      gaAcct   = gaChecking
    }
});
