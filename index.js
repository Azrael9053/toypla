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

$(function() {
    var dir = -1;
    var interval = 5000;
    var duration = 1000;
    var timer;
    
    $("#slide ul").prepend($("#slide li:last-child"));

    $("#slide ul").css("left", -1000);

    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        if(dir == -1) {
            $("#slide ul").animate({"left":"-=1000px"}, duration,
            function() {
                $(this).append($("#slide li:first-child"));

                $(this).css("left", -1000);
            });
        }
        else {
            $("#slide ul").animate({"left":"+=1000px"}, duration,
            function() {
                $(this).prepend($("#slide li:last-child"));

                $(this).css("left", -1000);
                dir = -1;
            });
        }
    }

    $("#prevBtn").click(function() {
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    })

    $("#nextBtn").click(function() {
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    })
});