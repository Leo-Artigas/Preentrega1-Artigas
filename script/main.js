  // Manejar el formulario de login
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir el envío del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí podrías agregar validaciones más complejas
    if (username && password) {
        // Guardar el estado de sesión en localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redirigir al index.html
        window.location.href = "index.html";
        };
    });


