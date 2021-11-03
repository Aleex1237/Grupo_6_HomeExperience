console.log("conexion exitosa");
window.addEventListener("load",()=>{ 
    let experiencia = $("pd-experiencia");
    let contenido = $("pd-contenido");
    let btnExperiencia = $("btn-experiencia");
    let btnContenido = $("btn-contenido");
    experiencia.style.display = "inline-block";
    contenido.style.display = "none";
    btnExperiencia.style.color = "white"

    btnExperiencia.onclick = function (e) {
        e.preventDefault();
        experiencia.style.display = 'inline-block';
        contenido.style.display = 'none'    
        btnExperiencia.style.color ="white";
        btnContenido.style.color ="var(--color-gris)";
    }

    btnContenido.onclick = function (e) {
        e.preventDefault();
        contenido.style.display = 'inline-block';
        experiencia.style.display = 'none'    
        btnContenido.style.color ="white";
        btnExperiencia.style.color ="var(--color-gris)";
    }

})