var url = "https://desfrlopez.me/dnoriega/api/";

obtenerMarcas = () => {
$.getJSON(url + "tbl_marcas", (data) => {
    console.log(data);
    llenarSelectMarcas(data);
    tablaMarcas(data);
});
};


llenarSelectMarcas = (data) => {
    $("#selectMarcas").html("<option selected value=''>Seleccione la marca</option>");
    $.each(data, (i,element) => {
        $("#selectMarcas").append(
        $("<option>").val(element.id_marca).text(element.nombre_marca));
    });
    console.log("Hola");
};

tablaMarcas = (data) => {
  $("#cuerpoMarcas").html("");
  $.each(data, (i,element) => {
    $("#cuerpoMarcas").append(
      $("<tr>").append(
      $("<td>").text(element.id_marca),
      $("<td>").text(element.nombre_marca),
      $("<td>").text(element.pais_origen)
      )
    );
  });
}

obtenerEstados = () => {
  $.getJSON(url + "tbl_estado", (data) => {
    console.log(data);
    tablaEstados(data);
    llenarSelectEstados(data);
});
};

llenarSelectEstados = (data) => {
  $("#pedidoEstado").html("<option selected value=''>Seleccione el estado</option>");
  $.each(data, (i,element) => {
      $("#pedidoEstado").append(
      $("<option>").val(element.id_estado).text(element.tipo_estado));
  });
};

tablaEstados = (data) => {
$("#cuerpoEstados").html("");
$.each(data, (i,element) => {
  $("#cuerpoEstados").append(
    $("<tr>").append(
    $("<td>").text(element.id_estado),
    $("<td>").text(element.tipo_estado)
    )
  );
});
};

obtenerPaises = () => {
  $.getJSON(url + "tbl_paises", (data) => {
    console.log(data);
    tablaPaises(data);
    llenarSelectPaises(data);
});
}

llenarSelectPaises = (data) => {
  $("#pedidoPais").html("<option selected value=''>Seleccione el pais de envio</option>");
  $.each(data, (i,element) => {
      $("#pedidoPais").append(
      $("<option>").val(element.id_pais).text(element.nombre_pais));
  });
};

tablaPaises = (data) => {
  $("#cuerpoPaises").html("");
$.each(data, (i,element) => {
  $("#cuerpoPaises").append(
    $("<tr>").append(
    $("<td>").text(element.id_pais),
    $("<td>").text(element.nombre_pais)
    )
  );
});
}

obtenerTiposEnvios = () => {
  $.getJSON(url + "tbl_tipoEnvio", (data) => {
    console.log(data);
    tablaTipoEnvios(data);
    llenarSelectTipoEnvio(data);
});
}

llenarSelectTipoEnvio = (data) => {
  $("#pedidoTipoEnvio").html("<option selected value=''>Seleccione el tipo de envio</option>");
  $.each(data, (i,element) => {
      $("#pedidoTipoEnvio").append(
      $("<option>").val(element.id_tipoEnvio).text(element.el_tipoEnvio));
  });
};

tablaTipoEnvios = (data) => {
  $("#cuerpoTipoEnvios").html("");
  $.each(data, (i,element) => {
    $("#cuerpoTipoEnvios").append(
      $("<tr>").append(
      $("<td>").text(element.id_tipoEnvio),
      $("<td>").text(element.el_tipoEnvio)
      )
    );
  });
}

obtenerProductos = () => {
  $.getJSON(url + "tbl_productos", (data) => {
    console.log(data);
    tablaProductos(data);
    llenarSelectProductos(data);
});
}

llenarSelectProductos = (data) => {
  $("#productoPedido").html("<option selected value=''>Seleccione el producto</option>");
  $.each(data, (i,element) => {
      $("#productoPedido").append(
      $("<option>").val(element.id_producto).text(element.nombre_producto));
  });
};

tablaProductos = (data) => {
  $("#cuerpoProductos").html("");
  $.each(data, (i,element) => {
    $("#cuerpoProductos").append(
      $("<tr>").append(
      $("<td>").text(element.id_producto),
      $("<td>").text(element.nombre_producto),
      $("<td>").text(element.caracteristicas_producto),
      $("<td>").text(element.id_marca),
      )
    );
  });
}

obtenerClientes = () => {
  $.getJSON(url + "tbl_clientes", (data) => {
    console.log(data);
    tablaClientes(data);
    llenarSelectClientes(data);
});
}

llenarSelectClientes = (data) => {
  $("#clientePedido").html("<option selected value=''>Seleccione el cliente</option>");
  $.each(data, (i,element) => {
      $("#clientePedido").append(
      $("<option>").val(element.id_cliente).text(element.nombre_cliente));
  });
};

