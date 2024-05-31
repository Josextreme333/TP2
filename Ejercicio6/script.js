
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseInt(document.getElementById('altura').value);
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    let errores = [];

    if (!nombre || nombre.length > 50) errores.push('El nombre es obligatorio y debe tener máximo 50 caracteres.');
    if (!apellido || apellido.length > 50) errores.push('El apellido es obligatorio y debe tener máximo 50 caracteres.');
    if (edad < 18) errores.push('Debe ser mayor de edad.');
    if (altura < 0 || altura > 230) errores.push('La altura debe estar entre 0 y 230 cm.');
    if (!email.includes('@')) errores.push('El correo electrónico debe ser válido.');

    if (errores.length > 0) {
        mensaje.innerHTML = errores.join('<br>');
        mensaje.className = 'error';
    } else {
        mensaje.innerHTML = 'Formulario enviado correctamente.';
        mensaje.className = 'success';
    }
}
