function mostrar()
{
	var edadIngresada;
	edadIngresada=parseInt(document.getElementById("txtIdEdad").value);
	if(edadIngresada>=18){

	alert("Usted es mayor de edad");	
	}

	if(edadIngresada<18){

	alert("Usted es menor de edad");

}
}//FIN DE LA FUNCIÓN