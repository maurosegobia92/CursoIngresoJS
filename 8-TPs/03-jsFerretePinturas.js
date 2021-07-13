/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO: TP Ejercicio 3.
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIng;
	var farenhet;
	var centigrados;
	var farenAcenti;
	temperaturaIng=parseInt(document.getElementById("txtIdTemperatura").value);
	farenhet=temperaturaIng;
	centigrados=temperaturaIng;
	farenAcenti=(farenhet-32)*(5/9);
	alert(farenhet+" grados farenheit equivalen a "+farenAcenti+" centigrados");
	


}

function CentigradosFahrenheit () 
{
	var temperaturaIng;
	var farenhet;
	var centigrados;
	var centiAfaren;
	temperaturaIng=parseInt(document.getElementById("txtIdTemperatura").value);
	farenhet=temperaturaIng;
	centigrados=temperaturaIng;
	centiAfaren=(temperaturaIng*9/5)+32;
	alert(centigrados+" centigrados equivalen a "+centiAfaren+" grados farenheit");

}
