
let compra = prompt("Quieres comprar productos?");
procesoCompra();


function procesoCompra() {
    if (compra === "si") {
        let eleccion = mostrarMenu();
        let eleccionInt = 0;

        if (eleccion !== undefined && eleccion !== null && eleccion.length >= 0) {
            eleccionInt = parseInt(eleccion);
            
            while (eleccion) {
                if (eleccionInt === 1) {
                    alert("Ingresaste: Jabon");
                    eleccion = mostrarMenu();
                } else if (eleccionInt === 2) {
                    alert("Ingresaste: Shampoo");
                    eleccion = mostrarMenu();
                } else if (eleccionInt === 3) {
                    alert("Ingresaste: Espuma");
                    eleccion = mostrarMenu();
                } else if (eleccionInt === 0) {
                    alert("Has terminado la compra.");
                    break;
                }
                else {
                    alert("La opción seleccionada no es correcta. Intente nuevamente.");
                    eleccion = mostrarMenu();
                }
                eleccionInt = parseInt(eleccion);
            }

        }
        else {
            alert("Gracias por preferirnos");
        }

    } else {
        alert("Gracias por preferirnos");
    }
}

function mostrarMenu() {
    return prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n 0: Terminar compra");
}



   

