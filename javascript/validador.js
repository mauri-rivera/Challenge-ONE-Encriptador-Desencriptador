
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoExpresionRegular = "^[a-z ]+$";   // Variable encargada de validar sólo letras minúsculas y espacios entre carácteres 
var arregloTexto = [];   // Arreglo encargado de agregar carácteres validados 
var arregloValidacion = [];  // Arreglo que utiliza la función validación para obtener el resultado de los carácteres 

var texto = document.querySelector("#texto");
var mensaje = document.querySelector("#msg");

// Función encargado de validar carácteres
function validador(campo){
    // Condición encargda de comprobar si los carácteres son validos o no lo son
    if(campo.match(textoExpresionRegular) != null){
        for(var i = 0; i < campo.length; i++){
            // Se agrega los carácteres validados 
            arregloTexto.push(campo.substring(i,i+1));
        }

        return arregloTexto;
    }
}

// Función encargado de obtener el contenido de los campos de textos "texto" y "mensaje"
function capturarTexto(){
    var form = document.querySelector("#form-texto");
    var msg = document.querySelector("#form-mensaje");
    var campoTexto = form.texto.value;  // Variable encargada que contener la información desde el campo de texto "texto"
    var campoMensaje = msg.mensaje.value;  // Variable encargada de contener la información desde el campo de texto "mensaje"

    if(campoMensaje != " " && campoTexto != " "){
        arregloValidacion = validador(campoTexto);  // Arreglo que utiliza la función validación
        return arregloValidacion;
    }

    if(campoTexto != " " && campoMensaje == " "){
        arregloValidacion = validador(campoTexto);  // Arreglo que utiliza la función validación
        return arregloValidacion;
    }
}

