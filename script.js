const usuariosValidos = {
    "ClienteUCV": { clave: "Central_123", rol: "cliente", nombre: "Cliente UCV" },
    "caja_01": { clave: "Cajero#123", rol: "cajero", nombre: "Operador de Caja" },
    "adminRoot": { clave: "cafetinAdmin", rol: "admin", nombre: "Administrador" }
};

function validarLogin() {
    const user = document.getElementById('usuario').value.trim();
    const pass = document.getElementById('password').value;
    const rolSeleccionado = document.getElementById('rol').value;
    const mensaje = document.getElementById('mensaje-error');

    mensaje.style.opacity = "0";

    if (!user || !pass || !rolSeleccionado) {
        mensaje.textContent = "✨ Por favor, completa todos los campos.";
        mensaje.style.opacity = "1";
        return;
    }

    const infoUsuario = usuariosValidos[user];

    if (infoUsuario && infoUsuario.clave === pass) {
        if (infoUsuario.rol === rolSeleccionado) {
            localStorage.setItem("usuarioLogueado", JSON.stringify(infoUsuario));

// Localizamos la caja de login
const loginBox = document.querySelector(".login-box");

// Detenemos la animación y enderezamos el panel por completo
loginBox.style.animation = "none"; 
loginBox.style.transform = "none"; 

// Insertamos el contenido con tipografía elegante y grande
loginBox.innerHTML = `
    <div style="animation: fadeInSoft 0.8s ease; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <h2 style="
            color: var(--verde-oliva); 
            font-size: 2.8rem; 
            font-family: 'Georgia', serif; 
            font-style: italic;
            margin-bottom: 5px; 
            letter-spacing: -1px;
            font-weight: normal;
        ">
            ¡Bienvenido!
        </h2>
        <div style="
            width: 40px; 
            height: 2px; 
            background: var(--terracota); 
            margin-bottom: 15px;
            opacity: 0.6;
        "></div>
        <p style="
            color: var(--marron-oscuro); 
            font-size: 1.4rem; 
            font-weight: 600; 
            text-transform: uppercase;
            letter-spacing: 2px;
        ">
            ${infoUsuario.nombre}
        </p>
    </div>`;
            
            setTimeout(() => {
                if (infoUsuario.rol === "cliente") window.location.href = "cliente.html";
                else if (infoUsuario.rol === "cajero") window.location.href = "caja.html";
                else window.location.href = "admin.html";
            }, 1800);
        } else {
            mensaje.textContent = "🍃 El rol seleccionado no coincide.";
            mensaje.style.opacity = "1";
        }
    } else {
        mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
        mensaje.style.opacity = "1";
    }
}