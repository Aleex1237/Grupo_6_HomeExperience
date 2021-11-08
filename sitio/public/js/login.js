const $ = (id) => document.getElementById(id);
const query = new URLSearchParams(location.search);

const formularioLogin= $('form-login')

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

window.addEventListener("load", () => {
   if(location.pathname == '/usuarios/iniciar-sesion'){
     console.log("CONECTADO SATISFACTORIAMENTE CON LOGIN");
    console.log(formularioLogin);

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

   
  

    formularioLogin.addEventListener("submit", (e) => {
      let error=false;
      e.preventDefault();
      let elementosFormulario = formularioLogin.elements;

      for (let i = 0; i < elementosFormulario.length -3; i++) {
        if (!elementosFormulario[i].value) {
          elementosFormulario[i].classList.add("is-invalid");
          $("error-vacio").innerHTML = "<br>Quedan campos por completar";
          error=true;
        }
      }
        if(!error) {
          formularioLogin.submit()
               }
      });
     } 
});


 