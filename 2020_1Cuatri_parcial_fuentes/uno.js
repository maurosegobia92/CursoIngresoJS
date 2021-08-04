/*
AUTOR: Mauro Nahuel Segobia.
PARCIAL 2020 1)A).
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var contadorDeProductos;
	var tipo;
	var unidades;
	var precio;
	var marca;
	var fabricante;
	var primerAlcohol;
	var primerAlcoholPrecio;
	var primerAlcoholUnidades;
	var primerAlcoholFabricante;

	
	contadorDeProductos=0;

	while(contadorDeProductos<5)
	{
		tipo=prompt("Ingrese el tipo de producto");

		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo=prompt("Ingrese el tipo de producto");
		}
		 precio=parseInt(precio)=prompt("Ingrese el precio");
		
		while(precio<100 && precio>300)
		{
			precio=parseInt(precio)=prompt("Ingrese el precio");
		}

			unidades=parseInt(unidades)=prompt("ingrese las unidades");
		while(unidades<0 && unidades>1000)
		{
			unidades=parseInt(unidades)=prompt("ingrese las unidades");	
		}

		marca=prompt(Ingrese la marca);
		fabricante=prompt("Ingrese el nombre del fabricante");

		if(tipo=="alcohol")
		{
			if(primerAlcohol="es el primero")
			{
				primerAlcohol="ya no lo es";
				primerAlcoholPrecio=precio;
				primerAlcoholUnidades=unidades;
				primerAlcoholFabricante=fabricante;

			}
			else
			{
				if(primerAlcoholPrecio>precio)
				{
					primerAlcoholPrecio=precio;
					primerAlcoholUnidades=unidades;
					primerAlcoholFabricante=fabricante;
				}
			}
		}


		contadorDeProductos=contadorDeProductos+1;
	}	



	
	
}
