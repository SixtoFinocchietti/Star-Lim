// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    const lenis = new Lenis({
        duration: 1.2,      // Duración del scroll (más alto = más lento/suave)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efecto de inercia
        smoothWheel: true   // Activa el scroll suave con la rueda del ratón
    });

    // Esta función es necesaria para que Lenis se actualice en cada frame
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // OPCIONAL: Si quieres que tu código de ocultar imágenes funcione con Lenis
    lenis.on('scroll', (e) => {
        const scrollActual = window.innerHeight + window.scrollY;
        const alturaTotal = document.documentElement.scrollHeight;

        if (scrollActual >= alturaTotal - 50) {
            document.body.classList.add('en-el-final');
        } else {
            document.body.classList.remove('en-el-final');
        }
    });
});

window.onload = () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    console.log("Lenis funcionando correctamente");
  } else {
    console.error("Lenis no se cargó. Revisa la conexión o el enlace del script.");
  }
};
