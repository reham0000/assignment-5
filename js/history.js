document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.add('bg-lime-400');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('footer').classList.add('hidden');

});
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('footer').classList.remove('hidden');
    
});


