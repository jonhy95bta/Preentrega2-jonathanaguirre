


class Auto {
    constructor(marca, modelo, precio, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.año = año;
    }
}

let autos = [
    new Auto("ford", "fiesta", 11000, 2020),
    new Auto("vw", "polo", 14000, 2024),
    new Auto("renault", "clio", 8000, 2009),
    new Auto("chevrolet", "onix", 14000, 2019)
];

// alert("Bienvenidos, a continuación se mostrará el catálogo de autos");

// for (const auto of autos) {
//     console.log("------------------------");
//     console.log("Marca: " + auto.marca);
//     console.log("Modelo: " + auto.modelo);
//     console.log("Precio: " + auto.precio + "$");
//     console.log("Año: " + auto.año);
// }
// let numero = Number(prompt("Desea comprar un auto ? Ingrese 1 para Sí o 2 para No"))

// while (isNaN(numero) || numero > 2 || numero < 1) {
//     alert("Ingrese un número válido");
//     numero = Number(prompt("Ingrese 1 para Sí o 2 para No"));
// }

// if (numero == 1) {

//     let mostrar = prompt("Ingrese el modelo del auto que le interesa comprar");
//     let resultado = autos.find((elm) => elm.modelo === mostrar);
//     console.log(resultado);
//         if (resultado) {
//     let continuar = confirm("¿Confirma comprar un " + resultado.marca + " " + resultado.modelo + " a un valor de " + resultado.precio + "u$s");
//     if (continuar) {
//         alert("Gracias por comprar un " + resultado.marca + " " + resultado.modelo);
//         idvendido = mostrar;
//         const autosActualizados = autos.filter(autos => autos.modelo !== idvendido);
//         console.log(autosActualizados)
//         }
//     } else {
//         alert("Lo siento, no tenemos ese modelo disponible.");
//     }

// } if (numero == 2) {
//     alert("Muchas gracias vuelva pronto")

// }








function loguin() {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    if (usuario == "jonathan9520" && pass == "2024" || usuario == "admin" && pass == "1234" ) {
        window.location = "./autos.html"
    }
    else{
        alert("Datos incorrectos, vuelva a intentarlo")
    }
}

function pedir_numero() {
    let numero = Number(prompt("¿Desea comprar un auto? Ingrese 1 para Sí o 2 para No"));
    while (isNaN(numero) || numero > 2 || numero < 1) {
        alert("Ingrese un número válido");
        numero = Number(prompt("Ingrese 1 para Sí o 2 para No"));
    }
    return numero;
}

window.addEventListener("keydown",(e)=>{
    if (e.keyCode===13) {
        loguin();
    }
})