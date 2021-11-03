window.addEventListener("load", () => {
  let userLogued = $("userLogued");

  $("cartHeader").addEventListener("click", (event) => {
    if (!userLogued) {
      event.preventDefault();
      Swal.fire({
        title: "¡Debe iniciar sesión para acceder al carrito de compras!",
        html: `<p class="text-white" >Inicie sesión para poder ingresar </p>`,
        color: "white",
        background: "#040F16",
        backdrop: "rgba(4, 15, 22, 0.6)",
        confirmButtonText:
          "<a href='usuarios/iniciar-sesion'>Iniciar Sesión</a>",
        customClass: {
          popup: "popup-class",
          title: "content-class",
          confirmButton: "confirmButton",
          cancelButton: "cancelButton",
        },
      });
    } else {
      event.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "Esta pagina está en desarrollo aún :(",
        color: "white",
        background: "#040F16",
        backdrop: "rgba(4, 15, 22, 0.6)",
        confirmButtonText: "Volver",
        customClass: {
          popup: "popup-class",
          title: "content-class",
          confirmButton: "confirmButton",
          cancelButton: "cancelButton",
        },
      });
    }
  });

  $("barButton").addEventListener("click", (event) => {
    if (!userLogued) {
      event.preventDefault();
      Swal.fire({
        title: "¡Debe ser mayor de 18 años para ingresar a la sección bar!",
        html: `<p class="text-white" >Inicie sesión para verificar su edad </p>`,
        color: "white",
        background: "#040F16",
        backdrop: "rgba(4, 15, 22, 0.6)",
        confirmButtonText:
          "<a href='usuarios/iniciar-sesion'>Iniciar Sesión</a>",
        customClass: {
          popup: "popup-class",
          title: "content-class",
          confirmButton: "confirmButton",
          cancelButton: "cancelButton",
        },
      });
    }
  });
});
