/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO: INTRUCCIÓN SWITCH. EJERCICIO 5. 
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia =document.getElementById("txtIdHora").value;
	alert(horaDelDia);
	
	switch(horaDelDia)
	{
		case "7":
		alert("Es de mañana.");
		break;

		case "8":
		alert("Es de mañana.");
		break;

		case "9":
		alert("Es de mañana.");
		break;

		case "10":
		alert("Es de mañana.");
		break;

		case "11":
		alert("Es de mañana.");
		break;

	}
	



}//FIN DE LA FUNCIÓN