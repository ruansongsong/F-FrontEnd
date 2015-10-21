   var id = document.getElementById('test');
   //var tel = document.getElementById('tel');

  window.onload=function (event) {
	  
	var request = new XMLHttpRequest(); 
	
	
	request.onreadystatechange = function(event) {
	
	
	
	  if(request.readyState == 4){    //获取请求返回值成功
	  
	   var data = {};   //创建接受数据的对象
	   
	   try
	   {  
	      data = JSON.parse(request.responseText);   //返回数据赋值data		  
	   } 
	   catch(e) 
	   {
		  console.error(e);
	   }
	   
			test.innerHTML=data[0];   //将对象取出放入页面
			//tel.innerHTML=data[1];
	
	   }
  
     };
   
     request.open("GET","note.php",true);  
  
     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
     
	 request.send();
    
	}