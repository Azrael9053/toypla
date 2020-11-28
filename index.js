$(document).ready(function () {

    var i = 0;

    var clone = $(".banner .img li").first().clone();//克隆第一張圖片
    $(".banner .img").append(clone);//複製到列表最後
    var size = $(".banner .img li").size();
    console.log(size);//計算li的數量

    //新增四個li,就是新增圓點
    for (var j = 0; j < size-1; j++) {
        $(".banner .num").append("<li></li>");
    }
    //給第一個li新增class on
    $(".banner .num li").first().addClass("on");

    /*移動事件*/
    function move() {
        if (i == size) {
            $(".banner .img").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $(".banner .img").css({ left: -(size - 1) * 500 });
            i = size - 2;
        }
        $(".banner .img").stop().animate({ left: -i * 500 }, 500);

        if (i == size - 1) {
            //eq(index)選擇器選取帶有指定 index 值的元素
            //siblings()遍歷所有同胞元素
            $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }


    //var t = setInterval(function () { i++; move();},2000);
    //$(selector).hover(inFunction,outFunction)
    /*自動輪播*/
    /*滑鼠懸停事件*/
    /*$(".banner").hover(function () {
        clearInterval(t);//滑鼠懸停時清除定時器
    }, function () {
        t = setInterval(function () { i++; move(); }, 2000); //滑鼠移出時重置定時器
    });*/

    /*滑鼠滾動監聽事件*/
    var scrollFunc=function(e){
        ee=e || window.event;
        if(e.wheelDelta){//IE/Opera/Chrome
            if(e.wheelDelta>0){
                console.log(e.wheelDelta);
                i++;
                console.log(i);
                move();
            }else{
                i--;
                console.log(e.wheelDelta);
                console.log(i);
                move();
            }
        }else if(e.detail){//Firefox
            if(e.detail>0){

                move();
            }else{

                move();
            }
        }
    }
    /*註冊事件*/
    if(document.addEventListener){
        //addEventListener(event,function,useCapture)
        //useCapture為boolean值，false(預設)z在冒泡階段執行，ture在捕獲階段執行
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }
    //window.onmousewheel=document.onmousewheel=scrollFunc;
    document.onmousewheel=scrollFunc;//滑鼠滾動一格觸發一次監聽事件,chrome支援，火狐不支援
    //window.onmousewheel=scrollFunc;//也只觸發一次事件，火狐瀏覽器不支援，chrome支援

    /*滑鼠滑入原點事件*/

    $(".banner .num li").hover(function () {

        var index = $(this).index();//獲取當前索引值
        i = index;
        $(".banner .img").stop().animate({ left: -index * 500 }, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });



    /*向左按鈕*/
    $(".banner .btn_l").click(function () {
        i++;
        move();
    })


    /*向右按鈕*/
    $(".banner .btn_r").click(function () {
        i--;
        move();
    })


});