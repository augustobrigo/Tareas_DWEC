window.onload = inicio;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let vectorCajas = [];

function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnJugar = document.createElement("button");
  btnJugar.textContent = "SORTEO";
  cuerpo.appendChild(btnJugar);
  btnJugar.onclick = jugar;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);camacho
    let cont = 0;
    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;
      vectorCajas.push(caja);

      function marcar() {
        if (cont == 6) {
          vectorCajas.forEach(accion);

          function accion(item, index) {
            if (item.style.backgroundColor == "red") {
              console.log(item.textContent);
              //añadir al vector de seleccionado
            }
          }
        } else {
          caja.style.backgroundColor = "red";
          cont++;
        }
      }
    }
  }
}

function jugar() {
  //btnJugar.disabled = true;
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.round(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    vectorN.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorSorteo.appendChild(box);
  }

  vectorCajas.forEach(recorrido);
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "blue";
  contenedorSorteo.appendChild(resultado);

  function recorrido(item, index) {
    let cont = 0;
    vectorN.forEach(accion2);

    function accion2(item2, index2) {
      console.log("iiiii");
      if (item.textContent == item2.textContent) {
        console.log(item.textContent);
        cont++;
        alert(cont);
      }
      
    //  resultado.textContent = cont;
    }
    
  }
}
