
//INTRODUCCIÓN DE DATOS-----------------------------------------------------------------------------------------------------------
//ParseInt para convertir a int, le dejo un valor por defecto '0' para insinuar al usuario que se trata de un número
var altura = parseInt(prompt('Intoduzca su altura en centímetros: ',0));
var peso = parseInt(prompt('Intoduzca su peso en kilogramos: ',0));

//Bucle para verificar la correcta introducción de datos
while(altura<=0 || isNaN(altura)){//isNaN = 'is not a nummber'
    altura = parseInt(prompt('Error, Intoduzca su altura en centímetros: ',0));
} 
while(peso<=0 || isNaN(peso)){
    peso = parseInt(prompt('Error, Intoduzca su peso en kilogramos: ',0));
} //-------------------------------------------------------------------------------------------------------------------------------



//Operacion para calcular IMC--------------------------------------------------------------------------------------------------
altura = altura/100;
var imc = peso/(altura*altura);

alert('\n'+'Su IMC es: ' + imc);
//-------------------------------------------------------------------------------------------------------------------------------


//Condicionales para ubicar y modificar el resultado--------------------------------------------------------------------------
if(imc<16.00){
    document.getElementById("1").style.color= "black";
}else if(imc>=16.00 && imc <= 16.99){
    document.getElementById('2').style.color="black";
}else if(imc>=17.00 && imc <= 18.49){
    document.getElementById('3').style.color="black";
}else if(imc>=18.50 && imc <= 24.99){
    document.getElementById('4').style.color="black";
}else if(imc>=25.00 && imc <= 29.99){
    document.getElementById('5').style.color="black";
}else if(imc>=30.00 && imc <= 34.99){
    document.getElementById('6').style.color="black";
}else if(imc>=35.00 && imc <= 40.00){
    document.getElementById('7').style.color="black";
}else
    document.getElementById('8').style.color="black";
//--------------------------------------------------------------------------------------------------------------------------------

