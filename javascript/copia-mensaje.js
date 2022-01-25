var palabraFraseCopiar = document.querySelector("#btn-copy");

// Función encargado de copiar la información del campo de texto "mensaje" desde el botón "Copiar"
palabraFraseCopiar.addEventListener("click", function(event){
    event.preventDefault();
    fmensaje.mensaje.select();  // Selecciona la información encriptada o desencritada desde el campo de texto "mensaje"  
    
    var mensajeCapturado = capturarMensaje();   // Variable que utiliza la función capturarMensaje para obtener la información

    navigator.clipboard.writeText(mensajeCapturado);   // Se encarga de copiar toda información desde el campo de texto "mensaje" 
});