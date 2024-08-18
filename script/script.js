
/*let compra = prompt("Quieres comprar productos?");
if (compra === "si"){
    let eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
        while (eleccion)
            if (eleccion === null){
        alert("No se ha ingresado ningún dato.");
        break;
        } else if (eleccion === "1"){
        alert("Ingresaste: Jabon");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
    } else if (eleccion === "2"){
        alert("Ingresaste: Shampoo");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
    } else if (eleccion === "3"){
        alert("Ingresaste: Espuma");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
    } else if (eleccion.toLowerCase() === "esc"){
        alert("Has terminado la compra.");
        break;
}   
    
} else {
    alert ("Gracias por preferirnos");
}
*/
let compra = prompt("Quieres comprar productos?");
let arranque = (procesoCompra());


function procesoCompra() {
    if (compra === "si") {
        let eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n esc: Terminar compra");
        if (eleccion === undefined || eleccion === null || eleccion.length === 0) {
            alert("No se ha ingresado ningún dato.");
        }
        while (eleccion)
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

    } else {
        alert("Gracias por preferirnos");
    }

}



   

// Bucle para pedir datos hasta que se ingrese "esc"
/*while (compra === "si") {
    // Solicitar entrada al usuario
    let eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
    
    if (eleccion === null) {
        alert("No se ha ingresado ningún dato.");
        break;
    } else if (eleccion === "1"){
        alert("Ingresaste: Jabon");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
    } else if (eleccion === "2"){
        alert("Ingresaste: Shampoo");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
    } else if (eleccion === "3"){
        alert("Ingresaste: Espuma");
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
    } else if (eleccion.toLowerCase() === "esc") {
        alert("Has terminado la compra.");
        break;
}   
}
alert ("los pructos ingresados son"+ eleccion);
*/
    

   
/*if (compra === "si"){
    let eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
    while (eleccion != "esc"){
        eleccion = prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma \n esc:terminar compra");
        eleccion++;  
    }
    
}else if (eleccion === "esc") {
    alert =("Los productos elegidos son" +eleccion);
}else{
    compra = prompt("Quieres comprar productos?");
    
}

/*switch (prompt("Elige el producto que desees \n 1: Jabon \n 2:Shampoo \n 3:Espuma"), alert("1,2")){
    case jabon: jabon;
    break;

    case shampoo: shampoo;
    break;

    case espuma: espuma;
    default:
        alert("no has elegido ningun producto")

}
*/

 // Inicializar una variable para almacenar la entrada del usuario
 /*let userInput;

 // Bucle para pedir datos hasta que se ingrese "esc"
 while (true) {
     // Solicitar entrada al usuario
     userInput = prompt("Ingresa un dato (escribe 'esc' para salir):");

     // Comprobar si el usuario ha ingresado "esc"
     if (userInput === null) {
         // El usuario ha cancelado el prompt
         alert("No se ha ingresado ningún dato.");
         break;
     } else if (userInput.toLowerCase() === 'esc') {
         // El usuario ha ingresado "esc"
         alert("Has salido del bucle.");
         break;
     } else {
         // Procesar el dato ingresado
         alert(`Ingresaste: ${userInput}`);
     }
 }
 */
