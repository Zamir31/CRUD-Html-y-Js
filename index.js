$.ajax({
    type : "GET",
    url : "https://desfrlopez.me/dnoriega/api/estados/",
    success : function (data) {
        console.log(data);
        cuerpo(data);
    },
    dataType : "json"
});

cuerpo = (data) => {
    let cuerpo = document.createElement("tr");
    
}