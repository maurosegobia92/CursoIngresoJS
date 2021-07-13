/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 8.

*/
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	edadIngresada=parseInt(document.getElementById("txtIdEdad").value);
	estadoCivilIngresado=document.getElementById("estadoCivil").value;
	if(estadoCivilIngresado=="Soltero"&&edadIngresada>=18){
		alert("Es soltero y no es menor.");


	}

	
}//FIN DE LA FUNCIÓN