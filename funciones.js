alert  ("comencemos ingresando sus datos");
let Nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let mail = prompt("ingrese su correo electronico")

let ingresoCompra = prompt("que esta buscando?, macetas, mates, bandejas o sets?")

switch (ingresoCompra){
case "macetas":
alert ("tenemos muchas variedad en macetas");
break;
case "mates":
    alert ("tenemos muchas variedad en mates");
break;
case "bandejas":
    alert ("tenemos muchas variedad en bandejas");
break;
case "sets":
    alert ("tenemos muchas variedad en sets");
    break;
}

let cantidadMacetas = prompt("ingrese la cantidad de macetas que va a querer")
if (cantidadMacetas >= "3"){
 alert ("tiene un descuento del 30%")
}
if (cantidadMacetas <= "3"){
    alert ("si lleva mas de tres macetas tiene un descuento del 30%")
}



