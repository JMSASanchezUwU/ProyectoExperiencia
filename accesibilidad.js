// Obtener referencia al body para aplicar cambios de accesibilidad
const body = document.body;

// Función para aumentar el tamaño de fuente
function aumentarFuente() {
    const body = document.body;
    const estiloActual = window.getComputedStyle(body).fontSize;
    const tamañoActual = parseFloat(estiloActual);
    body.style.fontSize = `${tamañoActual * 1.1}px`;
  }
  

// Función para disminuir el tamaño de fuente
function disminuirFuente() {
  const body = document.body;
  const estiloActual = window.getComputedStyle(body).fontSize;
  const tamañoActual = parseFloat(estiloActual);
  body.style.fontSize = `${tamañoActual * 0.9}px`;
}

// Función para cambiar el esquema de color
function cambiarContraste() {
  // Código para cambiar los colores de fondo y texto para un alto contraste
  // Aquí puedes cambiar los estilos de tu página para un esquema de alto contraste
}

/**
 * Function to control the reading of text on a webpage.
 * @function
 * @name leerTexto
 * @returns {void}
 */
function leerTexto() {
    const textoPagina = document.body.innerText;
    const speech = new SpeechSynthesisUtterance();
    
    if (!lecturaActiva) {
        lecturaActiva = true;
        speech.text = textoPagina;
        window.speechSynthesis.speak(speech);
    } else {
        lecturaActiva = false;
        window.speechSynthesis.cancel(); // Stop reading if already active
    }
}

/**
 * Function to activate or deactivate the reading of text on a webpage.
 * @function
 * @name function
 * @returns {void}
 */
document.addEventListener('DOMContentLoaded', function() {
    let lecturaActiva = false; // Variable para controlar el estado de la lectura

    function leerTexto() {
        const textoPagina = document.body.innerText;
        const speech = new SpeechSynthesisUtterance();

        if (!lecturaActiva) {
            lecturaActiva = true;
            speech.text = textoPagina;
            window.speechSynthesis.speak(speech);
        } else {
            lecturaActiva = false;
            window.speechSynthesis.cancel(); // Detener la lectura si ya está activa
        }
    }

    // Botón para activar/desactivar la lectura del texto
    const leerBtn = document.getElementById('leerPagina');
    if (leerBtn) {
        leerBtn.addEventListener('click', leerTexto);
    }
});

    let readingActive = false;
    let currentUtterance = null;
    
    function toggleReadingMode() {
        readingActive = !readingActive;
        const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    
        if (readingActive) {
            textElements.forEach((element) => {
                element.addEventListener("mouseover", readContent);
                element.addEventListener("mouseout", stopReading);
            });
        } else {
            textElements.forEach((element) => {
                element.removeEventListener("mouseover", readContent);
                element.removeEventListener("mouseout", stopReading);
            });
            stopReading();
        }
    }

    /**
 * Reads the content of the target element associated with the event and converts it into speech.
 * @param {Event} event - The event object associated with the target element.
 */
function readContent(event) {
        const contenido = event.target.innerText;
        currentUtterance = new SpeechSynthesisUtterance(contenido);
        window.speechSynthesis.speak(currentUtterance);
    }
    
    function stopReading() {
        if (currentUtterance) {
            window.speechSynthesis.cancel(currentUtterance);
            currentUtterance = null;
        }
    }


// Función para aumentar el zoom de la página (zoom in)
function aumentarTamanio() {
    // Multiplica el zoom actual por un factor para aumentarlo
    const currentZoom = document.body.style.zoom || 1;
    document.body.style.zoom = parseFloat(currentZoom) * 1.1;
}

// Función para disminuir el zoom de la página (zoom out)
function disminuirTamanio() {
    // Divide el zoom actual por un factor para disminuirlo
    const currentZoom = document.body.style.zoom || 1;
    document.body.style.zoom = parseFloat(currentZoom) * 0.9;
}


document.addEventListener('DOMContentLoaded', function() {
    const aumentarBtn = document.getElementById('aumentarTamanio');
    const disminuirBtn = document.getElementById('disminuirTamanio');

    aumentarBtn.addEventListener('click', aumentarTamanio);
    disminuirBtn.addEventListener('click', disminuirTamanio);
});



// Event Listeners para los botones de accesibilidad en el modal
document.addEventListener('DOMContentLoaded', () => {
  const aumentarBtn = document.getElementById('aumentarFuente');
  const disminuirBtn = document.getElementById('disminuirFuente');
  const contrasteBtn = document.getElementById('cambiarContraste');

  aumentarBtn.addEventListener('click', aumentarFuente);
  disminuirBtn.addEventListener('click', disminuirFuente);
  
});
