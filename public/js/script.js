$(document).ready(function(){
    $("flashy").hover(function(){
        $('h3').css("color", "purple");
    }, function(){
        $('h3').css("color", "black");
    });
});