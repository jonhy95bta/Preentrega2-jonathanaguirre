

let container_card = document.querySelector("#contenedor");

let administrador = localStorage.getItem("usuario");

let loguinsesion = document.querySelector("#encabezado");



// let agregarauto = document.querySelector("#agregar")


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

let autos = [
    new Auto("Ford", "Fiesta", 11000, 2020, 120000, "Nafta", "../images/ford_fiesta.jpg"),
    new Auto("Volkswagen", "Polo", 14000, 2024, 120000, "Nafta", "../images/vw_polo.jpg"),
    new Auto("Renault", "Clio", 8000, 2009, 120000, "Nafta", "../images/renault_clio.jpg"),
    new Auto("Chevrolet", "Onix", 14000, 2019, 120000, "Nafta", "../images/chevrolet_onix.jpg")
];

if (administrador === "Administrador") {

    let sesion = document.querySelectorAll("template")[1].content.cloneNode(true);


    loguinsesion.appendChild(sesion);


    // let agregar = document.querySelectorAll("template")[2].content.cloneNode(true);

    // agregarauto.appendChild (agregar);

} else {
    let inicio = document.querySelectorAll("template")[0].content.cloneNode(true);
    loguinsesion.appendChild(inicio)
}


autos.forEach((auto) => {
    let clon = document.querySelectorAll('template')[2].content.cloneNode(true);


    clon.querySelector('img').src = auto.imagen;
    clon.querySelector('img').alt = `Imagen de ${auto.marca} ${auto.modelo}`;


    clon.querySelector('h5').innerText = auto.marca;
    clon.querySelectorAll('p')[0].innerText = "Precio: " + auto.precio;
    clon.querySelectorAll('p')[1].innerText = "Año: " + auto.año;
    clon.querySelectorAll('p')[2].innerText = "Modelo: " + auto.modelo;
    clon.querySelectorAll('p')[3].innerText = "Kms: " + auto.kms;
    clon.querySelectorAll('p')[4].innerText = "Combustible: " + auto.combustible;

    container_card.appendChild(clon);


});


function cerrarsesion() {
    localStorage.removeItem("usuario");
    window.location = "./autos.html"
}
function Iniciarsesion() {
    
    window.location = "../index.html"
}

// document.getElementById('autoForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let marca = document.getElementById('marca').value;
//     let modelo = document.getElementById('modelo').value;
//     let precio = document.getElementById('precio').value;
//     let año = document.getElementById('año').value;
//     let kms = document.getElementById('kms').value;
//     let combustible = document.getElementById('combustible').value;
//     let imagen = document.getElementById('imagen').value;

//     let clon = document.querySelectorAll('template')[1].content.cloneNode(true);

//     clon.querySelector('img').src = imagen;
//     clon.querySelector('img').alt = `Imagen de ${marca} ${modelo}`;


//     clon.querySelector('h5').innerText = marca;
//     clon.querySelectorAll('p')[0].innerText = "Precio: " + precio;
//     clon.querySelectorAll('p')[1].innerText = "Año: " + año;
//     clon.querySelectorAll('p')[2].innerText = "Modelo: " + modelo;
//     clon.querySelectorAll('p')[3].innerText = "Kms: " + kms;
//     clon.querySelectorAll('p')[4].innerText = "Combustible: " + combustible;

//     container_card.appendChild(clon);

    
//     document.getElementById('autoForm').reset();
// });




