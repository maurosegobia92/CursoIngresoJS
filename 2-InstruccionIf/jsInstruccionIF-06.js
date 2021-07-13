/*
AUTOR:Mauro Nahuel Segobia.
ENUNCIADO:Introducción IF, Ejerecicio 6.

*/
function mostrar()
{
	
var edadIngresada;
edadIngresada=parseInt(document.getElementById("txtIdEdad").value);

if(edadIngresada>=18){

	alert("Usted es mayor de edad");
}
else if(edadIngresada>13){
	alert("Usted es un adolecente");
}


else {
alert("Usted es un niño");

}



}//FIN DE LA FUNCIÓN