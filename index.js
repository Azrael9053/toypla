// $(function() {
//     $("#navi").children("li").hover(function() {
//         $(this).children("ul").stop().slideToggle(100)
//     });
// });

$(function() {
    var headerPos = $("header").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > headerPos){
            $("header").css("position", "fixed");
            $("body").addClass("is-sticky");
        }
        else{
            $("header").css("position", "static");
            $("body").removeClass("is-sticky");
        }
    });
});

$(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        var target = $($(this).attr("href")).offset().top;
        target -= 85;

        $("html, body").animate({scrollTop: target}, 500);

        return false;
    })
})

