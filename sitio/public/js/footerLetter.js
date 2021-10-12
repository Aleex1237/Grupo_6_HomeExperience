let regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
window.addEventListener("load", () => {
  console.log($("emailContactFooter"));
  $("emailContactFooter").addEventListener("keyup", () => {
      if(!regExEmail.test($("emailContactFooter").value.trim())){
          $("emailContactFooter").classList.remove("inputEmail");
          $("emailContactFooter").classList.add("inputEmailNo")
      }else{
        $("emailContactFooter").classList.remove("inputEmailNo")
        $("emailContactFooter").classList.add("inputEmail");
      }
  });

  $("contact").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});