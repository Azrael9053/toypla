$(function() {
    $("#navi").children("li").hover(function() {
        $(this).children("ul").stop().slideToggle(100)
    });
});

$(function() {
    var headerPos = $("header").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > headerPos){
            $("header").css("position", "fixed");
        }
        else{
            $("header").css("position", "static");
        }
    });
});

$(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        var target = $($(this).attr("href")).offset().top;
        target -= 110;

        $("html, body").animate({scrollTop: target}, 500);

        return false;
    })
})