// Función para mostrar la sección de Inicio
function mostrarInicio() {
    document.getElementById('contenido').innerHTML = `
        <h2>¡Bienvenido a la Biblioteca Virtual!</h2>
        <p>Donde encontraras los mejores libros.</p>
    `;
}

// Función para mostrar la sección de Libros
function mostrarLibros() {
    document.getElementById('contenido').innerHTML = `
        <h2>Libros Disponibles</h2>
        <form>
            <label for="buscar">Libro:</label>
            <input type="text" id="buscar" name="buscar"><br><br>
            
            <button type="button" onclick="buscarLibro()">Buscar</button><br><br>

            <label for="lb">Libro:</label>                   
            <input type="text" id="lb" name="lb"><br><br>  

            <label for="precio">Precio del libro:</label>
            <input type="text" id="precio" name="precio"><br><br>
        </form>
    `;
}



// Función para mostrar la sección de Autores
function mostrarAutores() {
    document.getElementById('contenido').innerHTML = `
        <h2>Nuestros Autores</h2>
        <form>
            <label for="bus">Autor:</label>
            <input type="text" id="bus" name="bus"><br><br>
            
            <button type="button" onclick="buscarAutor()">Buscar</button>

            <label for="au">Nombre del autor:</label>                   
            <input type="text" id="au" name="au"><br><br>  

            <label for="apellido">Apellido del autor:</label>
            <input type="text" id="apellido" name="apellido"><br><br>

            <label for="telefono">Teléfono del autor:</label>
            <input type="text" id="telefono" name="telefono"><br><br>
            
            
        </form>
    `;
}



// Función para mostrar la sección de Contacto
function mostrarContacto() {
    document.getElementById('contenido').innerHTML = `
        <h2>Contacto</h2>
        <p>¡Ponte en contacto con nosotros!</p>
        <form>
            <label for="id">ID:</label>
            <input type="text" id="id" name="id"><br><br>

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br><br>

            <label for="correo">Correo:</label>
            <input type="text" id="correo" name="correo"><br><br>

            <label for="frcha">Fecha:</label>
            <input type="text" id="fecha" name="fecha"><br><br>


            <label for="mensaje">Mensaje:</label><br>
            <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea><br><br>
            <button type="submit">Enviar</button>
        </form>
    `;
}

// Función para inicializar la página
function init() {
    mostrarInicio(); // Mostrar contenido inicial al cargar la página
}

// Ejecutar la función init() cuando se cargue la página
document.addEventListener('DOMContentLoaded', init);

