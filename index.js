// $.ajax({
//     type : "GET",
//     url : "https://desfrlopez.me/dnoriega/api/tbl_estado",
//     success : function (data) {
//         console.log(data);
//         cuerpo(data);
//     },
//     dataType : "json"
// });

var url = "https://desfrlopez.me/dnoriega/api/";

$.getJSON(url + "tbl_estado", (data) => {
  console.log(data);
});

// cuerpo = (data) => {
//     let cuerpo = document.createElement("tr");

// };

insertarMarca = (e) => {
  e.preventDefault();
// var nombreMarca = $("[name='nombreMarca']").val();
// var paisOrigen = $("[name='paisOrigen']").val();

//   if(nombreMarca != "" && paisOrigen != ""){
//     let parametros = {
//         nombre_marca: nombreMarca,
//         pais_origen: paisOrigen,
//       };
//       $.post(url + "tbl_marcas",JSON.stringify(parametros),(data) => {
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

obtenerMarcas = () => {
$.getJSON(url + "tbl_marcas", (data) => {
    console.log(data);
    llenarSelectMarcas(data);
});
};


llenarSelectMarcas = (data) => {
    $("#selectMarcas").html("");
    $.each(data, (i,element) => {
        $("#selectMarcas").append(
        $("<option>").val(element.id_marca).text(element.nombre_marca));
    });
    console.log("Hola");
};
obtenerMarcas();