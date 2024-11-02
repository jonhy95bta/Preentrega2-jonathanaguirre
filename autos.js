
let container_card = document.querySelector("#contenedor");
let loguinsesion = document.querySelector("#encabezado");
let agregarauto = document.querySelector("#agregar");


let administrador = localStorage.getItem("usuario");


class Auto {
    constructor(marca, modelo, precio, año, kms, combustible, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.año = año;
        this.kms = kms;
        this.combustible = combustible;
        this.imagen = imagen;
    }
}


let autos = JSON.parse(localStorage.getItem('autos')) || [
    new Auto("Ford", "Fiesta", 11000, 2020, 120000, "Nafta", "../images/ford_fiesta.jpg"),
    new Auto("Volkswagen", "Polo", 14000, 2024, 120000, "Nafta", "../images/vw_polo.jpg"),
    new Auto("Renault", "Clio", 8000, 2009, 120000, "Nafta", "../images/renault_clio.jpg"),
    new Auto("Chevrolet", "Onix", 14000, 2019, 120000, "Nafta", "../images/chevrolet_onix.jpg")
];


let templateInicio = document.getElementById("templateInicio");
let templateSesionAdmin = document.getElementById("templateSesionAdmin");
let templateAuto = document.getElementById("templateAuto");
let templateAgregarAuto = document.getElementById("templateAgregarAuto");


if (administrador === "Administrador") {
    let sesion = templateSesionAdmin.content.cloneNode(true);
    loguinsesion.appendChild(sesion);

    let agregar = templateAgregarAuto.content.cloneNode(true);
    agregarauto.appendChild(agregar);
} else {
    let inicio = templateInicio.content.cloneNode(true);
    loguinsesion.appendChild(inicio);
}


function cerrarsesion() {
    localStorage.removeItem("usuario");
    window.location = "./autos.html";
}


function Iniciarsesion() {
    window.location = "../index.html";
}


function guardarAutosEnLocalStorage() {
    localStorage.setItem('autos', JSON.stringify(autos));
}


function renderizarAutos() {
    container_card.innerHTML = "";
    autos.forEach((auto, index) => {
        let clon = templateAuto.content.cloneNode(true);

        clon.querySelector('img').src = auto.imagen;
        clon.querySelector('img').alt = `Imagen de ${auto.marca} ${auto.modelo}`;
        clon.querySelector('h5').innerText = auto.marca;
        clon.querySelectorAll('p')[0].innerText = "Precio: $" + auto.precio;
        clon.querySelectorAll('p')[1].innerText = "Año: " + auto.año;
        clon.querySelectorAll('p')[2].innerText = "Modelo: " + auto.modelo;
        clon.querySelectorAll('p')[3].innerText = "Kms: " + auto.kms;
        clon.querySelectorAll('p')[4].innerText = "Combustible: " + auto.combustible;

        let btnSeña = clon.querySelector("#Seña");
        btnSeña.onclick = function () {
            Swal.fire({
                title: "Desea Señar?",
                text: "Realizar una seña es un compromiso, no comprometa al personal",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Señar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarAuto(index),
                        Swal.fire({
                            title: "Señado",
                            text: "Haz realizado la Seña",
                            icon: "success"
                        });
                }
            });
        };

        if (administrador === "Administrador") {
            let btnEliminar = clon.querySelector(".btn-eliminar");
            btnEliminar.style.display = "inline-block";
            btnEliminar.addEventListener("click", () => eliminarAuto(index));
        } else {

            clon.querySelector(".btn-eliminar").style.display = "none";
        }

        container_card.appendChild(clon);
    });
}

renderizarAutos();

function eliminarAuto(index) {
    if (administrador === "Administrador") {
        autos.splice(index, 1);
        guardarAutosEnLocalStorage();
        renderizarAutos();
    }
}


document.getElementById('autoForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let precio = document.getElementById('precio').value;
    let año = document.getElementById('año').value;
    let kms = document.getElementById('kms').value;
    let combustible = document.getElementById('combustible').value;
    let imagen = document.getElementById('imagen').value;

    let nuevoAuto = new Auto(marca, modelo, precio, año, kms, combustible, imagen);

    autos.push(nuevoAuto);
    guardarAutosEnLocalStorage();

    renderizarAutos();

    document.getElementById('autoForm').reset();
});


