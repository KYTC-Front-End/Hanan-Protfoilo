$(function(){
    $(".nav-item").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    });
});
