/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO: TP Ejercicio 1.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;
	productoUno=parseInt(document.getElementById("txtIdPrecioUno").value);
	productoDos=parseInt(document.getElementById("txtIdPrecioDos").value);
	productoTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	suma=productoUno+productoDos+productoTres;
	alert("El resultado de la suma de productos es: "+suma);

}
function Promedio () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;
	var promedio;
	productoUno=parseInt(document.getElementById("txtIdPrecioUno").value);
	productoDos=parseInt(document.getElementById("txtIdPrecioDos").value);
	productoTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	suma=productoUno+productoDos+productoTres;
	promedio=suma/3;
	alert("El promedio de los tres productos es "+promedio);
	
}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;
	var productoIva
	productoUno=parseInt(document.getElementById("txtIdPrecioUno").value);
	productoDos=parseInt(document.getElementById("txtIdPrecioDos").value);
	productoTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	suma=productoUno+productoDos+productoTres;
	productoIva=suma*1.21;
	alert("El precio final de los tres productos más Iva es "+productoIva);
	
}