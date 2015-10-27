<?php   
    $lifeTime = 8 * 3600;       //8小时的session
    session_set_cookie_params($lifeTime);
    session_start();
?>

<?php
    $wrong; //存储错误信息
    $link = new mysqli(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
    
    //检测是否设置过SESSION
    if(!isset($_SESSION["havePolled"])){
        
        $_SESSION["havePolled"] = "true";
        echo "设置session"."<br>";

        if($link){
        //检测该IP是否已投票
            //echo "".$_SERVER['HTTP_REFERER'] ."<br>";
            $IP = $_SERVER['REMOTE_ADDR'];
            $sql = "SELECT COUNT(*) FROM `vote_ip` WHERE `VOTE_IP` =  INET_ATON('$IP')";
            $data = $link->query($sql);
            $row = $data->fetch_row();
            
            if($row[0] == 0 ){
                
                $voteTime = time();
                $sql = "INSERT INTO `vote_ip` (`VOTE_IP`,`VOTE_TIME`) VALUES(INET_ATON('$IP'),$voteTime)";
                //echo $sql;
                if($link->query($sql))
                    ;//echo "新IP已添加"."<br>";
                else
                    ;//echo "添加失败";

                //更新vote库 
                $number = $_POST['person'];
                $sql1 = 'SELECT `poll` FROM `vote` WHERE `id` = ' . $number ;
                $data = $link->query($sql1);
                $poll = $data->fetch_row();
                $newpoll = $poll[0] + 1;    
                $sql2 = 'UPDATE `vote` SET `poll` = '. $newpoll . ' WHERE `id` = ' . $number;
                if($link->query($sql2))
                   //echo "投票成功!"."<br>";

            }
        else
        {
                             
                //echo"<br>";
               // echo "这一IP已投票"."<br>";
                $wrong = array('wrong' => 1);
                //echo json_encode($wrong1);
            }   
        }   
            
     }else{
        
       // echo "您已经投过票了╮(╯▽╰)╭";
        $wrong = array('wrong' => 1);
        //echo json_encode($wrong2);
    
    }

    $sql3 = 'SELECT `poll` FROM `vote` ';
    $result = $link->query($sql3);
    $totalPoll = 0;
    $Poll;
    $i = 0;
    while($row = $result->fetch_row()){
        $totalPoll += $row[0];
        $Poll[$i++] = $row[0];
    }
            
    $data = array_merge( $Poll,array('totalPoll' => $totalPoll),$wrong);
    echo json_encode($data);
?>
