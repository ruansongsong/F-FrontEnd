   $(document).ready(function(){
    //投票功能
    function vote(vote_button_no)
    {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(e)
        {
            if(request.readyState == 4 && request.status == 200)
            {
                var get_data = {};
                try
                {
                   get_data = JSON.parse(request.responseText); 
                }
                catch(e)
                {
                    console.error(e);
                }
                //获取php返回数据
               if(get_data.wrong == 0)
               {
                   var button = document.getElementById("vote");
                   button.style.background = "#808080";
                   $("#vote").html("你已经投过票了");
                   alert("投票成功");
                   $("#vote").attr("disabled", "disabled").off('click');
               }
               else
               {
                   var button = document.getElementById("vote");
                   button.style.background = "#808080";
                   $("#vote").attr("disabled", "disabled").off('click');
                   $("#vote").html("你已经投过票了");
                   alert("您已经投过票，请勿再投票！");
                   $("#vote").attr("disabled", "disabled").off('click');
                   
               }
           }
        }
        request.open("POST","./php/vote.php",true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send("person="+vote_button_no);
    };
    //获取json中的详细介绍.
    function get_player_intro(num)
    {
         var  player=
         [
            {
                "name" : "选手1",
                "decription" : "阿狸，国内当红原创动漫形象，2006年由Hans创作，从网络与杂志连载开始，发行童话绘本和动画短片。迄今为止，阿狸的出版物突破250万销量，在线上拥有千万注册粉丝。一方面，其至萌至真的形象制作成多元的虚拟产品，成为互联网主要的内容供应商；"
            },
            {
                "name" : "选手2",
                "decription" : "哈哈哈啊哈啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            },
            {
                "name" : "选手3",
                "decription" : "选手3真的漂亮"
            },
            {
                "name" : "选手4",
                "decription" : "选手4好靓仔"
            },
            {
                "name" : "选手5",
                "decription" : "选手5真的漂亮"
            },
            {
                "name" : "选手6",
                "decription" : "选手6好靓仔"
            },
            {
                "name" : "选手7",
                "decription" : "选手7真的漂亮"
            },
            {
                "name" : "选手8",
                "decription" : "选手8好靓仔"
            }
        ];  
          
        var player_name = document.getElementById("player-name");                
        var player_intro = document.getElementById("player-detail");
        player_intro.innerHTML = player[num-1].decription;
        player_name.innerHTML =  player[num-1].name;  
                
           
            
    };
        $(".intro").click(function(){
            $(".mask").css({
                "height":$(window).height(),
                "width":$(window).width(),
            }).fadeIn();
            $(".vote-content").css({
                "top":($(window).height()-$(".vote-content").height())/2,
                "left":($(window).width()-$(".vote-content").width())/2,
                
            }).fadeIn();
          
            //获取选手信息的json文件
            //alert(get_i);
            //获取选手编号
            var num = this.getAttribute("player-no");
            console.log(num);
            //alert(num);
            //设置选手照片路径
            var player_image_src = "images/player" + num + ".png";
            var player_image = document.getElementById('players-image');
            player_image.setAttribute("src",player_image_src);
            player_image.setAttribute("alt","选手照片");
            //调用显示具体介绍函数
            get_player_intro(num);
            
            var vote_button = null;
            vote_button = document.getElementById("vote");
            
            //alert(num);
            //var set = document.getElementById("vote");
            vote_button.setAttribute("data-no", num);
            var vote_button_no = vote_button.getAttribute("data-no");
            $("#vote").unbind('click').click(function(){
                vote(vote_button_no);
               
            });
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
                $(".vote-content").fadeOut();
                //$(".vote-content").hide();
                //document.getElementsByClassName("vote-content").style.display='none';
            });
           $(".mask").click(function(){
                $(".vote-content").fadeOut();
                $(".mask").fadeOut();
           })
    })