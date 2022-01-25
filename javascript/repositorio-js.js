
var arregloVocales = ["a", "e", "i", "o", "u"];   // Arreglo que contiene las vocales
var vocalesEncriptado = ["ai","enter","imes","ober","ufat"];  // Arreglo que contiene las vocales encriptadas

// Función encargado de obtener solo el contenido del campo de texto "mensaje"
function capturarMensaje(){
    var formMsg = document.querySelector("#form-mensaje");
    var campoMsg = formMsg.mensaje.value;  // Variable encargada de contener la información desde el campo de texto "mensaje"

    return campoMsg;
}

// Función encargado de intercambiar carácteres tanto validados, vocales encriptados y desencriptado
function intercambiarCaracteres(arreglo1, arreglo2, arreglo3){
    
    var textoAcumulador = "";  // Variable encargada de concatenar carácteres, vocales encriptados y desencriptados

    for(var i = 0; i < arreglo1.length; i++){
        // Se encripta el primer carácter encriptado o desencriptado
        if(arreglo1[i] == arreglo2[0]){
            arreglo1[i] = arreglo3[0];
        }
        // Se encripta el primer carácter encriptado o desencriptado
        if(arreglo1[i] == arreglo2[1]){
            arreglo1[i] = arreglo3[1];
        }
        // Se encripta el primer carácter encriptado o desencriptado
        if(arreglo1[i] == arreglo2[2]){
            arreglo1[i] = arreglo3[2];
        }
        // Se encripta el primer carácter encriptado o desencriptado
        if(arreglo1[i] == arreglo2[3]){
            arreglo1[i] = arreglo3[3];
        }
        // Se encripta el primer carácter encriptado o desencriptado
        if(arreglo1[i] == arreglo2[4]){
            arreglo1[i] = arreglo3[4];
        }

        // Resultado de la concatenación de carácteres tanto validados, encriptados o desencriptados
        var textoAcumulador = textoAcumulador + arreglo1[i];
    }

    return textoAcumulador;
}

// Función encargado de mostrar una palabra o frase desde un campo de texto 
function agregarTexto(nuevoTexto){
    texto.value = nuevoTexto;   // Muestra la frase por pantalla desde el campo de texto "texto"
    texto.focus();
    arregloTexto = [];  
}