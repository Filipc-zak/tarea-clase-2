
const form = document.querySelector("#form");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

        const nombre = nombreInput.value;
        const edad = Number(edadInput.value);

        mensaje.classList.remove("positivo", "negativo");

            if (edad >= 18) {
                mensaje.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
                mensaje.classList.add("positivo");
            } else {
                mensaje.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
                mensaje.classList.add("negativo");
            }
        });





         

