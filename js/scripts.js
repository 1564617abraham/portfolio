//funcion que muestra el menu resposive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

function seleccionar() {
    let opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //eliminamos menú una vez seleccionado en el modo responsive

    let x = document.getElementById("nav");
    x.className = "";

}


//detección de scrolling para barras de habilidades

window.onscroll = function() {
    efectoHabilidades()
};

//aplica la funion de barra 
function efectoHabilidades() {
    let skills = document.getElementById("skill");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("pt").classList.add("barra-progreso3");
        document.getElementById("mdb").classList.add("barra-progreso4");
    }
}
