document.getElementById('down-arrow1').addEventListener('click',function(){
    
    document.getElementById('answer1').classList.remove('hidden');
    document.getElementById('answer2').classList.add('hidden');
    
    
});
document.getElementById('down-arrow2').addEventListener('click',function(){
    
    document.getElementById('answer2').classList.remove('hidden');
    document.getElementById('answer1').classList.add('hidden');
    document.getElementById('answer3').classList.add('hidden');
    
    
});
document.getElementById('down-arrow3').addEventListener('click',function(){
    
    document.getElementById('answer3').classList.remove('hidden');
    document.getElementById('answer2').classList.add('hidden');
    document.getElementById('answer4').classList.add('hidden');
    
    
});
document.getElementById('down-arrow4').addEventListener('click',function(){
    
    document.getElementById('answer4').classList.remove('hidden');
    document.getElementById('answer3').classList.add('hidden');
    
    
});