tablaClientes = (data) => {
  $("#cuerpoClientes").html("");
  $.each(data, (i,element) => {
    $("#cuerpoClientes").append(
      $("<tr>").append(
      $("<td>").text(element.id_cliente),
      $("<td>").text(element.nombre_cliente),
      $("<td>").text(element.apellido_cliente),
      $("<td>").text(element.dni_cliente),
      $("<td>").text(element.direccion_cliente)
      )
    );
  });
}

obtenerPedidos = () => {
  $.getJSON(url + "tbl_pedidos", (data) => {
    console.log(data);
    tablaPedidos(data);
});
}

tablaPedidos = (data) => {
  $("#cuerpoPedidos").html("");
  $.each(data, (i,element) => {
    $("#cuerpoPedidos").append(
      $("<tr>").append(
      $("<td>").text(element.id_pedido),
      $("<td>").text(element.id_cliente),
      $("<td>").text(element.id_producto),
      $("<td>").text(element.id_estado),
      $("<td>").text(element.id_pais),
      $("<td>").text(element.id_tipoEnvio),
      $("<td>").text(element.fecha_pedido),
      )
    );
  });
}

obtenerEstados();
obtenerMarcas();
obtenerPaises();
obtenerTiposEnvios();
obtenerProductos();
obtenerClientes();
obtenerPedidos();



