var largura = 0
var altura = 0

function adjustStage(){
    width = window.screen.width
    height = window.screen.height
    console.log(width,height)
}



function randomSize(){
    var classe = Math.floor(Math.random() * 3);
    switch(classe){
        case 0:

        case 1:

        case 2:
            
    }
}

adjustStage()

function randomicPosition(){
var positionX = Math.floor(Math.random()*width) - 90;
var positionY = Math.floor(Math.random()*height) - 90;

positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY;


//criar elemento html
var mosquito = document.createElement('img')
mosquito.src = 'img/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)
    randomSize()
}
