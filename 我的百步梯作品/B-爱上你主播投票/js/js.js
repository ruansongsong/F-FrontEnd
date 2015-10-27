<<<<<<< HEAD
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
                   alert("投票成功");
                   var button = document.getElementById("vote");
                   button.style.background = "#000";
                   button.disabled = true
               }
               else
               {
                   alert("您已经投过票，请勿再投票！");
                   var button = document.getElementById("vote");
                   button.style.background = "#000";
                   button.disabled = true;
                   
               }
                

            }
        }
        request.open("POST","./php/vote.php",true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send("person="+vote_button_no);
    };
    //获取json中的姓名，循环输出到html中
     function show_name(num)
    {
            
            var request = new XMLHttpRequest();
            var get_info = {};
            request.open("GET","json/player_info.json",true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(e)
            {
                if(request.readyState == 4 && request.status == 200)
                {
                   
                    try
                    {
                        get_info = JSON.parse(request.responseText);
                        //alert(get_info.player[0].name);
                        
                        var player_name = document.getElementsByClassName("name");
                        for(var i = 0;i < 8;i++)
                        {
                            player_name[i].innerHTML = get_info.player[i].name;
                        }
                         
                       
                    }
                    catch(e)
                    {
                        console.error(e);
                    }
                    
                }
           
            }
    };
    //获取json中的详细介绍.
    function get_player_intro(num)
    {
            
            var request = new XMLHttpRequest();
            var get_info = {};
            request.open("GET","json/player_info.json",true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(e)
            {
                if(request.readyState == 4 && request.status == 200)
                {
                   
                    try
                    {
                        get_info = JSON.parse(request.responseText);
                        //alert(get_info.player[0].name);
                        
                        var player_intro = document.getElementById("player_intro");
                        player_intro.innerHTML = get_info.player[num].decription;
                         
                       
                    }
                    catch(e)
                    {
                        console.error(e);
                    }
                    
                }
           
            }
    };
    show_name();
        $(".intro").click(function(){
            $(".mask").css({
                "height":$(window).height(),
                "width":$(window).width(),
            }).fadeIn();
            $(".vote_content").css({
                "top":($(window).height()-$(".vote_content").height())/2,
                "left":($(window).width()-$(".vote_content").width())/2,
                
            }).fadeIn();
            $("#vote").css({
                "background":"red",
           
            });
            //获取选手信息的json文件
            //alert(get_i);
            //获取选手编号
            var num = this.getAttribute("player-no");
            console.log(num);
            //alert(num);
            //设置选手照片路径
            var player_image_src = "images/player_" + num + ".png";
            var player_image = document.getElementById('player_image');
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
           // alert(vote_button_no);
           
            // var request = new XMLHttpRequest();
            // request.open("POST","action.php",true);
            // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
            // request.send("player="+vote_button_no);
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
            //$(".vote_content").hide();
            //document.getElementsByClassName("vote_content").style.display='none';
        });
       $(".mask").click(function(){
            $(".vote_content").fadeOut();
            $(".mask").fadeOut();
       })
=======
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
            var request = new XMLHttpRequest();
            request.open("POST","action.php",true);
            request.send('player='+vote_button_no);
            
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
>>>>>>> 87bd5cf0064529e8d7d3229d929955602be98ea4
    })