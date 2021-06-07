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


