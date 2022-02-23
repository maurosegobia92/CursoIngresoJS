/*
Segobia Mauro DIV Z
Ejercicio Iteraciones While 05
Enunciado:
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("Error, ingrese su sexo f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN
