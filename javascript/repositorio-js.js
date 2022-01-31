
var arregloVocales = ["a", "e", "i", "o", "u"];   // Arreglo que contiene las vocales
var vocalesEncriptado = ["ai","enter","imes","ober","ufat"];  // Arreglo que contiene las vocales encriptadas

// Función encargado de obtener solo el contenido del campo de texto "mensaje"
function capturarMensaje(){
    var formMsg = document.querySelector("#form-mensaje");
    var campoMsg = formMsg.mensaje.value;  // Variable encargada de contener la información desde el campo de texto "mensaje"

    return campoMsg;
}

// Función encargado de intercambiar carácteres tanto validados, vocales encriptados y desencriptado
function intercambiarCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado){
    
    var textoAcumulador = "";  // Variable encargada de concatenar carácteres, vocales encriptados y desencriptados

    for(var i = 0; i < arregloRecibeCaracter.length; i++){
        // Se encripta el primer carácter encriptado o desencriptado
        arregloRecibeCaracter[i] = recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, i, 0);

        // Se encripta el segundo carácter encriptado o desencriptado
        arregloRecibeCaracter[i] = recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, i, 1);

        // Se encripta el tercer carácter encriptado o desencriptado
        arregloRecibeCaracter[i] = recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, i, 2);

        // Se encripta el cuarto carácter encriptado o desencriptado
        arregloRecibeCaracter[i] = recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, i, 3);

        // Se encripta el quinto carácter encriptado o desencriptado
        arregloRecibeCaracter[i] = recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, i, 4);

        // Resultado de la concatenación de carácteres tanto validados, encriptados o desencriptados
        var textoAcumulador = textoAcumulador + arregloRecibeCaracter[i];
    }

    return textoAcumulador;
}

// Función encargado de mostrar una palabra o frase desde un campo de texto 
function agregarTexto(nuevoTexto){
    texto.value = nuevoTexto;   // Muestra la frase por pantalla desde el campo de texto "texto"
    texto.focus();
    arregloTexto = [];  
}

function recorrerCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado, itemFor, posicion){
    // Recorre los arreglos según las condiciones asociados a los items o posiciones 
    if(arregloRecibeCaracter[itemFor] == arregloCondicionCaracter[posicion]){
        arregloRecibeCaracter[itemFor] = arregloCaracterAgregado[posicion];
    }

    return arregloRecibeCaracter[itemFor];
}