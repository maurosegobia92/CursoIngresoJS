/*
AUTOR:Mauro Nahuel Segobia.
Parcial 2019. Ejercicio 4.
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

function mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	numero1=parseInt(prompt("Ingrese un numero"), 10);
	numero2=parseInt(prompt("Ingrese un numero"), 10);
    
	
	if (numero1 == numero2)
	{
		resultado=("" + numero1 + numero2);
		alert (resultado);
	}
	
	if (numero1 > numero2)
	{
		resultado= (numero1 - numero2);
		alert (resultado);
		
		if(resultado > 10)
		{
			alert("la resta es "+resultado+" y superó el 10");
		}
	}
	else
	{
		resultado= (numero1 + numero2);
		alert(resultado);
	}
	


	
	

	
		







	


	



	


	
}
