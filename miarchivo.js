
let articulo = prompt("Ingrese el tipo de bebida que quiere comprar (comprar para finalizar)");
let carrito = 0;
let precioGin = 600;
let precioRon = 950;
let precioVodka = 450;
let precioCerveza = 150;
let precioWhisky = 1000;

function costoTotalArticulo(precioArticulo,cantidadArticulo){
    return precioArticulo * cantidadArticulo
}

function descuento1(sumtotalCostoArt){
    return sumtotalCostoArt * 0.9
}

function descuento2(sumtotalCostoArt){
    return sumtotalCostoArt * 0.8
}


while(articulo != "comprar"){
    switch(articulo){
        case "gin":
            cantidadGin = parseInt(prompt("Ingrese la cantidad de botellas de gin que va a comprar."));
            carrito = carrito + cantidadGin;
            alert("Tienes "+ carrito +" articulos en tu carrito de compras");
            break;
        case "ron":
            cantidadRon = parseInt(prompt("Ingrese la cantidad botellas de ron que va a comprar."));
            carrito = carrito + cantidadRon;
            alert("Tienes "+ carrito +" articulos en tu carrito de compras");
            break;
        case "vodka":
            cantidadVodka = parseInt(prompt("Ingrese la cantidad de botellas de vodka que va a comprar."));
            carrito = carrito + cantidadVodka;
            alert("Tienes "+ carrito +" articulos en tu carrito de compras");
            break;
        case "cerveza":
            cantidadCerveza = parseInt(prompt("Ingrese la cantidad de cervezas que va a comprar."));
            carrito = carrito + cantidadCerveza;
            alert("Tienes "+ carrito +" articulos en tu carrito de compras");
            break;
        case "whisky":
            cantidadWhisky = parseInt(prompt("Ingrese la cantidad botellas de whisky que va a comprar."));
            carrito = carrito + cantidadWhisky;
            alert("Tienes "+ carrito +" articulos en tu carrito de compras");
        break;        
        default:
            alert("No tenemos ese articulo en stock");
            break;
    }
    articulo = prompt("Ingrese el la bebidas que quiere comprar (comprar para finalizar)");
}

let precioTotalWhisky = costoTotalArticulo(precioWhisky,cantidadWhisky);
let precioTotalCerveza = costoTotalArticulo(precioCerveza,cantidadCerveza);
let precioTotalVodka = costoTotalArticulo(precioVodka,cantidadVodka);
let precioTotalRon = costoTotalArticulo(precioRon,cantidadRon);
let precioTotalGin = costoTotalArticulo(precioGin,cantidadGin);

let sumtotalCostoArt = precioTotalCerveza + precioTotalGin + precioTotalRon + precioTotalVodka + precioTotalWhisky;
console.log("El subtotal de la compra es de $" + sumtotalCostoArt);


if((sumtotalCostoArt >= 3500) && (sumtotalCostoArt < 4500)){
    alert("Tienes un 10% de descuento por tu compra!");
    let totalCompra1 = descuento1(sumtotalCostoArt);
    alert("El total de tu compra es de $"+ totalCompra1);
    alert("Gracias por elegirnos!");
}else if(sumtotalCostoArt => 4500){
    alert("Tienes un 20% de descuento por tu compra!");
    let totalCompra2 = descuento2(sumtotalCostoArt);
    alert("El total de tu compra es de $"+ totalCompra2);
    alert("Gracias por elegirnos!");
}else{
    alert("El total de tu compra es $" +sumtotalCostoArt);
    alert("Gracias por elegirnos!");
}

