//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
let precio_base = 2000

//Valores de los recargos 
const edad_18 = 0.1 // 10%
const edad_25 = 0.2 // 20%
const edad_50 = 0.3 // 30%

const casado_18 = 0.1 // 10%
const casado_25 = 0.2 // 20%
const casado_50 = 0.3 // 30%

const  hijos_recargo1 = 0.1 // 10%     
const hijos_recargo2 = 0.2 // 20%
//Recargo
let recargo = 0
let recargo_total = 0

//Precio final 
let precio_final = 0

//Mensajes de alerta para ingresar datos 
let nombre = prompt("Ingrese su nombre, por favor")
let edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números")

let casado = prompt("¿Está casado actualmente?", "si / no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
let edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "Ingrese solamente numeros")
}
//convirtiendo las edades ingresadas a números 
let edad_numero = parseInt(edad)
let edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

let hijos = prompt("¿Tiene hijos o hijas?", "si / no")
//Comprobamos la cantidad de hijos solamente si los tienen
let cantidad_hijos
if ("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt ("Cuantos hijos tiene?", "ingrese solamente numeros")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */
let cantidad_hijos_numero = 0
if ("Si" == hijos.toUpperCase()){
cantidad_hijos_numero = parseint (cantidad_hijos)
}
//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
else if (edad_numero>=25 && edad_numero <50){
recargo = precio_base * edad_25;
recargo_total = recargo_total + recargo;
}
else {
  recargo = precio_base * edad_50;
  recargo_total = recargo_total + recargo;
}
//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
}
else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50 ){
  recargo = precio_base * casado_25;
  recargo_total = recargo_total + recargo;
}
else {
  recargo = precio_base *casado_50;
  recargo_total = recargo_total + recargo;
}
/**
 
 * 3. Recargo por la cantidad de hijos 
 */ 
if (cantidad_hijos_numero >0 && cantidad_hijos_numero <3){
  recargo = precio_base * hijos_recargo1;
  recargo_total = recargo_total + recargo;
}
else {
  recargo = precio_base * hijos_recargo2;
  recargo_total = recargo_total + recargo;
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

