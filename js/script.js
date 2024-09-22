// const historyBtn = document.getElementById('history-btn').addEventListener('click',function(){
//     historyBtn.classList.add("bg-lime-400");
// });

const donateBtn = document.getElementById('donate-btn').addEventListener('click',function(){
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    
    const noakhaliAmount = parseFloat(document.getElementById('noakhali-amount').innerText);
    const myBalance = document.getElementById('my-balance').innerText;
    const remainingBalance = myBalance - donationAmount;
    const newBalance = document.getElementById('my-balance').innerText = remainingBalance;

    const totalAmount = donationAmount + noakhaliAmount;
    const totalAmountElement = document.getElementById('noakhali-amount').innerText = totalAmount;

    const congratulationCard = document.createElement('div').className = 'bg-white w-[200] h=[200]';

    congratulationCard.innerHTML = `
    
    <h1>Congrates!</h1>
    <img src="assets/coin.png" alt=""/>
    <p>You Have Donated For HumanKind</p>
    <p>Successfully<p>
    <button class="btn bg-slate-400 p-10 font-bold text-lg">Close Confirmation</button>

    `
    
});
