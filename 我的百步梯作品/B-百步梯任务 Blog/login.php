
<?php
 $name = $_POST['username'];
 $password = $_POST['password'];  //��ȡ�û���������
 
 $link = mysql_connect("localhost","root","");
 if(!$link){
  echo "���ݿ�����ʧ�ܣ�";
  mysql_error();
 } //�������ݿ⣬��дһ��mysql_errro()�����кô������������Ϣ
 
 mysql_select_db("user");
 $exec = "SELECT * FROM user WHERE username='$name'"; //sql��䣬��ѯ�û����ƣ�
 $result = mysql_query($exec);
 $rows = mysql_num_rows($result);
 if($rows>0){
  $row = mysql_fetch_assoc($result);
  $lname=$row['username'];
  $rname=$row['username'];
  $lpassword=$row['password'];
  if($lpassword==$password){
   session_start();
   $_SESSION['olname']=$lname;
   $_SESSION['olrname']=$rname;   //���漸�ξ�������Ч�飬���Ƚϼ򵥣�������~
   echo "�û���½�ɹ�!";
   echo "<hr><p>��½�û��ǣ�".$rname."<p>";
   echo "<br>���������<a href=index2.php>ת��������ҳ</a>";
  }else{
   echo "�û���½ʧ�ܣ�<hr><p>";
   echo "�û��������벻��ȷ����";
   echo "<br><a href=login.php>�����µ�½</a>";
  }
 }else{
  echo "�û���½ʧ�ܣ�<hr><p>";
  echo "��ǰ�û������ڣ�";

 }
?>