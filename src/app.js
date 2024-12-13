/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo = ["♥", "♣", "♠", "♦"];
let numerosCartas = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let BotonGenerador = document.getElementById("generarCarta");
let carta = document.getElementById("carta");

function generarCartaAleatoria() {
  let paloAleatorio = Math.floor(Math.random() * palo.length);
  let numeroAleatorio = Math.floor(Math.random() * numerosCartas.length);

  carta.innerHTML = `
      <div class="numeros">${numerosCartas[numeroAleatorio]}</div>
      <div class="palo-der ${palo[paloAleatorio]}">${palo[paloAleatorio]}</div>
      <div class="palo-izq ${palo[paloAleatorio]}">${palo[paloAleatorio]}</div>
    `;
}

BotonGenerador.addEventListener("click", generarCartaAleatoria);

window.onload = function() {
  generarCartaAleatoria();
};
