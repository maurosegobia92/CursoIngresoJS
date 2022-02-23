/*
Segobia Mauro DIV Z
Ejercicio IteracionesWhile 04

Enunciado:
al presionar el botón pedir un número entre 0 y 9 inclusive.

*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
	while (numeroIngresado<0 || numeroIngresado>9)
	{
		prompt("Error, vuelva a intentarlo.\nIngrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	

	

}//FIN DE LA FUNCIÓN
