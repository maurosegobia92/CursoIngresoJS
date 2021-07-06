/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Creo las variables para guardar los datos ingresados a traves del cuadro de texto y la variable donde voy a guardar el resultado de la suma de las variantes.
	var numero1;
	var numero2;
	var resultado;
	//guardo los datos ingresados en el cuadro de texto en las variantes numero1 y numero2. Y los transformo en numeros enteros atravez de la función parseInt.
	//realizo la suma de las variantes y los guardo en la avriante resultado:
	// luego mediante la función alert muestro el resultado de la suma de variantes. 

	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=numero1+numero2;
	alert("El resultado de la suma es: "+resultado);

	
	





}

