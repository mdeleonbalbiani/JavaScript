
$(document).ready(function(){
    $("#mostrarFormulario").click(function(){
        $("#div1").fadeIn("slow", function(){
            $("#div2").fadeIn("slow", function(){
                $("#div3").fadeIn("slow", function(){
                    $("#div4").fadeIn("slow", function(){
                        $("#div5").fadeIn("slow", function(){
                            $("#div6").fadeIn("slow", function(){
                                $("#div7").fadeIn("slow", function(){
                                    $("#submit-btn").fadeIn("slow");
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});