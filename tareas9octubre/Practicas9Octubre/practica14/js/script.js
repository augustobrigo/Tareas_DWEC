window.onload=inicio;

function inicio(){

    let imagenes = document.querySelectorAll("img");
    console.log(imagenes);

    let temporizador = setInterval(tiempo,500);

    function tiempo(){
        
        imagenes.forEach(accion);

        function accion(item,indice){
            let numR = Math.ceil(Math.random()*3);
            item.className="borde"+numR;
        }
    
    }

   
  
}