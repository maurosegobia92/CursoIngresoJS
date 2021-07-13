/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO: TP.02 Ferrete Facturación.
2.Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	largo=parseInt(document.getElementById("txtIdLargo").value);
	ancho=parseInt(document.getElementById("txtIdAncho").value);
	perimetro=(largo*2)+(ancho*2);
	alert("Usted debe comprar "+perimetro+" Metros");

}
function Circulo () 
{
	var radio;
	var circunferencia;
	var resultado;
	radio=parseInt(document.getElementById("txtIdRadio").value);
	circunferencia=2*3.14*radio;
	resultado=circunferencia*3;
	alert("Usted debe comprar "+resultado+" Metros");


	

}
function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var metroCe;
	var metroCa;;
	largo=parseInt(document.getElementById("txtIdLargo").value);
	ancho=parseInt(document.getElementById("txtIdAncho").value);
	superficie=largo*ancho;
	metroCe=2*superficie;
	metroCa=3*superficie;
	alert("Usted necesita comprar: "+metroCe+" bolsas de cemento y "+metroCa+" bolsas de cal");

	

	


}