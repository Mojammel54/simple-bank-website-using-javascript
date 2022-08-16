document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    console.log(newWithdrawAmount)
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid number')
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    withdrawField.value = '';
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('taka nai beshi lov korish na')
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawTotal


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal



})