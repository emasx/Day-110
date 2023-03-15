



// 160 - The findIndex method

btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    
   
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

        const index = accounts.findIndex(acc => acc.username === currentAccount.username);


        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});