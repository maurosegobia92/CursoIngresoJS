/*
AUTOR: Mauro Nahuel Segobia.
Instrucción Switch 09 - 
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var descuento;
	var resultado;
	alert(estacionIngresada);

	if(estacionIngresada=="Invierno")
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert(15000*1.2);
			break;

			case "Cataratas":
			case "Cordoba":
			descuento=(15000*10)/100;
			resultado=15000-descuento;
			alert(resultado);
			break;

			default:
			descuento=(15000*20)/100;
			resultado=15000-descuento;
			alert(resultado);
			break;
		}
	}
	else
	{
		if(estacionIngresada=="Verano")
		{
			switch(destinoIngresado)
			{
				case "Bariloche":
				descuento=(15000*20)/100;
				resultado=15000-descuento;
				alert(resultado);
				break;

				case "Cataratas":
				case "Cordoba":
				alert(15000*1.1);
				break;

				default:
				alert(15000*1.2);
			}

		}
		else
		{
			if(estacionIngresada=="Otoño"||estacionIngresada=="Primavera")
			{
				switch(destinoIngresado)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
					alert(15000*1.1);
					break;

					default:
					alert(15000);
					break;
				}
			}
		}
	}


}//FIN DE LA FUNCIÓN