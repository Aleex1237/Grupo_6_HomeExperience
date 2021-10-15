let search = document.getElementById("search")
let formSearch = document.getElementById("formSearch")
window.addEventListener("load", () => {
    
    formSearch.addEventListener("submit",(e)=>{
      if(search.value.length == 0){
        e.preventDefault();
      }
    })
})
