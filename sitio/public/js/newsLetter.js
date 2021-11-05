window.addEventListener("load", () => {
  $("emailContact").addEventListener("blur", () => {
    if (!regExEmail.test($("emailContact").value)) {
      $("emailContact").classList.add("inputEmailNo");
      $("msgLetter").innerHTML = "Ingrese un correo electrónico válido";
      $("msgLetter").style.color = "crimson";
    } else {
      $("emailContact").classList.remove("inputEmailNo");
      $("emailContact").classList.add("inputEmail");
      $("msgLetter").innerHTML = null;
    }
  });





  if ($("area")) {
    $("area").addEventListener("keyup", () => {
      if ($("area").value.length > 500) {
        $("area").classList.remove("inputEmail");
        $("area").classList.add("inputEmailNo");
        $("msgArea").innerHTML =
          "Este campo acepta un maximo de 500 caracteres";
        $("msgArea").style.color = "crimson";
      } else {
        $("area").classList.remove("inputEmailNo");
        $("area").classList.add("inputEmail");
        $("msgArea").innerHTML = null;
      }
    });
  }

  $("contact").addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = false;

    let form = $("contact").elements;

    for (let i = 0; i < form.length - 1; i++) {
      if (!form[i].value) {
        $("emailContact").classList.remove("inputEmail");
        $("emailContact").classList.add("inputEmailNo");
        $("msgLetter").innerHTML = "Debe indicar un email";
        $("msgLetter").style.color = "crimson";
        errors = true;
      }

      if (!errors) {
        $("contact").submit();
      }
    }
  });
});
