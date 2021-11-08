const btn = $("btnSearch");
const productsApi = async () => {
  try {
    let response = await fetch("/api/productos");
    let productos = await response.json();
    $("product-container").innerHTML = null;
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
        })" type="submit">${
          producto.active == 1 ? "Ocultar" : "Mostrar"
        }</button>
            <input value="${
              producto.active
            }" style="display:none;" type="number" disabled>

          <a href="/admin/producto/modificar/${producto.id}"
            ><button class="edit" type="submit">Editar</button>
            </a>
          
            <button class="delete" id="deleteProduct" onclick="EventoAlert(${
              producto.id
            })">
              Eliminar
            </button>
        </div>
        </div>`;

        $("product-container").innerHTML += item;
      });
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

    if (response.ok == false) {
      location.reload();
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

async function hideProduct(productId, action) {
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
        productsApi();
      } else {
        console.log(response);
      }
    } else {
      const response = await fetch(`/api/productos/mostrar`, options);
      if (response.ok) {
        console.log("ok");
        productsApi();
      } else {
        Swal.fire({
          icon: "error",
          title: "algo salio mal",
          text: "intenta mas tarde!",
          confirmButtonText: "Entendido",
        });
      }
    }
  } catch (error) {
    console.log("hola");
    Swal.fire({
      icon: "error",
      title: "algo salio mal",
      text: "intenta mas tarde!",
      confirmButtonText: "Entendido",
    });
  }
}

window.addEventListener("load", () => {
  productsApi();
  btn.addEventListener("click", () => {
    window.location.replace(
      `/admin/productos/buscar?searchProducts=${$("search").value}`
    );
  });
});
