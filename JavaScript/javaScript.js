var lamp = window.document.getElementById('lampada')

/*Esta function retorna um valor -1 para o paramentro indexOf que é um 
   parametro reservado para reservado no JavaScript que tem a função de preocurar 
   uma string dentro de outra string neste caso ele vai  buscar ("LampadaQuebrada")
   dentro do Source*/
function estaQuebrada(){
    return lamp.src.indexOf('LampadaQuebrada') > -1
}

function Ligar(){
    /* Aqui chamo a função crianda acima, e se estiver quebrada não executará a função do botão */
    if(!estaQuebrada()){
        lamp.src = './Imagem/LanpadaAcesa.svg'
    }
}

function Desligar(){
    if(!estaQuebrada()){
        lamp.src = './Imagem/LampadaApagada.svg'
    }
}

/* Com este trecho de código estou eliminando a necessidade do evento 
   onclick no codigo html, este com evento o javaScript esta ouindo os 
   eventos ocorridos no HTML utiliando os paramentros e a chamada de função
   que estão entre os parenteses*/
lamp.addEventListener('click', quebraLampada)
function quebraLampada(){
    lamp.src = './Imagem/LampadaQuebrada.svg'
}