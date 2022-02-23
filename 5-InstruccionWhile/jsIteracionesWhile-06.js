/*
Segobia Mauro DIV Z 
Ejercicio Iteraciones While 06

Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador=parseInt(acumulador);
		acumulador = acumulador + numeroIngresado;

		contador++;

	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5; // txtIdPromedio.value=acumulador/contador; También se puede. igual chequear.


}//FIN DE LA FUNCIÓN
