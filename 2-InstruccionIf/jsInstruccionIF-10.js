/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 10.
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var maximo;
	var minimo;
	var numeroRandom;
	

	minimo=1;
	maximo=10;
	numeroRandom=Math.round(Math.random()*(maximo-minimo)+minimo);

	if(numeroRandom==9||numeroRandom==10)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(numeroRandom>4)
		{
			alert("APROBÓ");
		}
		else
		{
			if(numeroRandom<4)
			{
				alert("Vamos, la proxima se puede");
			}
			
		}

	}



}//FIN DE LA FUNCIÓN