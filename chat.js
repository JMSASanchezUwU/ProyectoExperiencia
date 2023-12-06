$(document).ready(function() {
    // Cuando se hace clic en el botón de enviar
    $('.modal-body form button').click(function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener el valor del campo de texto
        var mensaje = $('#mensaje').val().toLowerCase(); // Convertir a minúsculas para ser sensible a minúsculas y mayúsculas

        // Verificar si el mensaje es "hola"
        if (mensaje === 'hola') {
            // Mostrar la respuesta en el modal
            $('.modal-body p').text('¡Hola! ¿En qué puedo ayudarte?');
                $('#mensaje').val(''); 
        }
    });
});

