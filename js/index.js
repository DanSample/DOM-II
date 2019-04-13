// Your code goes here

// Changes color of the nav logo

let navLogoColor = document.querySelector('.logo-heading');
navLogoColor.addEventListener('mouseenter', function(event){
    event.target.style.color = '#17A2B8'
})
navLogoColor.addEventListener('mouseleave', function(event){
    event.target.style.color = '#212529'
})

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

// inverts the images color when mouse clicked, and reverts when mouse unclicked.

let funBus = document.querySelector('.busImg');
funBus.addEventListener('mousedown', function(event){
    event.target.classList.toggle('img-invert')
})
funBus.addEventListener('mouseup', function(event){
    event.target.classList.toggle('img-invert')
})

//add .remove so doesn't break when you click and move your mouse off the image before unclicking. 

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

//Changes the background to grey if a key is pressed, and back to white if key is lift. 

let backgroundChange = document.querySelector('body');
backgroundChange.addEventListener('keydown', function(event){
    event.target.style.backgroundColor = 'grey';
})
backgroundChange.addEventListener('keyup', function(event){
    event.target.style.backgroundColor = 'white';
})

//Alerts user when page is fully loaded. 

window.addEventListener('load', function(){
    alert('The page has loaded')
})

// Preventing the event propagation

let destinationClick = document.querySelectorAll('.destination');
    destinationClick.forEach(function(item){
        item.addEventListener('click', function(event){
            console.log(`The container has been clicked`)
    })
    let btnClick = document.querySelectorAll('.btn');
        btnClick.forEach(function(item){
            item.addEventListener('click', function(event){
                event.stopPropagation()
                console.log(`The button has been clicked`)
            })
        })
    })

// Stops the 'contact' link from redirecting to the assigned url.

let stopLink = document.querySelectorAll('.nav-link')[3];
stopLink.addEventListener('click', function(event){
    event.preventDefault()
})



