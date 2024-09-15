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

document.getElementById("boton1").addEventListener("click", compraJabon);

function compraJabon () {
    carritoCompra.push(jabon = new Producto ("jabon", 1200, "jabon con cera de alta espuma",));
    jabon.sumarIva();
    alert("Compraste: Jabon");
    };

document.getElementById("boton2").addEventListener("click", compraShampoo)

function compraShampoo () {
    carritoCompra.push(shampoo = new Producto ("Shampoo", 1400, "Shampoo automotriz ultra brillo"));
    shampoo.sumarIva(); 
    alert("Ingresaste: Shampoo");
    };

document.getElementById("boton3").addEventListener("click", compraEspuma)

function compraEspuma () {
    carritoCompra.push(espuma = new Producto ("Foam LaEspuma", 2200, "Generador de espuma pHidrolavadoras"))
    espuma.sumarIva();
    alert("Ingresaste: Espuma");
    };

function mostrarCarrito () {   
    let table = document.getElementById("tableCarrito");
    let totalIvaInc = 0;
    function precioTotal () {
        for (let i=0; i<carritoCompra.length; i++){
        totalIvaInc += (carritoCompra[i].precio);
        };
    
        };
    precioTotal();
    let html = 
        '<div id="tableNew"><p>'
        + `Has comprado ${carritoCompra.length} articulos, por el precio de $ ${totalIvaInc}</p>`
        + '<table >'
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
    
    html += '</tbody></table></div>';
    table.innerHTML += html;

    if (table.hasChildNodes()){
        table.removeChild(document.getElementById("tableNew"));
        };
    table.innerHTML=html;
    };
////////////////////////////////////
document.getElementById("carritoB").addEventListener("click",llamadoModal);

function llamadoModal () {
    document.getElementById("atenuar").classList.remove("ocultar");
    document.getElementById("atenuar").classList.add("mostrar");
    mostrarCarrito();
    };

document.getElementById('myModal').addEventListener('hidden.bs.modal', atenuarOff);
function atenuarOff () {
    document.getElementById("atenuar").classList.remove("mostrar");
    document.getElementById("atenuar").classList.add("ocultar");
    };

