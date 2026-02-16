// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Valida que todos los campos obligatorios estén completos
 */
function validarCamposVacios() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const address = document.getElementById("address").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    
    if (name === "" || email === "" || password === "" || confirmPassword === "" || dob === "" || address === "" || phoneNumber === "") {
        alert("Error: Por favor, completa todos los campos obligatorios.");
        return false;
    }
    return true;
}

/**
 * Valida que las contraseñas coincidan
 */
function validarContraseñas() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Error: Las contraseñas no coinciden.");
        return false;
    }
    return true;
}

/**
 * Valida que se haya seleccionado un género
 */
function validarGenero() {
    const genderElements = document.getElementsByName("gender");
    
    if (!Array.from(genderElements).some(radio => radio.checked)) {
        alert("Error: Por favor, selecciona tu género.");
        return false;
    }
    return true;
}

/**
 * Valida el formato del email
 */
function validarEmail() {
    const email = document.getElementById("email").value;
    
    if (!/^\S+@\S+$/.test(email)) {
        alert("Error: Por favor, ingresa un correo electrónico válido.");
        return false;
    }
    return true;
}

/**
 * Valida que el número de teléfono solo contenga dígitos
 */
function validarTelefono() {
    const phoneNumber = document.getElementById("phone-number").value;
    
    if (!/^\d+$/.test(phoneNumber)) {
        alert("Error: El número de teléfono solo debe contener dígitos.");
        return false;
    }
    return true;
}

/**
 * Valida que la fecha de nacimiento sea válida (en el pasado)
 */
function validarFechaNacimiento() {
    const dob = document.getElementById("dob").value;
    const fechaNacimiento = new Date(dob);
    const hoy = new Date();
    
    if (fechaNacimiento >= hoy) {
        alert("Error: La fecha de nacimiento debe ser una fecha pasada.");
        return false;
    }
    
    // Validación especial para año 2026
    if (fechaNacimiento.getFullYear() === 2026) {
        alert("¿Enserio naciste en el 2026?");
    }
    return true;
}

/**
 * Ejecuta todas las validaciones del formulario
 */
function validarFormulario() {
    // El orden importa: primero campos vacíos, luego validaciones específicas
    if (!validarCamposVacios()) return false;
    if (!validarEmail()) return false;
    if (!validarContraseñas()) return false;
    if (!validarGenero()) return false;
    if (!validarTelefono()) return false;
    if (!validarFechaNacimiento()) return false;
    
    return true;
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

/**
 * Auto-rellena el formulario con datos de ejemplo
 */
function autoRellenarFormulario() {
    document.getElementById("name").value = "Juan García";
    document.getElementById("email").value = "juan.garcia@example.com";
    document.getElementById("password").value = "Password123";
    document.getElementById("confirmPassword").value = "Password123";
    document.getElementById("dob").value = "1990-05-15";
    document.getElementById("address").value = "Calle Principal 123, Apartamento 4B";
    document.getElementById("phone-number").value = "3001234567";
    
    // Seleccionar género (male por defecto)
    document.getElementById("male").checked = true;
    
    alert("Formulario rellenado con datos de ejemplo.");
}

/**
 * Resetea el formulario y limpia los campos
 */
function resetearFormulario() {
    document.getElementById("miFormulario").reset();
    alert("Formulario reseteado.");
}

// ============================================
// EVENT LISTENERS
// ============================================

// Evento para el envío del formulario
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validarFormulario()) {
        alert("¡Formulario enviado correctamente!");
        // Aquí puedes agregar la lógica para enviar los datos al servidor
    }
});

// Evento para el reset del formulario
document.getElementById("miFormulario").addEventListener("reset", function() {
    alert("Formulario reseteado!");
});

// ============================================
// FUNCIONES ASYNC/AWAIT Y API
// ============================================

/**
 * Inserta contenido HTML dinámico usando async/await
 */
async function insertarHTMLDinamico() {
    const contenedor = document.getElementById("contenido-html");
    
    // Simular una carga asincrónica
    contenedor.innerHTML = "<p>Cargando contenido...</p>";
    
    try {
        // Simular una operación asincrónica (delay de 1.5 segundos)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Insertar el contenido HTML
        const html = `
            <div class="contenido-dinamico">
                <h3>Contenido Insertado Dinámicamente</h3>
                <p>Este contenido fue insertado usando una función <strong>async/await</strong>.</p>
                <ul>
                    <li>✓ Primera característica</li>
                    <li>✓ Segunda característica</li>
                    <li>✓ Tercera característica</li>
                </ul>
                <p><em>Tiemstapo de inserción: ${new Date().toLocaleTimeString()}</em></p>
            </div>
        `;
        
        contenedor.innerHTML = html;
        console.log("Contenido HTML insertado exitosamente");
    } catch (error) {
        contenedor.innerHTML = `<p style="color: red;">Error al insertar contenido: ${error.message}</p>`;
        console.error("Error:", error);
    }
}
/**
 * Obtiene datos de un juego específico de la API de FreeToGame y los muestra
 */async function obtenerDatosAPI() {
    const contenedor = document.getElementById("contenido-api");
    
    // 1. Usamos el proxy de prueba (CORS Anywhere) + la URL de la API
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const urlAPI = "https://www.freetogame.com/api/games";
    
    contenedor.innerHTML = "<p>Intentando saltar el bloqueo CORS...</p>";
    
    try {
        // La petición se hace a través del proxy
        const respuesta = await fetch(proxy + urlAPI);
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}. Posiblemente debas activar el proxy.`);
        }
        
        const datos = await respuesta.json();
        
        // 2. Extraemos lo mínimo: el título del primer juego del arreglo
        const primerJuego = datos[0].title;
        
        contenedor.innerHTML = `<h1>Juego encontrado: ${primerJuego}</h1>`;
        console.log("¡Éxito! Datos recibidos:", datos[0]);

    } catch (error) {
        contenedor.innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
            <p>Si es un error 403, entra a <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">este enlace</a> y dale clic al botón "Request temporary access".</p>
        `;
    }
}
