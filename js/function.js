
function takenAmount(id){
    return parseFloat(document.getElementById(id).value);
}

function textValue(id){
    return parseFloat(document.getElementById(id).innerText);
}

function blogPage(){
    window.location.href = "blog.html";
}

function homePage(){
    window.location.href = "index.html";
}

function showHistory(id){
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}


// function openModal() {
//      return document.getElementById("my_modal_1").showModal(); 
    
// }