console.log("conexion exitosa");
window.addEventListener("load",()=>{ 
    $("pd-experiencia").style.display = "inline-block";
    $("pd-contenido").style.display = "none";
    $("btn-experiencia").style.color = "white"

    $("btn-contenido").addEventListener("mouseover",()=> {
        $("pd-experiencia").style.display = "none";
        $("pd-contenido").style.display = "inline-block";
        $("btn-contenido").style.color = "white";
        $("btn-experiencia").style.color = "var(--color-gris)";

    });
    $("btn-contenido").addEventListener("mouseout",()=> {
        $("pd-contenido").style.display = "none";
        $("pd-experiencia").style.display = "inline-block";
        $("btn-experiencia").style.color = "white";
        $("btn-contenido").style.color = "var(--color-gris)";
    });
})