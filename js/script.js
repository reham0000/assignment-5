const donateBtn = document.getElementById('donate-btn').addEventListener('click',function(event){
   event.preventDefault();
    const donationAmount = takenAmount('donation-amount');   
    const noakhaliAmount = textValue('noakhali-amount');
    const myBalance = textValue('my-balance');

    if(donationAmount > myBalance || isNaN(donationAmount)){
        alert("You don't have enough balance to donate");  
        return;
        
    }

    const remainingBalance = myBalance - donationAmount;
    const newBalance = document.getElementById('my-balance').innerText = remainingBalance.toFixed(2);
    

    const totalAmount = donationAmount + noakhaliAmount;
    const totalAmountElement = document.getElementById('noakhali-amount').innerText = totalAmount.toFixed(2);
    
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

    if(feniDonationAmount > myBalance || isNaN(feniDonationAmount)){
        alert("You don't have enough balance to donate");  
        return;
        
    }

    const feniRemainingBalance = myBalance - feniDonationAmount;
    const feniNewBalance = document.getElementById('my-balance').innerText = feniRemainingBalance.toFixed(2);

    const feniTotalAmount = feniDonationAmount + feniAmount;
    const feniTotalAmountElement = document.getElementById('feni-amount').innerText = feniTotalAmount.toFixed(2);
    document.getElementById('donation-amount-feni').value = "";

    document.getElementById('modal-btn').classList.remove('hidden');
    
    document.getElementById('close-btn').addEventListener('click',function(){
        document.getElementById('modal-btn').classList.add('hidden');
       
    });
});  

const quotaDonateBtn = document.getElementById('card-btn-quota').addEventListener('click',function(){
    const quotaDonationAmount = takenAmount('donation-amount-quota');    
    const quotaAmount = textValue('quota-amount');
    const myBalance = textValue('my-balance');

    if(quotaDonationAmount > myBalance || isNaN(quotaDonationAmount)){
        alert("You don't have enough balance to donate");  
        return;
        
    }

    const quotaRemainingBalance = myBalance - quotaDonationAmount;
    const quotaNewBalance = document.getElementById('my-balance').innerText = quotaRemainingBalance.toFixed(2);

    const quotaTotalAmount = quotaDonationAmount + quotaAmount;
    const quotaTotalAmountElement = document.getElementById('quota-amount').innerText = quotaTotalAmount.toFixed(2);
    document.getElementById('donation-amount-quota').value = "";

    document.getElementById('modal-btn').classList.remove('hidden');
    
    document.getElementById('close-btn').addEventListener('click',function(){
        document.getElementById('modal-btn').classList.add('hidden');
       
    });
}); 
 
// history button





