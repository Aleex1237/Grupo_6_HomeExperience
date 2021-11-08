const btn = $("btnSearch");

const productsApi = async (query) => {
  try {
    let result = await fetch(`/api/productos/buscar?searchProducts=${query}`);
    let productos = await result.json();
    $("product-container").innerHTML = null;
    $("noResult").innerHTML = null;
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const search = urlParams.get("searchProducts");

    $("resultSearch").innerHTML = "Resultados de la búsqueda de:";
    $("resultSearch").innerHTML = `Resultados de la búsqueda de: ${search}`;

    if (productos.total > 0) {
      productos.data.forEach((producto) => {
        let item = `
          <div class="container">
         
           <img src="/images/products/${
             producto.images[0].name
           }" alt="Imagen de ${producto.name}" />
          <ul>
            <li>${producto.name}</li>
            <li class="product-category">Categoria : ${
              producto.category.name
            }</li>
            <li>ID del producto : ${producto.id}</li>
            <li>$${producto.price}</li>
          </ul>
          
          <div class="form">
              <button class="hide" onclick="hideProduct(${producto.id},${
          producto.active
        },'${producto.name}')" type="submit">${
          producto.active == 1 ? "Ocultar" : "Mostrar"
        }</button>
              <input value="${
                producto.active
              }" style="display:none;" type="number" disabled>
  
            <a href="/admin/producto/modificar/${producto.id}"
              ><button class="edit" type="submit">Editar</button>
              </a>
            
              <button class="delete" type="submit" onclick="EventoAlert(${
                producto.id
              })">
                Eliminar
              </button>
          </div>
          </div>`;

        $("product-container").innerHTML += item;
      });
    } else {
      $("noResult").innerHTML = "no hay resultados de busqueda. <a href='http://localhost:3000/admin/productos'>Volver</a>";
    }
  } catch (error) {
    console.log(error);
  }
};

async function deleteProduct(productId) {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: productId }),
  };
  try {
    const response = await fetch(`/admin/productos/eliminar`, options);
    console.log(response);
    if (response.ok == false) {
      window.location.replace(
        `/admin/productos`
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "algo salio mal",
        text: "intenta mas tarde!",
        confirmButtonText: "Entendido",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function hideProduct(productId, action, productoName) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: productId }),
  };
  try {
    if (action == 1) {
      const response = await fetch(`/api/productos/ocultar`, options);
      if (response.ok) {
        console.log("ok");
        productsApi(productoName);
      } else {
        console.log(response);
      }
    } else {
      const response = await fetch(`/api/productos/mostrar`, options);
      if (response.ok) {
        console.log("ok");
        productsApi(productoName);
      } else {
        Swal.fire({
          title: "algo salio mal",
          text: "intenta mas tarde!",
          confirmButtonText: "Entendido",
        });
      }
    }
  } catch (error) {
    console.log("hola");
    Swal.fire({
      title: "algo salio mal",
      text: "intenta mas tarde!",
      confirmButtonText: "Entendido",
    });
  }
}

window.addEventListener("load", () => {
  const values = window.location.search;
  const urlParamsDos = new URLSearchParams(values);
  const searchDos = urlParamsDos.get("searchProducts");
  productsApi(searchDos);

  btn.addEventListener("click", () => {
    productsApi($("search").value);
  });
});
