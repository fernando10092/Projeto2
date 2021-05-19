var notas = [10, 20, 30, 40];

//Função array
function mediaArray(notas){
    
    let media = 0;

    for(var i = 0; i < notas.length; i++){
        media += notas[i];
    
    }

    return console.log(media / notas.length);

}

mediaArray(notas);
