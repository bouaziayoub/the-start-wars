#THE-START-WARS
**Aplicación de Registro con Integración API**

Este proyecto se enfoca en la creación de una aplicación que permite a los usuarios registrarse ingresando su correo electrónico, nombre de usuario y nombre completo. La aplicación utiliza la API proporcionada por "https://jsonplaceholder.typicode.com" para simular la creación de usuarios.

**Tareas del Proyecto:**

**Tarea #1 - Registro de Usuario:**
- Se implementaron campos de entrada HTML para que el usuario pueda ingresar su correo electrónico, nombre de usuario y nombre completo.
- Un botón "Register" activa la funcionalidad de registro.
- Al hacer clic en este botón, se realiza una petición de creación a la API "https://jsonplaceholder.typicode.com/users" utilizando la información proporcionada por el usuario en los campos de entrada HTML.
- La respuesta simulada de la API se almacena de manera segura en el sessionStorage del navegador para un acceso posterior.
- Se incorpora un mecanismo para mostrar mensajes de error en pantalla en caso de que la petición no se ejecute correctamente.

**Observaciones Adicionales:**
- La API utilizada en este proyecto simula la creación de usuarios y devuelve resultados similares a los que se obtendrían de un servidor que realmente crea usuarios.
- La información del usuario registrada se gestiona a través del sessionStorage para mejorar la experiencia del usuario y permitir un acceso fácil a los datos almacenados.
- La aplicación proporciona una retroalimentación visual clara mediante mensajes de error para informar al usuario sobre cualquier problema durante el proceso de registro.

Este proyecto destaca mis habilidades en el manejo de solicitudes API, manipulación de datos en el lado del cliente y diseño de interfaces interactivas. La integración de tecnologías web modernas y la atención a la experiencia del usuario son elementos clave que reflejan mi enfoque en la creación de soluciones prácticas y eficientes.

-------------------------------------------------------------------------------------


This JavaScript application is designed to combine characters from three input fields and generate all possible combinations of these characters. Here's a breakdown of its functionality:

1. **Input Fields:**
   - The application expects three input fields with IDs "word1," "word2," and "word3," where users can input characters.

2. **Event Listener:**
   - It listens for a click event on a button element with the ID "combine" to trigger the combination calculation.

3. **Combination Calculation:**
   - When the button is clicked, the application retrieves the values from the three input fields.
   - It splits each input value into individual characters.
   - It then iterates through each character of the first input, combining it with each character from the second and third inputs.
   - For each combination, it constructs a string with the format "character1-character2-character3" and accumulates these strings.
   - The final accumulated string contains all possible combinations separated by line breaks.
   - This final string is then displayed in an output field with the ID "result."

4. **Validation:**
   - Before performing the combination calculation, the application checks if all input fields are filled. If any of the fields are empty, it displays an alert prompting the user to fill all fields.

5. **Output:**
   - The final combinations are displayed in the output field with the ID "result," where each combination appears on a new line.

This application provides a simple but effective way to generate combinations of characters from multiple input fields, potentially useful in various scenarios such as generating permutations for passwords or exploring linguistic patterns.
