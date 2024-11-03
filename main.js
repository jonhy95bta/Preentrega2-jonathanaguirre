function loguin() {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    if (usuario == "jonathan9520" && pass == "2024" || usuario == "admin" && pass == "1234") {

        localStorage.setItem ("usuario", "Administrador")
        window.location = "./page/autos.html";
        
    }
    else {
        alert("Datos incorrectos, vuelva a intentarlo")
    }

}


window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        loguin();
    }
})
let boton = document.getElementById("boton").onclick = function () {
    window.location = "./page/autos.html";
}



