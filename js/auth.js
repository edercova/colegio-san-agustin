document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            const email = document.getElementById('email').value;
            const pass = document.getElementById('password').value;

            // Validación de prueba para la directiva
            if (email === "director@colegio.com" && pass === "agustin2024") {
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o clave incorrecta. Por favor use las credenciales de prueba que aparecen abajo.");
            }
        });
    }
});
