

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
                    // eliminarAuto(index),
                        Swal.fire({
                            title: "Señado",
                            text: "Haz realizado la Seña",
                            icon: "success",
                        });
                }
            });
        };
    });
    }