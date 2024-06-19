



$(document).ready(function(){

    $("#cont_project").hide(); 
    
    $("#btn-view").click(function(){
        $("#cont_project-mini").hide(500); 
        $("#cont_project").slideDown(800); 
        // $()
        // $("").slideDown(); 
        // $(".trial").slideDown(); 
        // $("p").hide();
    });

    $("#btn-view-less").click(function(){
        $('#cont_project').hide(500); 
        $('#cont_project-mini').slideDown(500); 
        // $('')
    }); 
    
});