const donateBtn = document.getElementById('donate-btn').addEventListener('click',function(){
    const donationAmount = takenAmount('donation-amount');
    
    const noakhaliAmount = textValue('noakhali-amount');
    const myBalance = textValue('my-balance');
    const remainingBalance = myBalance - donationAmount;
    const newBalance = document.getElementById('my-balance').innerText = remainingBalance;

    const totalAmount = donationAmount + noakhaliAmount;
    const totalAmountElement = document.getElementById('noakhali-amount').innerText = totalAmount;
    document.getElementById('donation-amount').value = "";

    // modal section
    document.getElementById('modal-btn').classList.remove('hidden');
    
    document.getElementById('close-btn').addEventListener('click',function(){
        document.getElementById('modal-btn').classList.add('hidden');
       
    });
    
});

const feniDonateBtn = document.getElementById('card-btn-feni').addEventListener('click',function(){
    const feniDonationAmount = takenAmount('donation-amount-feni');
    
    const feniAmount = textValue('feni-amount');
    const myBalance = textValue('my-balance');
    const feniRemainingBalance = myBalance - feniDonationAmount;
    const feniNewBalance = document.getElementById('my-balance').innerText = feniRemainingBalance;

    const feniTotalAmount = feniDonationAmount + feniAmount;
    const feniTotalAmountElement = document.getElementById('feni-amount').innerText = feniTotalAmount;
    document.getElementById('donation-amount-feni').value = "";
    

    document.getElementById('modal-btn').classList.remove('hidden');
    
    document.getElementById('close-btn').addEventListener('click',function(){
        document.getElementById('modal-btn').classList.add('hidden');
       
    });
    
    

});  
 



