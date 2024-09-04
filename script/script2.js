class Producto {
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
    };
        sumarIva() {
            this.precio = this.precio * 1.22 
        }; 
};

let carritoCompra =[];
document.getElementById("compra").addEventListener("click", procesoCompra);
function procesoCompra () {
        let eleccion = mostrarMenu();
        let eleccionInt = 0;
        if (eleccion !== undefined && eleccion !== null && eleccion.length >= 0) {
            eleccionInt = parseInt(eleccion);
            
            while (eleccion) {
                if (eleccionInt === 1) {
                    carritoCompra.push(jabon = new Producto ("jabon", 1200, "jabon con cera de alta espuma",));
                    jabon.sumarIva();
                    alert("Ingresaste: Jabon");
                    eleccion = mostrarMenu();
                } else if (eleccionInt === 2) {
                    alert("Ingresaste: Shampoo");
                    carritoCompra.push(shampoo = new Producto ("Shampoo", 1400, "Shampoo automotriz ultra brillo"));
                    shampoo.sumarIva();
                    eleccion = mostrarMenu();
                } else if (eleccionInt === 3) {
                    alert("Ingresaste: Espuma");
                    carritoCompra.push(espuma = new Producto ("Foam Lance Espuma", 2200, "Generador de espuma para Hidrolavadoras"))
                    espuma.sumarIva();
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
        };
    };

function mostrarMenu () {
    return prompt("Elige el producto que desees \n 1: Jabon \n 2: Shampoo \n 3: Espuma \n 0: Terminar compra");
};

document.getElementById("mostrarCarrito").addEventListener("click", mostrarCarrito);

function mostrarCarrito () {   
    let table = document.getElementById("tableCarrito");
    let html = 
        '<table>'
        + '     <thead>'
        +'          <tr>'
        +'              <th>Nombre</th>'
        +'              <th>Precio</th>'
        +'              <th>Descripción</th>'
        + '         </tr>'
        + '     </thead>'
        + '     <tbody></tbody>';

    for (let i = 0; i < carritoCompra.length; i++) {

        html += `<tr><td>${carritoCompra[i].nombre}</td><td>${carritoCompra[i].precio}</td><td>${carritoCompra[i].descripcion}</td></tr>`;
    };
    
    html += '</tbody></table>';
    table.innerHTML += html;

    let totalIvaInc = 0;
    function precioTotal () {
        for (let i=0; i<carritoCompra.length; i++){
        totalIvaInc += (carritoCompra[i].precio);
    };
    
    };
    precioTotal();
   
    let newContent = document.createTextNode(`Has comprado ${carritoCompra.length} articulos, por el precio de $ ${totalIvaInc}`);
    table.appendChild(newContent);
};

