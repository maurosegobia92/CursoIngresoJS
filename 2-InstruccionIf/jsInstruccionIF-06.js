function mostrar()
{
	var edadIngresada;
	var adolecente;
	var adulto;
	edadIngresada=parseInt(document.getElementById("txtIdEdad").value);
	if(edadIngresada>=18){
		adulto=edadIngresada>=18;
		alert("Usted es mayor de edad");

	}

	if(edadIngresada>=13&&edadIngresada<=17){
		adolecente=edadIngresada>=13&&edadIngresada<=17;
		alert("Usted es un adolecente");

	}

	if(!adolecente&&!adulto){
		alert("Usted es un niño");
		
	}



}//FIN DE LA FUNCIÓN