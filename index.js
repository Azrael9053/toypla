$(function() {
    $("#navi").children("li").hover(function() {
        $(this).children("ul").stop().slideToggle(100)
    });
});