/*
AUTOR: Mauro Nahuel Segobia.
Instrucción Switch 07 - 
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste


*/


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		alert("Se encuentra al sur de la Argentina");
		break;

		case "Cataratas":
		alert("Se encuentra al norte de la Argentina");
		break;

		case "Mar del plata":
		alert("Se encuentra al este de la Argentina");
		break;

		case "Ushuaia":
		alert("Se encuentra al sur de la Argentina");
		break;
	}




}//FIN DE LA FUNCIÓN