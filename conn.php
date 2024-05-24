<?php
$servername = "sql206.byetcluster.com"; // O la IP de tu servidor de base de datos
$username = "	if0_36309546";
$password = "5p91rQXe3kfQ";
$database = "if0_36309546_librery";

// Crear conexión
$conn = new mysqli(sql206.byetcluster.com, if0_36309546, 5p91rQXe3kfQ, if0_36309546_librery);

// Verificar conexión
if ($conn->connect_error)


{
  die("La conexión ha fallado: " . $conn->connect_error);
}
echo "Conexión exitosa";
?>


<?php
include 'db_conexion.php'; // Incluye el archivo de conexión
  
SELECT * FROM ventas;
