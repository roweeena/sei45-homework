// Mo money mo problems - the jQuery homework exercise
$(document).ready(function() {
    // Keep track of the checking and savings balances somewhere .. like in a bank?
    let checkingBalance = 0;
    let savingsBalance = 0;
    let accountTotal = 0;

    // turning red when balance hits 0 - oh no!

    if (checkingBalance === 0) {
        $('#checking-balance').css("background-color", "red");
    }
    if (savingsBalance === 0) {
        $('#savings-balance').css("background-color", "red");
    }



    // */* Checking Deposit - you better save that ish
    const $checkingDepositButton = $('#checking-deposit');

    const $checkingDeposit = function() {

        const $checkingInputValue = Number($('#checking-amount').val());

        // for the overdraft later
        checkingBalance = checkingBalance + $checkingInputValue;
        accountTotal = checkingBalance + savingsBalance;

        //update value
        $('#checking-balance').html("$" + checkingBalance.toFixed(2)); //fixed to 2 decimals
        $('#checking-balance').css({
            'background-color': 'lightgrey'
        }); // change back to grey
        $('#checking-amount').val(''); //  reset input field
    };

    $checkingDepositButton.on('click', $checkingDeposit);


    // // */* Savings Deposit - save
    const $savingsDepositButton = $('#savings-deposit');

    const $savingsDeposit = function() {
        const $savingsInputValue = Number($('#savings-amount').val());

        //for overdraft later
        savingsBalance = savingsBalance + $savingsInputValue;
        accountTotal = checkingBalance + savingsBalance;

        //update value
        $('#savings-balance').html("$" + savingsBalance.toFixed(2)); //fixed to 2 decimals
        $('#savings-balance').css({
            'background-color': 'lightgrey'
        }); // change back to grey
        $('#savings-amount').val(''); //reset input field
    };

    $savingsDepositButton.on('click', $savingsDeposit); //event handler

    // //checking withdrawal
    const $checkingWithdrawButton = $('#checking-withdraw');

    const $checkingWithdraw = function() {

        const $checkingAmount = Number($('#checking-amount').val());

        if (Number($('#checking-balance').val()) <= 0) {

            $('#checking-balance').text('$0');

        } else if ($checkingAmount > checkingBalance) {

            checkingBalance = 0;
            savingsBalance = accountTotal - $checkingAmount;
            accountTotal = checkingBalance + savingsBalance;

            //showing values on the screen
            $('#checking-balance').html("$" + checkingBalance.toFixed(2));
            $('#savings-balance').html("$" + savingsBalance.toFixed(2));
            $('#checking-amount').val('');

        } //valid input - you better work bitch
        else {

            checkingBalance = checkingBalance - $checkingAmount;
            accountTotal = checkingBalance + savingsBalance;
            //update value
            $('#checking-balance').html("$" + checkingBalance.toFixed(2)); //fixed to 2 decimals
            $('#checking-balance').css({
                'background-color': 'lightgrey'
            }); // change back to grey
            $('#checking-amount').val('');
        };
        // changing the background back to red if value is at $0
        if (checkingBalance === 0) {
            $('#checking-balance').css("background-color", "red");
        }
        if (savingsBalance === 0) {
            $('#savings-balance').css("background-color", "red");
        }

    };
    $checkingWithdrawButton.on('click', $checkingWithdraw);

    //
    // //saving withdrawal - treat yo self
    //
    const $savingsWithdrawButton = $('#savings-withdraw');

    const $savingsWithdraw = function() {

        const $savingsAmount = Number($('#savings-amount').val());

        if ($savingsAmount <= $('#savings-balance')) {

            $('#savings-balance').text('$0');
            //overdraft part - no money? get some from the other guy
        } else if ($savingsAmount > savingsBalance) {

            savingsBalance = 0;
            checkingBalance = accountTotal - $savingsAmount;
            accountTotal = checkingBalance + savingsBalance;


            $('#checking-balance').html("$" + checkingBalance.toFixed(2));
            $('#savings-balance').html("$" + savingsBalance.toFixed(2));
            $('#savings-amount').val('');
        } else {
            accountTotal = checkingBalance + savingsBalance;
            savingsBalance = savingsBalance - $savingsAmount; //update value
            $('#savings-balance').html("$" + savingsBalance.toFixed(2)); //fixed to 2 decimals
            $('#savings-balance').css({
                'background-color': 'lightgrey'
            }); // change back to grey
            $('#savings-amount').val('');
        };

        // changing the background back to red if value is at $0
        if (checkingBalance === 0) {
            $('#checking-balance').css("background-color", "red");
        }
        if (savingsBalance === 0) {
            $('#savings-balance').css("background-color", "red");
        }
    };
    $savingsWithdrawButton.on('click', $savingsWithdraw);

});




// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// *
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
