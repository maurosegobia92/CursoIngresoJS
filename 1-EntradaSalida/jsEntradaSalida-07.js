/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//"txtIdNumeroUno"
//"txtIdNumeroDos"
function sumar()
{	
	var numero1;
	var numero2;
	var resultadoSuma;
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultadoSuma=numero1+numero2;
	alert("El resultado de la suma es: "+resultadoSuma);

	
}

function restar()
{
	var numero1;
	var numero2;
	var resultadoResta;
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultadoResta=numero1-numero2;
	alert("El resultado de la resta es: "+resultadoResta);

	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resutadoMult;
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resutadoMult=numero1*numero2;
	alert("El resultado de la multipicación es: "+resutadoMult);



}

function dividir()
{
	var numero1;
	var numero2;
	var resultadoDiv;
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultadoDiv=numero1/numero2;
	alert("El resultado de la división es "+resultadoDiv);



	
}

