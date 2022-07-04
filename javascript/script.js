function cardspace(){
    var cardDigit = document.getElementById('cardno').value;
    if(cardDigit.length == 4 || cardDigit.length == 9 || cardDigit.length == 14){
        document.getElementById('cardno').value = cardDigit+" ";
        document.getElementById('cardno').max = 1;
    }
}

function addSlashes(){
    var expiredDate = document.getElementById('validtill').value;
    if(expiredDate.length == 2){
        document.getElementById('validtill').value = expiredDate+"/";
        document.getElementById('validtill').max = 1;
    }
}