const $ = (id) => document.getElementById(id);
const query = new URLSearchParams(location.search);
let regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
window.addEventListener("load", () => {
  if(location.pathname == '/usuarios/iniciar-sesion'){
    console.log("CONECTADO SATISFACTORIAMENTE CON LOGIN");

    $("floatingInput").addEventListener("blur", () => {
      if (!regExEmail.test($("floatingInput").value)) {
        $("floatingInput").classList.add("is-invalid");
        $("error-mail").innerHTML = "Ingrese un correo electrónico válido";
      } else {
        $("floatingInput").classList.remove("is-invalid");
        $("floatingInput").classList.add("is-valid");
        $("error-mail").innerHTML = null;
      }
    });

    let password = document.getElementById("floatingPassword");

    password.addEventListener("blur", () => {
      if (!password.value) {
        password.classList.add("is-invalid");
        $("error-password").innerHTML = "Ingrese su contraseña";
      } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        $("error-password").innerHTML = null;
      }
    });

    $("form-login").addEventListener("submit", (e) => {
      e.preventDefault();

      let elementosForm = $("form-login").elements;
      let error = false;

      for (let i = 0; i < elementosForm.length - 1; i++) {
        if (!elementosForm[i].value) {
          elementosForm[i].classList.add("is-invalid");
          $("error-vacio").innerHTML = "<br>Quedan campos por completar";
          error = true;
        }
        if (!error) {
          $("form-login").submit();
        }
      }
    });
    }
  
});

function mostrar(){
    var tipo= document.getElementById('floatingPassword')
    var ocultarMostrar= document.getElementById('mostrarPass')
    if(tipo.type =='password'){
        tipo.type= 'text';
        ocultarMostrar.innerHTML= 'Ocultar contraseña'
    } else {
        tipo.type='password'
        ocultarMostrar.innerHTML= 'Mostrar contraseña'
    }
    }

 