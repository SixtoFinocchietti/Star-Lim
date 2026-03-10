//Dark mode
/*const toggle = document.getElementById("dark-mode-toggle");
 
if(localStorage.getItem("modoOscuro") === "activo"){
    document.body.classList.add("dark-mode");
    toggle.src = "imagenes/sol.png";
}

toggle.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modoOscuro","activo");
        toggle.src = "imagenes/sol.png";
    } else {
        localStorage.setItem("modoOscuro","inactivo");
        toggle.src = "imagenes/luna.png";
    }
});*/

const toggle = document.getElementById("dark-mode-toggle");

// detectar preferencia guardada
let modoGuardado = localStorage.getItem("modoOscuro");

// si el usuario ya eligió
if (modoGuardado === "activo") {
    document.body.classList.add("dark-mode");
    toggle.src = "imagenes/sol.png";
} 
else if (modoGuardado === "inactivo") {
    document.body.classList.remove("dark-mode");
    toggle.src = "imagenes/luna.png";
} 
// si nunca eligió nada → usar preferencia del sistema
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
    toggle.src = "imagenes/sol.png";
}

// botón
toggle.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modoOscuro","activo");
        toggle.src = "imagenes/sol.png";
    } else {
        localStorage.setItem("modoOscuro","inactivo");
        toggle.src = "imagenes/luna.png";
    }

});

//Cargar más:
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i<currentItem + 4; i++) {
        if(boxes[i]){
            boxes[i].style.display = 'inline-block';
}
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }
}

//carrito

const carrito = document.getElementById('carrito');
const elementos = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventoListeners();

function cargarEventoListeners() {
    elementos.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }

}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento)
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    
        <td>
            <img src="${elemento.imagen}" width=100%>
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>

    `;

    lista.appendChild(row);   
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

