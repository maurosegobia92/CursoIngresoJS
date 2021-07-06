/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//"txtIdNombre"
	//creo variable para guardar el nombre de que ingrese el usuario.
	var nombre;
	//Guardo en la variable nombre, el texto que escribio el usuario mediante la función promp.
	nombre=prompt("Ingrese su nombre");
	//Copio el dato guardado en la variable nombre dentro de la caja de texto de la pagina html.
	document.getElementById("txtIdNombre").value=nombre;


	
}

