const games = [
  { nombre: "Tic-Tac-Toe", imagen: "multimedia/tic_tac_toe.png" },
  { nombre: "Ahorcado", imagen: "multimedia/ahorcado.png" },
  { nombre: "Piedra, Papel o Tijera", imagen: "multimedia/piedra_papel_tijera.png" },
  { nombre: "Memorama", imagen: "multimedia/memorama.png" }  
];

let indice = 0;
var sonido = new Audio();

function jugarJuego(){
  if(games[indice].nombre == "Tic-Tac-Toe"){
    sonido.src = "multimedia/click.mp3";
    sonido.play()
    setTimeout(() => {
      location.href='tic-tac-toe.html'
    }, 1400);
  }
  if(games[indice].nombre == "Ahorcado"){
    sonido.src = "multimedia/soga.mp3";
    sonido.play()
    setTimeout(() => {
      location.href='hanged.html'
    }, 1500);
  }
  if(games[indice].nombre == "Piedra, Papel o Tijera"){
    sonido.src = "multimedia/roca.mp3";
    sonido.play()
    setTimeout(() => {
      location.href='tic-tac-toe.html'
    }, 1200);
  }
  if(games[indice].nombre == "Memorama"){
    sonido.src = "multimedia/pop-memorama.mp3";
    sonido.play()
    setTimeout(() => {
      location.href='tic-tac-toe.html'
    }, 1300);
  }
}

let contenedorJuegos = document.querySelector(".contenedor-juegos");

var rebote = new Audio();
rebote.src = "multimedia/rebote.mp3";

function cambiarJuego(cambio){
  contenedorJuegos.classList.add("fade-out");
  indice += cambio;
  rebote.play();

  if (indice < 0) {
    indice = games.length - 1;
  } if (indice >= games.length) {
    indice = 0;
  }
  setTimeout(() => {
    actualizarJuego();
    contenedorJuegos.classList.add("fade-in")
  }, 500);

  setTimeout(() => {
    contenedorJuegos.classList.remove("fade-out")
    contenedorJuegos.classList.remove("fade-in")
  }, 1000);
}
  
function actualizarJuego(){
  const nombreJuego = document.getElementById("nombreJuego")
  const imagenJuego = document.getElementById("imagenJuego")
  
  nombreJuego.textContent = games[indice].nombre;
  imagenJuego.src = games[indice].imagen;
}
  
actualizarJuego();