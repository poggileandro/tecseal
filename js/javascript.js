document.addEventListener("DOMContentLoaded", function() {
  // Obtener el parámetro de la URL que contiene la información sobre los productos a mostrar
  var params = new URLSearchParams(window.location.search);
  var productosAMostrar = params.get("productos");

  // Obtener el contenedor de la galería
  var galeriaContainer = document.getElementById("galeria");
  
  // Separar los productos en un array
  var productosArray = productosAMostrar.split("-");
  
  // Iterar sobre los productos y crear elementos <img> para cada uno
  for (var i = 0; i < productosArray.length; i++) {
      var producto = productosArray[i];

      // Crear la imagen correspondiente y agregarla al contenedor de la galería
      var imagen = document.createElement("img");
      imagen.src = "../imagenes/producto" + producto + ".jpg";
      imagen.classList.add("img-producto"); // Agrega la clase img-producto si es necesario

      // Crear un contenedor de columna
      var columna = document.createElement("div");
      columna.classList.add("col-lg-4", "col-md-6", "col-12","div1"); // 3 imágenes por fila en pantallas grandes, 2 en medianas y 1 en pequeñas

      // Agregar la imagen al contenedor de columna
      columna.appendChild(imagen);

      // Agregar la columna al contenedor de la galería
      galeriaContainer.appendChild(columna);
  }
});
