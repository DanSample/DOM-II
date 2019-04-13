// Your code goes here
let navItems = document.querySelectorAll('.nav-link');
navItems.forEach(function(item){
    item.addEventListener('mouseover', function(event){
        event.target.style.color = '#17A2B8';
    })
    item.addEventListener('mouseout', function(event){
        event.target.style.color = '#212529';
    })
})

let funBus = document.querySelector('.busImg');
funBus.addEventListener('mousedown', function(event){
    event.target.classList.toggle('img-invert')
})
funBus.addEventListener('mouseup', function(event){
    event.target.classList.toggle('img-invert')
})

