/*
Segobia Mauro DIV Z
Ejercicio IteracionesWhile 03

Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)

*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada!="utn750")
	{
		alert("Clave Incorrecta, vuelva a intentarlo");
		claveIngresada = prompt("ingrese el número clave.");
	}

	alert ("Felicidades ingreso a su cuenta");

	
}//FIN DE LA FUNCIÓN
