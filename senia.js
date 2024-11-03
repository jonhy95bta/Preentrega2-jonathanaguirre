        // Función para cargar el auto señalado desde localStorage
        function cargarAutoSeñado() {
            const autoSeñado = JSON.parse(localStorage.getItem('autoSeñado'));
            const contenedorSeña = document.getElementById("contenedorSeña");

            if (autoSeñado) {
                const template = document.getElementById("templateAutoSeña");
                const clon = template.content.cloneNode(true);

                // Llenar los datos del auto
                clon.querySelector('img').src = autoSeñado.imagen;
                clon.querySelector('img').alt = `Imagen de ${autoSeñado.marca} ${autoSeñado.modelo}`;
                clon.querySelector('.card-title').innerText = `${autoSeñado.marca} ${autoSeñado.modelo}`;
                clon.querySelectorAll('.card-text')[0].innerText = "Precio: $" + autoSeñado.precio;
                clon.querySelectorAll('.card-text')[1].innerText = "Año: " + autoSeñado.año;
                clon.querySelectorAll('.card-text')[2].innerText = "Modelo: " + autoSeñado.modelo;
                clon.querySelectorAll('.card-text')[3].innerText = "Kms: " + autoSeñado.kms;
                clon.querySelectorAll('.card-text')[4].innerText = "Combustible: " + autoSeñado.combustible;

                // Manejar la confirmación de la seña
                clon.querySelector('#confirmarSeña').addEventListener('click', () => {
                    Swal.fire({
                        title: 'Seña Confirmada',
                        text: 'Gracias por confirmar la seña del auto.',
                        icon: 'success'
                    }).then(() => {
                        // Aquí eliminar el auto de localStorage y del arreglo
                        eliminarAuto(autoSeñado);
                        window.location = "./autos.html"; // Redirigir a la página de autos
                    });
                });

                contenedorSeña.appendChild(clon); // Agregar el auto al contenedor
            } else {
                contenedorSeña.innerHTML = "<p>No hay auto señalado.</p>"; // Mensaje si no hay auto
            }
        }

        // Función para eliminar el auto señalado
        function eliminarAuto(autoSeñado) {
            let autos = JSON.parse(localStorage.getItem('autos')) || [];
            // Filtrar el arreglo para eliminar el auto señalado
            autos = autos.filter(auto => auto.modelo !== autoSeñado.modelo || auto.marca !== autoSeñado.marca);
            // Guardar el nuevo arreglo en localStorage
            localStorage.setItem('autos', JSON.stringify(autos));
            // Limpiar el auto señalado
            localStorage.removeItem('autoSeñado');
        }

        // Llamar a la función al cargar la página
        cargarAutoSeñado();