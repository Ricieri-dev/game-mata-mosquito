var largura = 0
var altura = 0
var vidas = 1
var tempo = 15
function adjustStage(){
    width = window.screen.width
    height = window.screen.height
    
}

var cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0){

    }else{
        document.getElementById('cronometro').innerHTML = tempo //parei aqui
    }
    
},1000)


function randomSize(){
    var classe = Math.floor(Math.random() * 3);
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

adjustStage()

function randomicPosition(){

    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas > 3){
        
        window.location.href = 'gameover.html'
    
    }else{document.getElementById('v' + vidas ).src="img/coracao_vazio.png"
        vidas++
    }
}
var positionX = Math.floor(Math.random()*width) - 90;
var positionY = Math.floor(Math.random()*height) - 90;

positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY;


//criar elemento html
var mosquito = document.createElement('img')
mosquito.src = 'img/mosca.png'
mosquito.className = randomSize() + ' ' + randomSide() 
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}

document.body.appendChild(mosquito)
    
}

function randomSide(){
     var classe = Math.floor(Math.random() * 2);
        switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
