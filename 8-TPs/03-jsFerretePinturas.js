/*
Segobia Mauro DIV Z
Ejercicio TP E/S 03

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFarenheitIngresada;
    var centigrados;

    
    temperaturaFarenheitIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaFarenheitIngresada = parseFloat(temperaturaFarenheitIngresada);
    centigrados = (temperaturaFarenheitIngresada - 32) * 5/9;

    alert(temperaturaFarenheitIngresada+" grados Farenheit son "+centigrados+" grados centigrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaCentigradosIngresada;
    var gradosFarenheit;

    temperaturaCentigradosIngresada = document.getElementById("txtIdTemperatura").value;
    gradosFarenheit = (temperaturaCentigradosIngresada * 9/5) + 32;

    alert(temperaturaCentigradosIngresada+" grados centigrados son "+gradosFarenheit+" grados Farenheit");

}
