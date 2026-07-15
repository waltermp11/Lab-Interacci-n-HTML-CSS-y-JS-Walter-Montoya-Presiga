const botonDecrementar = document.getElementById("button-decrementar");

const botonIncrementar = document.getElementById("button-incrementar");

const contador = document.getElementById("contador");

let valorContador = 0;

function actualizarContador() {
  contador.textContent = valorContador;

  if (valorContador === 10) {
    contador.style.color="red";
  } else {
    contador.style.color="";
  }
}

botonDecrementar.addEventListener("click", function () {
  valorContador--;
  actualizarContador();
});

botonIncrementar.addEventListener("click", function () {
  valorContador++;
  actualizarContador();
});
