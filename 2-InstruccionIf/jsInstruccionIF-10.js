/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 10.

*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio;
	var min;
	var max;
	min=1;
	max=10;
	aleatorio=Math.round(Math.random()*(max-min)+min);
	if(aleatorio==9||aleatorio==10){
		alert("EXCELENTE");
	}
	else if(aleatorio>=4){

		alert("APROBÓ");
	}

	else {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN