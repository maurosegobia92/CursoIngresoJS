/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO: INTRUCCIÓN SWITCH. EJERCICIO 4. 
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días."
*/
function mostrar()
{
	//tomo el mes
	var mes=document.getElementById("txtIdMes").value;
	alert(mes);

	switch(mes)
	{
		case "Enero":
		alert("Tiene 31 días");
		break;

		case "Febrero":
		alert("Tiene 28 días");
		break;

		case "Marzo":
		alert("Tiene 31 días");
		break;

		case "Abril":
		alert("Tiene 30 días");
		break;

		case "Mayo":
		alert("Tiene 31 días");
		break;

		case "Junio":
		alert("Tiene 30 días");
		break;

		case "Julio":
		alert("Tiene 31 días");
		break;

		case "Agosto":
		alert("Tiene 31 días");
		break;

		case "Septiembre":
		alert("Tiene 30 días");
		break;

		case "Octubre":
		alert("Tiene 31 días");
		break;

		case "Noviembre":
		alert("Tiene 30 días");
		break;

		case "Diciembre":
		alert("Tiene 31 días");
		break;



	}
	



}//FIN DE LA FUNCIÓN