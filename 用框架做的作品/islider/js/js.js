   $(document).ready(function(){
        $("#button1").click(function(){
            $(".mask").css({
                "height":$(window).height(),
                "width":$(window).width(),
            }).fadeIn();
            $(".content").css({
                "top":($(window).height()-$(".content").height())/2,
                "left":($(window).width()-$(".content").width())/2,
            }).fadeIn();
            //监听浏览器窗口大小变化,根据当前窗口改变遮罩大小
            $(window).resize(function(){
                $(".mask").css({
                    "height":$(window).height(),
                    "width":$(window).width()
                })
            })
            //监听浏览器窗口大小变化,根据当前窗口居中弹出窗口
            $(window).resize(function(){
                $(".content").css({
                    "top":($(window).height()-$(".content").height())/2,
                    "left":($(window).width()-$(".content").width())/2,
                })
            })
        })
        $(".close").click(function(){
            $(".mask").fadeOut();
            $(".content").fadeOut();
        })
    })