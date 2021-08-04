/*
AUTOR: Mauro Nahuel Segobia.
Instrucción Switch 08 - 
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Hace Frío");
		break;

		default:
		alert("Hace Calor");
		break;
	}

}//FIN DE LA FUNCIÓN