/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 3.
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

*/
function mostrar()
{
	var edad;
	
	edad=document.getElementById("txtIdEdad").value;
	if(edad>=18)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		if(edad<18)
		{
			alert("Usted es menor de edad.");
		}
	}





}//FIN DE LA FUNCIÓN