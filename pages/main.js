let itemSelected = prompt("Ingresa el producto que quieres comprar");
let cantidadDeItems = parseInt(prompt("Igresa la cantidad de productos que quieres comprar"));
let precio = 0;
let itemsTotal= 0;
let precioTotal = 0;
let iva = 1.21;

switch (itemSelected){
    case "diadema":
        precio = 200;
        precioTotal = cantidadDeItems * precio;
        break;
    case "tarjeta de video":
        precio = 400;
        precioTotal = cantidadDeItems * precio;
        break;
    case "teclado":
        precio = 300;
        precioTotal = cantidadDeItems * precio;
        break;
    case "Procesador":
        precio = 800;
        precioTotal = cantidadDeItems * precio;
        break;
    default:
        alert("No ingresaste un item valido")
        break;
}


function calcularIva (){
    let precioConIva = precioTotal * iva
    return precioConIva;  
}

let precioTotalConIva = calcularIva()

console.log(precioTotalConIva)













