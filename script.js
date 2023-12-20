const menuToggle = document.querySelector('.nav-menu');
const closeToggle = document.querySelector('.nav-close');  
const nav = document.querySelector('.nav-list-wrapper');  
const overlay = document.querySelector('.overlay');

function navOn() {
    overlay.style.display = 'block'; 
    overlay.style.transitionDuration = '3s'; 
    nav.style.transform = 'translateX(0%)';
    document.body.style.pointerEvents = 'none';
}

function navOff() {
    nav.style.transform = 'translateX(100%)';
    overlay.style.display = 'none'; 
    document.body.style.pointerEvents = 'all';
}


menuToggle.addEventListener('click', navOn);
closeToggle.addEventListener('click', navOff);