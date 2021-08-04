/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 9.
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var maximo;
	var minimo;

	minimo=1;
	maximo=10;
	numeroRandom=Math.round(Math.random()*(maximo-minimo)+minimo);
	alert(numeroRandom);
	

}//FIN DE LA FUNCIÓN