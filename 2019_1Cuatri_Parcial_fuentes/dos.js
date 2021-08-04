function mostrar()
{
  /*AUTOR:Mauro Nahuel Segobia.
	ENUNCUADO:Parcial 2019 Ejercicio 2.
	Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

var usuario1;
var usuario2;
var peso1;
var peso2;
var sumaDePesos;
var promedioDePeso;
usuario1=prompt("Ingrese su nombre");
usuario2=prompt("Ingrese el nombre de su pareja");
peso1=prompt("Por favor ingrese su peso");
peso1=parseInt(peso1);
peso2=prompt("Por favor ingrese el peso de su pareja");
peso2=parseInt(peso2);
sumaDePesos=peso1+peso2;
promedioDePeso=sumaDePesos/2;
alert("Ustedes se llaman "+usuario1+" y "+usuario2+" ,pesan "+peso1+" Kg y "+peso2+" kg.\nQue sumados son "+sumaDePesos+" y el promedio de peso es "+promedioDePeso+"kg");



}
