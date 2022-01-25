var palabraFraseEncriptar = document.querySelector("#btn-encriptar");

// Función encargado de encriptar desde el botón "Encriptar!"
palabraFraseEncriptar.addEventListener("click", function(event){
    event.preventDefault();  

    var arregloEncriptacion = capturarTexto();  // Arreglo que utiliza la función capturarTexto
    var nuevoTextoEncriptado = "";  // Variable encargada de concatenar carácteres y vocales encriptados

    // Condición encargada de comprobar si los carácteres no son validos 
    if(arregloEncriptacion == null){ 
        agregarTexto("Texto no válido");
    }
    else{  // Si en el caso que todos los carácteres son validos, se inicia la encriptación
        // Variable que obtiene con la concatenación de carácteres y vocales encriptados
        nuevoTextoEncriptado = intercambiarCaracteres(arregloEncriptacion, arregloVocales, vocalesEncriptado);
        
        agregarTexto("");
    }
    // Muestra el resultado encriptado desde el campo de texto "mensaje"
    mensaje.value = nuevoTextoEncriptado;
});