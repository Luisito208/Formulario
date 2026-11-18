document.getElementById("registro").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    let soloLetras = /^[a-zA-Z ]+$/;
    if(!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras");
        return;
    }

    let segura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!segura.test(password)) {
        alert("La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial");
        return;
    }

    mensaje.textContent = "Registro exitoso";
    mensaje.style.color = "green";
});