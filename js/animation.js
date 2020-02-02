var wow =  new  WOW (
  {
    boxClass :      'wow' ,       // clase css de elemento animado (el valor predeterminado es wow) 
    animateClass :  'animated' , // clase css de animación (el valor predeterminado es animado) 
    offset :        0 ,           // distancia al elemento cuando se activa la animación (el valor predeterminado es 0) 
    mobile :        true ,        // activa animaciones en dispositivos móviles (el valor predeterminado es true) 
    live :          true ,        // actúa sobre contenido cargado de forma asincrónica (el valor predeterminado es true)
    callback :      function ( box ) {
       // la devolución de llamada se activa cada vez que se inicia una animación 
      // el argumento que se pasa es el nodo DOM que se está animando
    },
    scrollContainer :  window ,     // selector de contenedor de desplazamiento opcional; de lo contrario, use window, 
    resetAnimation :  true ,      // restablecer animación al final (el valor predeterminado es true)
  }
);
wow . init ();