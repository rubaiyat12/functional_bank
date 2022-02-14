function getInput(inputId) {
    const Input = document.getElementById(inputId);
    const value = Input.value;
    const newvalue = parseFloat(value);
    Input.value = '';
    return newvalue;
}
    
function totalfield(totalId,amount) {
    const depositTotal = document.getElementById(totalId);
    const depositTotalText = depositTotal.innerText;
    const previousdeposite = parseFloat(depositTotalText);
    depositTotal.innerText = previousdeposite + amount;

    
}
function updateBalance(amount,isAdd) {
     const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balance = parseFloat(balanceText);
    if(isAdd==true)
    {
        balanceTotal.innerText = balance + amount;
    }
    else if(isAdd==false) {
        balanceTotal.innerText = balance - amount;
        
    }
    
    
}



document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const deposit = depositInput.value;
    // const newdeposit = parseFloat(deposit);

    const newdeposit = getInput('deposit-input');

    // get and update deposite
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousdeposite = parseFloat(depositTotalText);
    // depositTotal.innerText = previousdeposite + newdeposit;
    totalfield('deposit-total', newdeposit);
    
//    update balance

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const balance = parseFloat(balanceText);
    // balanceTotal.innerText = balance + newdeposit;
    updateBalance(newdeposit, true);


    
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdraw = withdrawInput.value;
    // const newWithdraw = parseFloat(withdraw);
    const newWithdraw = getInput('withdraw-input');


  //update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawText = withdrawTotal.innerText;
    // const withdrawAmount = parseFloat(withdrawText);
    // withdrawTotal.innerText = newWithdraw + withdrawAmount;
    totalfield('withdraw-total', newWithdraw);

    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const balance = parseFloat(balanceText);
    // balanceTotal.innerText = balance -newWithdraw;
    updateBalance(newWithdraw, false);
    
});