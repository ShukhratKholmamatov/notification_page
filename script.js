let unread = document.getElementById('unread');
let unread1 = document.getElementById('unread1');
let unread2 = document.getElementById('unread2');
let dot = document.getElementById('dot');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');


function readAll(){
    unread.style.background = "#fff";
    unread1.style.background = "#fff";
    unread2.style.background = "#fff";
    dot.classList.remove("dot");
    dot1.classList.remove("dot1");
    dot2.classList.remove("dot2");
    let span = document.querySelector('span').innerText = 0;
}