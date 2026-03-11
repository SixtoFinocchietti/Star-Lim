//--------------------------Dark mode:

const toggle = document.getElementById("dark-mode-toggle");

// detectar preferencia guardada
let modoGuardado = localStorage.getItem("modoOscuro");

// si el usuario ya eligió
if (modoGuardado === "activo") {
    document.body.classList.add("dark-mode");
    toggle.src = "imagenesIndex/sol.png";
} 
else if (modoGuardado === "inactivo") {
    document.body.classList.remove("dark-mode");
    toggle.src = "imagenesIndex/luna.png";
} 
// si nunca eligió nada → usar preferencia del sistema
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
    toggle.src = "imagenesIndex/sol.png";
}

// botón
toggle.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modoOscuro","activo");
        toggle.src = "imagenesIndex/sol.png";
    } else {
        localStorage.setItem("modoOscuro","inactivo");
        toggle.src = "imagenesIndex/luna.png";
    }

});



//--------------------------Scroll reveal:

