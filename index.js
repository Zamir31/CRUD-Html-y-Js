$.ajax({
    type : "GET",
    url : "https://desfrlopez.me/dnoriega/api/tbl_estado",
    success : function (data) {
        console.log(data);
        cuerpo(data);
    },
    dataType : "json"
});

cuerpo = (data) => {
    let cuerpo = document.createElement("tr");
    
};

