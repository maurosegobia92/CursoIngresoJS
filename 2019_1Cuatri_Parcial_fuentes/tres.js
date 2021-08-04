function mostrar()
{/*
	AUTOR:Mauro Nahul Segobia.
	ENUNCIADO:Parcial 2019 Ejercicio 3.
	Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
	*/

	var precio;
	var descuento;
	var precioFinal;
	precio=prompt("Por favor ingrese el precio del producto");
	precio=parseInt(precio);
	descuento=prompt("Por favor ingrese el descuento deseado");
	descuento=parseInt(descuento);
	descuento=precio*descuento/100;
	precioFinal=precio-descuento;
	document.getElementById("elPrecioFinal").value=precioFinal;


}
