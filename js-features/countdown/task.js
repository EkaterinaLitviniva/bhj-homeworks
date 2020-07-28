let timer; 
let x = 59; 

function countdown(){ 
    document.getElementById('timer').innerHTML = x;
    x--; 
    if (x<0){
        alert("Вы победили в конкурсе");
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
};

countdown(); 