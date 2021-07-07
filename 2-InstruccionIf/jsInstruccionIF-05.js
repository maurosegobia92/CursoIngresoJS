function mostrar()
{
	var edadIngresada;
	var adolecente;
	edadIngresada=parseInt(document.getElementById("txtIdEdad").value);
	adolecente=edadIngresada>=13&&edadIngresada<=17;
	if(!adolecente){
		alert("No sos un adolecente");

	}


}//FIN DE LA FUNCIÓN