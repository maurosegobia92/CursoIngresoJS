/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	mensaje="Su nombre es: ";
	mensaje=mensaje+nombre;
	mensaje=mensaje+(" y su edad es: ")+edad;
	alert(mensaje);



}

