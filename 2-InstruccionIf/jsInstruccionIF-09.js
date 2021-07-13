/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 8.

*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	var minimo;
	var maximo;
	minimo=1;
	maximo=10
	numeroAleatorio=Math.round(Math.random()*(maximo-minimo)+minimo);
	alert(numeroAleatorio);

}//FIN DE LA FUNCIÓN