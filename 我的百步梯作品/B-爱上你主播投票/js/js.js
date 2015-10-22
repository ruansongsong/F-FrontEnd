   $(document).ready(function(){

        $(".intro").click(function(){
            $(".mask").css({
                "height":$(window).height(),
                "width":$(window).width(),
            }).fadeIn();
            $(".vote_content").css({
                "top":($(window).height()-$(".vote_content").height())/2,
                "left":($(window).width()-$(".vote_content").width())/2,
            }).fadeIn();
            
            var num = this.getAttribute("player-no");
            var vote_button = document.getElementById("vote");
            //alert(num);
            var set = document.getElementById("vote");
            set.setAttribute("data-no", num);
            var vote_button_no = vote_button.getAttribute("data-no");
            alert(vote_button_no);
            
            //监听浏览器窗口大小变化,根据当前窗口改变遮罩大小
            $(window).resize(function(){
                $(".mask").css({
                    "height":$(window).height(),
                    "width":$(window).width()
                })
            })
            //监听浏览器窗口大小变化,根据当前窗口居中弹出窗口
            $(window).resize(function(){
                $(".vote_content").css({
                    "top":($(window).height()-$(".vote_content").height())/2,
                    "left":($(window).width()-$(".vote_content").width())/2,
                })
            })
        })
        $(".close").click(function(){
            $(".mask").fadeOut();
            $(".vote_content").fadeOut();
        })
    })