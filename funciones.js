alert  ("comencemos ingresando sus datos");
let Nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let mail = prompt("ingrese su correo electronico")

let ingresoCompra = prompt("que esta buscando?, macetas, mates, bandejas, sets o varios?")

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
    case "varios":
        break;
}

let cantidadProductos = prompt("ingrese la cantidad de productos que va a llevar");
cantidadProductos = Number(cantidadProductos);
if (cantidadProductos >= 3){
    alert ("tiene un 30% de descuento");
}
    else {
        alert ("si lleva mas de 3 productos obtiene un 30% de descuento");
    }

    









