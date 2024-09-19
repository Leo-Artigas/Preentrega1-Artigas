class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
    };
    sumarIva() {
        this.precio = this.precio * 1.22
    };
};

let carritoLocal = [];

document.getElementById("boton1").addEventListener("click", compraJabon);
function compraJabon() {
    let jabon = new Producto("jabon", 1200, "jabon con cera de alta espuma");
    jabon.sumarIva();
    localStorage.setItem("productos", (JSON.stringify(jabon)));
    carritoLocal.push(JSON.parse(localStorage.getItem("productos")));
    alert("Compraste: Jabon");
};

document.getElementById("boton2").addEventListener("click", compraShampoo)
function compraShampoo() {
    let shampoo = new Producto("Shampoo", 1400, "Shampoo automotriz ultra brillo");
    shampoo.sumarIva();
    localStorage.setItem("productos", (JSON.stringify(shampoo)));
    carritoLocal.push(JSON.parse(localStorage.getItem("productos")));
    alert("Ingresaste: Shampoo");
};

document.getElementById("boton3").addEventListener("click", compraEspuma)
function compraEspuma() {
    let espuma = new Producto("Espuma Foam Lance", 2200, "Generador de espuma para Hidrolavadoras");
    espuma.sumarIva();
    localStorage.setItem("productos", (JSON.stringify(espuma)));
    carritoLocal.push(JSON.parse(localStorage.getItem("productos")));
    alert("Ingresaste: Espuma");
};



function mostrarCarrito() {
    let table = document.getElementById("tableCarrito");
    let totalIvaInc = 0;
    function precioTotal() {
        for (let i = 0; i < carritoLocal.length; i++) {
            totalIvaInc += carritoLocal[i].precio;
        };
    };
    precioTotal();

    let existeTabla = document.getElementById("tablaNew");
    if (existeTabla) {
        table.removeChild(existeTabla);
    };

    let html =
        '<div id="tablaNew"><p>' +
        `Has comprado ${carritoLocal.length} artículos, por el precio de $ ${totalIvaInc}</p>` +
        '<table>' +
        '     <thead>' +
        '          <tr>' +
        '              <th>Nombre</th>' +
        '              <th>Precio</th>' +
        '              <th>Descripción</th>' +
        '              <th>Eliminar</th>' +
        '          </tr>' +
        '     </thead>' +
        '     <tbody>';

    for (let i = 0; i < carritoLocal.length; i++) {
        html +=
            `<tr>
                        <td>${carritoLocal[i].nombre}</td>
                        <td>${carritoLocal[i].precio}</td>
                        <td>${carritoLocal[i].descripcion}</td>
                        <td><button class="eliminar btn btn-primary data-index="${i}">X</button></td>
                    </tr>`;
    };

    html += '</tbody></table></div>';
    table.innerHTML = html;

    let botonesEliminar = document.getElementsByClassName("eliminar");
    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", function () {
            let index = this.getAttribute('data-index');
            eliminarItem(index);
        });
    };

    function eliminarItem(index) {
        carritoLocal.splice(index, 1);
        mostrarCarrito();
    };
};

document.getElementById("carritoB").addEventListener("click", llamadoModal);

function llamadoModal() {
    document.getElementById("atenuar").classList.remove("ocultar");
    document.getElementById("atenuar").classList.add("mostrar");
    mostrarCarrito();
};

document.getElementById('myModal').addEventListener('hidden.bs.modal', atenuarOff);
function atenuarOff() {
    document.getElementById("atenuar").classList.remove("mostrar");
    document.getElementById("atenuar").classList.add("ocultar");
};

const isLoggedIn = localStorage.getItem("loggedIn")
if (isLoggedIn === 'true') {
    const buttons = document.querySelectorAll('.btn-add-to-cart');
    buttons.forEach(button => {
        button.disabled = false;
    });
};

document.getElementById('cierre').addEventListener('click', function () {
    localStorage.removeItem('loggedIn');
    if (carritoLocal) {
        localStorage.clear("productos");
    };
    window.location.href = 'login.html';
});


