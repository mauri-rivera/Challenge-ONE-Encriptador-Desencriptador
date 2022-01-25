var palabraFraseDesencriptar = document.querySelector("#btn-desencriptar");
var arregloCorregido = [];  // Arreglo encargado de agregar carácteres y vocales encriptados

// Función encargado de encriptar desde el botón "Desencriptar!"
palabraFraseDesencriptar.addEventListener("click", function(event){
    event.preventDefault();  

    var arregloDesencriptacion = capturarTexto();  // Arreglo que utiliza la función capturarTexto
    var nuevoTextoDesencriptado = "";  // Variable encargada de concatenar carácteres y vocales encriptados
    var acumulaTexto = "";  // Variabe encargada de concatenar carácteres para obtener un vocal encriptado
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;

    // Condición encargada de comprobar si los carácteres no son validos
    if(arregloDesencriptacion == null){ 
        agregarTexto("Texto no válido");
    }
    else{  // Si en el caso que todos los carácteres son validos, se inicia la obtención de las vocales encriptadas
        while(i < arregloDesencriptacion.length){   
            while(j < vocalesEncriptado.length){
                var vocalArregloEncriptado = vocalesEncriptado[j];  // Variable que contiene específicamente un vocal encriptado 
                var vocalEncriptado = vocalArregloEncriptado.substring(k,k+1);  // Variable que contiene un carácter desde un vocal encriptado
                var interruptor = false;   // Variable encargado de distinguir entre un carácter y un vocal encriptado
                // Condición encargada de comprobar si los carácteres son identicos
                if(arregloDesencriptacion[i] == vocalEncriptado){
                    i++;
                    k++;
                    acumulaTexto = acumulaTexto + vocalEncriptado;  // Se concatena carácter por carácter hasta obtener un vocal encriptado
                    // Condición encargada de comprobar si el resultado concatenado y el vocal encriptado son idénticos
                    if(vocalArregloEncriptado == acumulaTexto){  
                        j = 0;
                        k = 0;
                        interruptor = true;   // La variable señala que es un vocal encriptado
                        arregloCorregido[l] = acumulaTexto;  // Se agrega el resultado concatenado como vocal encriptado al arreglo desencriptador  
                        acumulaTexto = "";
                        // Condición encargada de limitar la cantidad de posiciones del arreglo desencriptador con respecto a la cantidad de carácteres obtenidos
                        if(i < arregloDesencriptacion.length){
                            l++;
                        }                       
                    }
                }
                else{   // En el caso de que los carácteres no son idénticos
                    j++;
                }                
            }
            // Condición que comprueba si no es un vocal encriptado
            if(interruptor == false){
                if(i < arregloDesencriptacion.length){
                    arregloCorregido[l] = arregloDesencriptacion[i];  // Se agrega el carácter obtenido al arreglo desencriptador            
                    j = 0;  
                    i++;
                    l++;
                }                                     
            }       
        }

        // Con los carácteres y las vocales encriptadas obtenidas, se inicia la desencriptación
        // Variable que obtiene con la concatenación de carácteres y vocales encriptados
        nuevoTextoDesencriptado = intercambiarCaracteres(arregloCorregido, vocalesEncriptado, arregloVocales);
        
        agregarTexto("");
    }
    // Muestra el resultado desencriptado desde el campo de texto "mensaje"
    mensaje.value = nuevoTextoDesencriptado;
});