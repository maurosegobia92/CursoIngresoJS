/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 7.

*/
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	edadIngresada=parseInt(document.getElementById("txtIdEdad").value);
	document.getElementById("estadoCivil").value=estadoCivilIngresado;
	if (edadIngresada<18&&estadoCivilIngresado!="Soltero"){
		alert("Es muy pequeño para no ser soltero");

	}
	
	




}//FIN DE LA FUNCIÓN