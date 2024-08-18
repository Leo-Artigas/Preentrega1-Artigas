
let compra = prompt("Quieres comprar productos?");
let arranque = (procesoCompra());


function procesoCompra() {
    if (compra === "si") {
        let eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
        if (eleccion === undefined || eleccion === null || eleccion.length === 0) {
            alert("No se ha ingresado ningún dato.");
        }
        while (eleccion) {
            /*if (eleccion === null) {
                alert("No se ha ingresado ningún dato.");
                break;*/
            if (eleccion === "1") {
                alert("Ingresaste: Jabon");
                eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
            } else if (eleccion === "2") {
                alert("Ingresaste: Shampoo");
                eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
            } else if (eleccion === "3") {
                alert("Ingresaste: Espuma");
                eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
            } else if (eleccion.toLowerCase() === "esc") {
                alert("Has terminado la compra.");
                break;
            }
        }
    } else {
        alert("Gracias por preferirnos");
    }
}



   

