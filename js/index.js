import { getPersonajes } from "./funciones.js";
import { mataPersonajes } from "./funciones.js";
import { personajes } from "./personajes.js";

// APUNTANDO A ELEMENTOS DEL DOM
const bttnCargarPersonajes = document.querySelector(".cargar-personajes");
const bttnMatarFamilia = document.querySelector(".matar-familia");
const buscarfamilia = document.querySelector(".familia");
const listaPersonajes = document.querySelector(".personajes");
const personajeDummy = document.querySelector(".personaje-dummy");
const mensajeError = document.querySelector(".mensaje");

const vaciarPersonajes = () => {
    for (const lista of listaPersonajes.querySelector(".personajes"))
    lista.remove();
}

bttnCargarPersonajes.addEventListener("click", async() => {
    const personajes = await getPersonajes();
    crearPersonajes(personajes);
});

bttnMatarFamilia.addEventListener("click", async() => {
    try {
        const muertos = await mataPersonajes(familia.value);
        crearPersonajes(muertos);
    } catch (error) {
        mensajeError.textContent = error.message;
});