insertarMarca = (e) => {
  e.preventDefault();
// var nombreMarca = $("[name='nombreMarca']").val();
// var paisOrigen = $("[name='paisOrigen']").val();

//   if(nombreMarca != "" && paisOrigen != ""){
//     var parametros = {
//         nombre_marca: nombreMarca,
//         pais_origen: paisOrigen,
//       };
//       var object = JSON.stringify(parametros)
//       $.post(url + "tbl_marcas", object).done((data) => {
//         console.log(data);
//         alert("Se ingreso correctamente");
//       }, "json");
//   }


var nombreMarca = $("[name='nombreMarca']").val();
var paisOrigen = $("[name='paisOrigen']").val();

  if(nombreMarca != "" && paisOrigen != ""){
    let parametros = {
        nombre_marca: nombreMarca,
        pais_origen: paisOrigen,
      };

$.ajax({
    type: "POST",
    url: url + "tbl_marcas",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerMarcas();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarProducto = (e) => {
  e.preventDefault();

  var nombreProducto = $("[name='nombreProducto']").val();
  var caracteristicasProducts = $("[name='caracteristicasProducts']").val();
  var tipoMarca = $("[name='tipoMarca']").val();


  if(nombreProducto != "" && caracteristicasProducts != "" && tipoMarca != ""){
    let parametros = {
      nombre_producto: nombreProducto,
      caracteristicas_producto: caracteristicasProducts,
      id_marca : tipoMarca
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_productos",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerProductos();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarCliente = (e) => {
  e.preventDefault();

  var nombreCliente = $("[name='nombreCliente']").val();
  var apellidoCliente = $("[name='apellidoCliente']").val();
  var dniCliente = $("[name='dniCliente']").val();
  var direccionCliente = $("[name='direccionCliente']").val();


  if(nombreCliente != "" && apellidoCliente != "" && dniCliente != "" && direccionCliente != ""){
    let parametros = {
      nombre_cliente	: nombreCliente,
      apellido_cliente: apellidoCliente,
      dni_cliente : dniCliente,
      direccion_cliente : direccionCliente
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_clientes",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerClientes();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarEstado = (e) => {
  e.preventDefault();

  var tipoEstado = $("[name='tipoEstado']").val();

  if(tipoEstado != ""){
    let parametros = {
      tipo_estado	: tipoEstado
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_estado",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerEstados();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarPais = (e) => {
  e.preventDefault();

  var nombrePais = $("[name='nombrePais']").val();

  if(nombrePais != ""){
    let parametros = {
      nombre_pais	: nombrePais
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_paises",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerPaises();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarTipoEnvio = (e) => {
  e.preventDefault();

  var tipoEnvio = $("[name='tipoEnvio']").val();

  if(tipoEnvio != ""){
    let parametros = {
      el_tipoEnvio	: tipoEnvio
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_tipoEnvio",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerTiposEnvios();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};

insertarPedido = (e) => {
  e.preventDefault();
  var fechaHoy = new Date().getDate();
  var mesHoy = new Date().getMonth();
  var añoHoy = new Date().getFullYear();

  var clientePedido = $("[name='clientePedido']").val();
  var productoPedido = $("[name='productoPedido']").val();
  var pedidoEstado = $("[name='pedidoEstado']").val();
  var pedidoPais = $("[name='pedidoPais']").val();
  var pedidoTipoEnvio = $("[name='pedidoTipoEnvio']").val();
  var fechaActual = new Date(añoHoy, mesHoy, fechaHoy);

// console.log(fechaHoy, mesHoy, añoHoy,);

  if(clientePedido != "" && productoPedido != "" && pedidoEstado != "" && pedidoPais != "" && pedidoTipoEnvio != ""){
    let parametros = {
      id_cliente	: clientePedido,
      id_producto	: productoPedido,
      id_estado	: pedidoEstado,
      id_pais	: pedidoPais,
      id_tipoEnvio	: pedidoTipoEnvio,
      fecha_pedido	: fechaActual,
      };
      console.log(parametros);

$.ajax({
    type: "POST",
    url: url + "tbl_pedidos",
    data: JSON.stringify(parametros),
    success: function(data){
        console.log(data);
        obtenerPedidos();
    },
    dataType: "json", 
    contentType: "application/json; charset=utf-8",
    async:false
  });
}
};



putProductos = () => {
  var datosPedidos = {
    nombre_producto: $("[name = 'nombreProducto']").val(),
    caracteristicas_producto: $("[name = 'caracteristicasProducts']").val(),
    id_marca: $("[name = 'tipoMarca']").val()
  };
  let id = $("[name = 'idProducto']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_productos"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

putclientes = () => {
  var datosPedidos = {
    nombre_cliente: $("[name = 'nombreCliente']").val(),
    apellido_cliente: $("[name = 'apellidoCliente']").val(),
    dni_cliente: $("[name = 'dniCliente']").val(),
    direccion_cliente: $("[name = 'direccionCliente']").val(),
  };
  let id = $("[name = 'idCliente']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_clientes"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

putEstados = () => {
  var datosPedidos = {
    tipo_estado: $("[name = 'tipoEstado']").val()
  };
  let id = $("[name = 'idEstado']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_estado"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

putPais = () => {
  var datosPedidos = {
    nombre_pais: $("[name = 'nombrePais']").val()
  };
  let id = $("[name = 'idPais']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_paises"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

putTipoEnvio = () => {
  var datosPedidos = {
    el_tipoEnvio: $("[name = 'tipoEnvio']").val()
  };
  let id = $("[name = 'idTipoEnvio']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_tipoEnvio"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

putPedidos = () => {
  var fechaHoy = new Date().getDate();
  var mesHoy = new Date().getMonth();
  var añoHoy = new Date().getFullYear();
  let parametros = {
    id_cliente	: $("[name='clientePedido']").val(),
    id_producto	: $("[name='productoPedido']").val(),
    id_estado	: $("[name='pedidoEstado']").val(),
    id_pais	: $("[name='pedidoPais']").val(),
    id_tipoEnvio	: $("[name='pedidoTipoEnvio']").val(),
    fecha_pedido	: new Date(añoHoy, mesHoy, fechaHoy)
    };
    
    let id = $("[name = 'idPedido']").val();
    $.ajax({
      type: "PUT",
      url: url + "tbl_pedidos"+"/"+id,
      data: JSON.stringify(parametros),
      success: function (data) {
        console.log(data);
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    });
}

putMarca = () => {
  var nombreMarca = $("[name='nombreMarca']").val();
var paisOrigen = $("[name='paisOrigen']").val();

  var datosPedidos = {
    nombre_marca: nombreMarca,
    pais_origen: paisOrigen,
  };
  let id = $("[name = 'idMarca']").val();
  $.ajax({
    type: "PUT",
    url: url + "tbl_marcas"+"/"+id,
    data: JSON.stringify(datosPedidos),
    success: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}

function BorrarProducto(){
  let id = $("[name = 'nombreProducto']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_productos"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}

function BorrarMarca(){
  let id = $("[name = 'idMarca']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_marcas"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}

function BorrarCliente(){
  let id = $("[name = 'idCliente']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_clientes"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })

}

function BorrarEstado(){
  let id = $("[name = 'idEstado']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_estado"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })

}

function BorrarPais(){
  let id = $("[name = 'idPais']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_paises"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })

}


function BorrarEnvio(){
  let id = $("[name = 'idTipoEnvio']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_tipoEnvio"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}



function BorrarPedido(){
  let id = $("[name = 'idPedido']").val();

  $.ajax({
    type: "DELETE",
    url: url+"tbl_pedidos"+"/"+id,
    success: function (data){
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  })
}