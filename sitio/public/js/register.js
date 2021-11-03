let regExName = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
let regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,12}$/;
let regExDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;

//const $ = (id) => document.getElementById(id);

window.addEventListener("load", () => {
  console.log("CONECTADO SATISFACTORIAMENTE CON REGISTER");

    const formularioRegister = $("form-register");

    console.log(formularioRegister);
  });

  /*validaciones */

  /* validación nombre */

  $("name").addEventListener("blur", () => {
    if (!regExName.test($("name").value)) {
      $("name").classList.add("is-invalid");
      $("error-name").innerHTML =
        "Ingrese un nombre válido<br>La primer letra debe estar en mayúscula";
    } else {
      $("name").classList.remove("is-invalid");
      $("name").classList.add("is-valid");
      $("error-name").innerHTML = null;
    }
  });

  /* validación correo electrónico */

  $("email").addEventListener("blur", () => {
    if (!regExEmail.test($("email").value)) {
      $("email").classList.add("is-invalid");
      $("error-email").innerHTML = "Ingrese un correo electrónico válido";
    } else {
      $("email").classList.remove("is-invalid");
      $("email").classList.add("is-valid");
      $("error-email").innerHTML = null;
    }
  });

  /* validación fecha de nacimiento */

  /*  $("fecha_nac").addEventListener("blur", () => {
    if (!regExDate.test($("fecha_nac").value)) {
      $("fecha_nac").classList.add("is-invalid");
      $("error-date").innerHTML = "Ingrese una fecha válida";
    } else {
      $("fecha_nac").classList.remove("is-invalid");
      $("fecha_nac").classList.add("is-valid");
      $("error-date").innerHTML = null;
    }
  });  */


  const fechaNacimiento= document.getElementById('fecha_nac');
  const menorEdad= document.getElementById('error-date')

  const calcularEdad=(fechaNacimiento)=> {
    const fechaActual= new Date();
    const anoActual= parseInt(fechaActual.getFullYear())
    const mesActual= parseInt(fechaActual.getMonth())+1;
    const diaActual= parseInt(fechaActual.getDay())

    /* 2016-07-11 es el formato de la fecha */
    const anoNacimiento= parseInt(String(fechaNacimiento).substring(0,4))
    const mesNacimiento= parseInt(String(fechaNacimiento).substring(5,7))
    const diaNacimiento= parseInt(String(fechaNacimiento).substring(8,10))


    let edad= anoActual-anoNacimiento
    if(mesActual<mesNacimiento){
      edad--
    } else if(mesActual===mesNacimiento){
      if(diaActual<diaNacimiento){
        edad--
      }
    }
    return edad
  }

  window.addEventListener('load', function (){
     fechaNacimiento.addEventListener('change', function(){
      let edadFinal= calcularEdad(this.value)
      console.log(edadFinal);

       if(edadFinal<18) {
        $("fecha_nac").classList.add("is-invalid");
        $("error-date").innerHTML = "Debes ser mayor de edad";
    } else {
        $("fecha_nac").classList.remove("is-invalid");
       $("fecha_nac").classList.add("is-valid");
        $("error-date").innerHTML = null; 
      } 
    })
  }) 

  /* validación Password*/

  $("password").addEventListener("blur", () => {
    if (!regExPassword.test($("password").value.trim())) {
      $("password").classList.add("is-invalid");
      $("error-password").innerHTML =
        "<br>La contraseña debe tener:<br>- Entre 8 y 12 caracteres<br>- Al menos una mayúscula<br>- Al menos un número";
    } else {
      $("password").classList.remove("is-invalid");
      $("password").classList.add("is-valid");
      $("error-password").innerHTML = null;
    }
  });

  /* validación confirmación de contraseña */

  $("password2").addEventListener("blur", () => {
    if ($("password").value.trim() !== $("password2").value.trim()) {
      $("password2").classList.add("is-invalid");
      $("error-password2").innerHTML = "<br>Las contraseñas no coinciden";
    } else {
      $("password2").classList.remove("is-invalid");
      $("password2").classList.add("is-valid");
      $("error-password2").innerHTML = null;
    }
  });

  /* validación check */

  $("checkbox").addEventListener("click", () => {
    $("checkbox").classList.toggle("is-valid");
    $("checkbox").classList.remove("is-invalid");
    $("error-acepta").innerHTML = null;
  });

  /* validación submit */

  $("form-register").addEventListener("submit", (e) => {
    e.preventDefault();

    let elementosForm = $("form-register").elements;
    let error = false;

    for (let i = 0; i < elementosForm.length - 1; i++) {
      if (!elementosForm[i].value) {
        elementosForm[i].classList.add("is-invalid");
        $("error-vacio").innerHTML = "Quedan campos por completar";
        error = true;
      }
    }
    if (!$("checkbox").checked) {
      $("checkbox").classList.add("is-invalid");
      $("error-acepta").innerHTML = "Debes aceptar los términos y condiciones";
      error = true;
    }
    if (!error) {
      $("form-register").submit();
    }
  });

  function mostrar(){
    var tipo= document.getElementById('password')
    var ocultarMostrar= document.getElementById('mostrarPass')
    if(tipo.type =='password'){
        tipo.type= 'text';
        ocultarMostrar.innerHTML= 'Ocultar contraseña'
    } else {
        tipo.type='password'
        ocultarMostrar.innerHTML= 'Mostrar contraseña'
    }
    }

 
    function mostrar2(){
      var tipo= document.getElementById('password2')
      var ocultarMostrar= document.getElementById('mostrarPass2')
      if(tipo.type =='password'){
          tipo.type= 'text';
          ocultarMostrar.innerHTML= 'Ocultar contraseña'
      } else {
          tipo.type='password'
          ocultarMostrar.innerHTML= 'Mostrar contraseña'
      }
      }