

// Assistir agora
var assistir = false;

function assistirAgora(){
 if(visibilidade ==  false){
 	document.getElementById("button").style.display = "none";
 	document.getElementById("button2").style.display = "block";
 	document.getElementById("frameMude2").style.display = "block";
 }
}

function assistirAgoraEsconder(){
	document.getElementById("button").style.display = "inline";
 	document.getElementById("button2").style.display = "none";
 	document.getElementById("frameMude2").style.display = "none";
}
// Assistir agora


// Botao adicionar a lista
var visibilidade = false;

function ocultarExibir(){
    
	 if (visibilidade) {//Se a variável visibilidade for igual a true, então...
	 		document.getElementById("dvConteudo").innerHTML = "ADICIONAR A LISTA";
            document.getElementById("list").style.display = "none";//Ocultamos a div
                        visibilidade = false;//alteramos o valor da variável para falso.
        } else {//ou se a variável estiver com o valor false..
        	
        	document.getElementById("dvConteudo").innerHTML = "REMOVER DA LISTA";
            document.getElementById("list").style.display = "block";//Exibimos a div..
            visibilidade = true;//Alteramos o valor da variável para true.
          
        }
}




