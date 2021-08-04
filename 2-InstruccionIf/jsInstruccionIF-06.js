/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 6.

*/
function mostrar()
{
	var edad;
	
	edad=document.getElementById("txtIdEdad").value;

	if(edad>=18)
	{
		alert ("usted es mayor de edad.")
	}
	else
	{
		if (edad>13&&edad<17)
		{
			alert("usted es un adolecente.");
		}
		else
		{
			alert("Usted es un niño.");
		}
	}
	




}//FIN DE LA FUNCIÓN