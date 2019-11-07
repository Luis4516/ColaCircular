import Procesador from "./Procesador.js";

let atencion = new Procesador();

document.querySelector("#btn").addEventListener("click", () =>{
    atencion.procesosR();
});