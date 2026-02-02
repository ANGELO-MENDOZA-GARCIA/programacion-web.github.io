# Formulario de Registro con Validación en JavaScript

Este proyecto consiste en una interfaz web para el registro de usuarios que implementa validaciones estrictas del lado del cliente utilizando JavaScript nativo (Vanilla JS). El objetivo es asegurar la integridad de los datos antes de que sean procesados.

## 🚀 Características

### Interfaz de Usuario (UI)
* **Diseño Centrado:** Uso de CSS Flexbox para centrar el formulario vertical y horizontalmente.
* **Estilos Limpios:** Campos de entrada estilizados y retroalimentación visual clara.
* **Botones de Control:** Incluye opciones para enviar (`Submit`) y limpiar (`Reset`) el formulario.

### Lógica de Validación (JavaScript)
El script intercepta el evento de envío y verifica las siguientes reglas de negocio:

1.  **Campos Obligatorios:** Impide el envío si algún campo está vacío.
2.  **Coincidencia de Contraseñas:** Verifica que el campo `Password` y `Confirm Password` sean idénticos.
3.  **Selección de Género:** Valida que se haya seleccionado una opción de los botones de radio.
4.  **Formato de Email:** Uso de Regex (`^\S+@\S+$`) para asegurar un formato de correo básico.
5.  **Integridad del Teléfono:** Uso de Regex (`^\d+$`) para permitir únicamente dígitos numéricos.
6.  **Lógica de Fechas:**
    * Valida que la fecha de nacimiento no sea futura.
    * Incluye una validación lógica específica para nacimientos en el año 2026.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del formulario (`fieldset`, `legend`, `input types`).
* **CSS3:** Diseño responsivo y estilización de componentes.
* **JavaScript (ES6):** Manipulación del DOM y manejo de eventos (`submit`, `reset`).

## 📂 Estructura del Proyecto

```text
.
├── index.html    # Contiene la estructura, estilos y lógica
└── README.md     # Documentación del proyecto
