/*
Segobia Mauro DIV Z
Ejerecicio Instrucción 'Switch' 09

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	
	var estacion;
	var destino;
	var precioBase;
	var precioFinal;
	var descuento;
	var aumento;
	
	precioBase = 15000;
	aumento = 0;
	descuento = 0;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 20;
				break;
				
				case "Mar del plata":
					descuento = 20;
				break;
				
				default:
					descuento = 10;
				break;	
			}
		break;
		
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 20;
				break;
				
				case "Mar del plata":
					aumento = 20;
				break;	

				default:
					aumento = 10;
				break;	
			}
		break;
		
		default:
			if (destino!="Cordoba")
			{
				aumento = 10;
			}
		break;	
		
		
	}
	
	precioFinal = precioBase + (precioBase*aumento/100) - (precioBase*descuento/100);
	alert (precioFinal);
	
		 
		

	







}//FIN DE LA FUNCIÓN
