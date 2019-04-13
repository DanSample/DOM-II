// Your code goes here

//Changes the color of the the nav items if mouse is hovered over them, and reverts color back when not.

let navItems = document.querySelectorAll('.nav-link');
navItems.forEach(function(item){
    item.addEventListener('mouseover', function(event){
        event.target.style.color = '#17A2B8';
    })
    item.addEventListener('mouseout', function(event){
        event.target.style.color = '#212529';
    })
})

// inverts the images color when mouse clicked, and reverts when mouse click depressed.

let funBus = document.querySelector('.busImg');
funBus.addEventListener('mousedown', function(event){
    event.target.classList.toggle('img-invert')
})
funBus.addEventListener('mouseup', function(event){
    event.target.classList.toggle('img-invert')
})
funBus.addEventListener('mouseout', function(event){
    event.target.classList.remove('img-invert')
})

// Switches the images when single mouse clicked, and switches it back on double mouse click.

let funMap = document.querySelector('.mapImg');
funMap.addEventListener('click', function(event){
    event.target.setAttribute('src','img/fun.jpg')
})
funMap.addEventListener('dblclick', function(event){
    event.target.setAttribute('src', 'img/adventure.jpg')
})

// Switches the images when single mouse clicked, and switches it back on double mouse click.

let funAdventure = document.querySelector('.img-fluid');
funAdventure.addEventListener('click', function(event){
    event.target.setAttribute('src','img/adventure.jpg')
})
funAdventure.addEventListener('dblclick', function(event){
    event.target.setAttribute('src', 'img/fun.jpg')
})

// 

let
